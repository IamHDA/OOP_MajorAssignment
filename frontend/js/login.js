// mở / đóng login box
function openLoginBox(){
    var login = document.querySelector(".login");
    var loginBox = document.querySelector('.login__box');

    login.addEventListener('click', function(){
        loginBox.style.display = 'block';
    })
}

function closeLoginBox(){
    var exitLoginBox = document.querySelector('.exitLoginBox');
    var loginBox = document.querySelector('.login__box');
    exitLoginBox.addEventListener('click', function(){
        loginBox.style.display = 'none';
        // reset
        document.querySelector(".login__box__email").value = "";
        document.querySelector(".login__box__password").value = "";
        document.querySelector(".incorrectEmail").style.display = "none";
    })
}

// An vao dang ky trong o dang nhap
function secondaryRegister(){
    var registerF = document.querySelector(".registerF");
    var loginBox = document.querySelector('.login__box');
    var registerBox = document.querySelector(".register__box");

    registerF.addEventListener('click', function(){
        loginBox.style.display = 'none';
        registerBox.style.display = 'block';
    })
}

//saveUserName
async function saveUserName(){
    await checkAccessTokenIsvalid();
    let response = await fetch('http://localhost:8080/user/info', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`
        }    
    });

    response = await response.json();
    localStorage.setItem("name", response.name);
    tmp = '<p> Xin chào ' + response.name + '<p>';
    var account = document.querySelector('.account');
    account.innerHTML = tmp;     
}

// login
async function login(){
    var loginButton = document.querySelector(".login__button");

    loginButton.addEventListener('click', async function(){
        var email = document.querySelector('.login__box__email').value;
        var password = document.querySelector('.login__box__password').value;

        const data = {
            dataEmail: email,
            dataUserPassword: password
        }

        // day tai khoan mat khau len server
        let response = await fetch('http://localhost:8080/login',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data) // Chuyển dữ liệu thành JSON
        })
        
        response = await response.json();

        if(response.message == "User not found" || response.message == "Password is incorrect"){
            var war = document.querySelector('.incorrectEmail');
            war.style.display = "block";
        }
        else if (response.message == "User login successful"){
            var war = document.querySelector('.incorrectEmail');
            war.style.display = "none";

            var loginBox = document.querySelector('.login__box');

            loginBox.style.display = 'none';
            document.querySelector('.register__login').style.display = 'none';
            document.querySelector('.account').style.display = 'block';

            localStorage.setItem('accessToken', response.accessToken);
            localStorage.setItem('refreshToken', response.refreshToken);
            await saveUserName();
        }    
    })
}

async function mainLogin(){
    await login();
    openLoginBox();
    closeLoginBox();
    secondaryRegister();
}

mainLogin();