var loginButton = document.querySelector(".login__button");

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
            var war = document.querySelector('.incorrectEmail');
            war.style.display = "block";
        }
        else if (response.message == "User login successful"){
            var war = document.querySelector('.incorrectEmail');
            war.style.display = "none";
            loginBox.style.display = 'none';
            document.querySelector('.register__login').style.display = 'none';
            document.querySelector('.account').style.display = 'block';

            localStorage.setItem('accessToken', response.accessToken);
            localStorage.setItem('refreshToken', response.refreshToken);

            var tmp = '';
            var tmpname = '';
            var accessToken = localStorage.getItem('accessToken');
            console.log(accessToken);
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
                var account = document.querySelector('.account');
                account.innerHTML = tmp;
            })         
        }
    })
})