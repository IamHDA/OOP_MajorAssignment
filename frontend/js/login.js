var loginBox = document.getElementById("myLogin__box");
var header__top__account__login = document.getElementById("myHeader__top__account__login");
var exitLoginBox = document.getElementById("loginBoxExit");

header__top__account__login.addEventListener('click', function(){
    loginBox.style.display = 'block';
});


exitLoginBox.addEventListener('click', function(){
   loginBox.style.display = 'none';
});

register[1].addEventListener('click', function(){
    loginBox.style.display = "none";
    registerBox.style.display = "block";
});

var loginButton = document.querySelector("#login__button");

loginButton.addEventListener('click', function(){
    console.log("Day la nut an dang nhap");
    var email = document.querySelector('.login__box__email').value;
    var password = document.querySelector('.login__box__password').value;

    const data = {
        dataEmail: email,
        dataUserPassword: password
    }

    // day tai khoan mat khau len server

    fetch('http://localhost:3000/account1234',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data) // Chuyển dữ liệu thành JSON
    })

    // lay trang thai tu server tra ve(User not found/ User login successful)

    fetch('http://localhost:3000/status',{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer token'
        }
    })
    .then(response => {
        return response.json();
    })
    .then(response => {
        if(response[0] == "User not found"){
            var war = document.querySelector('#incorrectEmail');
            war.style.display = "block";
        }
        else if (response[0] == "User login successful"){
            var war = document.querySelector('#incorrectEmail');
            war.style.display = "none";
            loginBox.style.display = 'none';
            document.querySelector('.header__top__account').style.display = 'none';
            document.querySelector('.header__top__login-success').style.display = 'block';

            var tmp = '';
            var tmpname = ''
            // Lay ten 
            fetch('http://localhost:3000/account', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer token'
                }
            })
            .then(response => {
                response.json();
            })
            .then(response => {
                tmpname = response.name;
            })
            tmp = '<p> Xin chào ' + tmpname + '<p>';
            document.querySelector('.header__top__login-success').innerHTML = tmp;
        }
    })
})