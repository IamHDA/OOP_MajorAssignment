const allElements = document.querySelectorAll('*');

allElements.forEach(function(element) {
    element.addEventListener('click', function(){
        if (localStorage.getItem('accessToken') === null) {
            document.querySelector(".register__login").style.display = "display";
            document.querySelector(".account").style.display = 'none';
        } else {
            document.querySelector(".register__login").style.display = "none";
            document.querySelector(".account").style.display = 'block';

            // kiem tra xem accessToken con hoat dong hay khong???
            // fetch('https://api.example.com/protected-resource', {
            // method: 'GET',
            // headers: {
            //     'Authorization': `Bearer ${accessToken}`
            // }
            // })
            // .then(response => {
            //     if (response.ok) {
            //         console.log('Token còn hợp lệ.');
            //     } else {
            //     console.log('Token đã hết hạn hoặc không hợp lệ.');
            //     }
            // })
            // .catch(error => {
            //     console.error('Có lỗi xảy ra:', error);
            // });
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
});