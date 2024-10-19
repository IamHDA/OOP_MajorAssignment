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
    var email = document.querySelector('.login__box__email').value;
    var password = document.querySelector('.login__box__password').value;

    const data = {
        dataEmail: email,
        dataUserPassword: password
    }

    // day tai khoan mat khau len server

    fetch('http://localhost:8080/login',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data) // Chuyển dữ liệu thành JSON
    })
    .then(response => {
        return response.json();
    })
    .then(response => {
        if(response.message == "User not found"){
            var war = document.querySelector('#incorrectEmail');
            war.style.display = "block";
        }
        else if (response.message == "User login successful"){
            var war = document.querySelector('#incorrectEmail');
            war.style.display = "none";
            loginBox.style.display = 'none';
            document.querySelector('.header__top__account').style.display = 'none';
            document.querySelector('.header__top__login-success').style.display = 'block';

            localStorage.setItem('accessToken', response.accessToken);
            localStorage.setItem('refreshToken', response.refreshToken);

            var tmp = '';
            var tmpname = '';
            var accessToken = localStorage.getItem('accessToken');
            // Lay ten 
            fetch('http://localhost:8080/user/info', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${accessToken}`
                }
            })
            .then(response => {
                return response.json();
            })
            .then(response => {
                tmpname = response.name;
                tmp = '<p> Xin chào ' + tmpname + '<p>';
                document.querySelector('.header__top__login-success').innerHTML = tmp;
            })    
        }
    })
})