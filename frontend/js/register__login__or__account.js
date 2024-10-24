const allElements = document.querySelectorAll('*');

accessToken = localStorage.getItem('accessToken');

function user_status(){

        if (accessToken === null) {
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
            tmpname = localStorage.getItem("name");
            tmp = '<p> Xin chào ' + tmpname + '<p>';
            var account = document.querySelector('.account');
            account.innerHTML = tmp;
            document.querySelector(".register__login").style.display = "none";
            document.querySelector(".account").style.display = 'block';
        }
}

    user_status();

// allElements.forEach(function(element) {
//     element.addEventListener('click', function(){
//         user_status();
//     })
// });

// const allElements = document.querySelectorAll('*');

// allElements.forEach(function(element) {
//     element.addEventListener('click', function() {
//         let accessToken = localStorage.getItem('accessToken');
        
//         if (!accessToken) {
//             // Hiển thị trang đăng nhập nếu chưa có token
//             document.querySelector(".register__login").style.display = "block";
//             document.querySelector(".account").style.display = 'none';
//         } else {
//             // Kiểm tra token hợp lệ và lấy thông tin người dùng
//             fetch('http://localhost:8080/user/info', {
//                 method: 'GET',
//                 headers: {
//                     'Content-Type': 'application/json',
//                     'Authorization': `Bearer ${accessToken}`
//                 }       
//             })
//             .then(response => {
//                 if (response.status === 401) {
//                     // Token hết hạn hoặc không hợp lệ, chuyển về trạng thái đăng nhập
//                     console.log('Token không hợp lệ hoặc đã hết hạn.');
//                     localStorage.removeItem('accessToken');  // Xoá token cũ
//                     document.querySelector(".register__login").style.display = "block";
//                     document.querySelector(".account").style.display = 'none';
//                 } else {
//                     return response.json();
//                 }
//             })
//             .then(response => {
//                 if (response) {
//                     // Hiển thị tên người dùng nếu token hợp lệ
//                     const tmpname = response.name;
//                     const account = document.querySelector('.account');
//                     account.innerHTML = `<p>Xin chào ${tmpname}</p>`;
//                     document.querySelector(".register__login").style.display = "none";
//                     document.querySelector(".account").style.display = 'block';
//                 }
//             })
//             .catch(error => {
//                 console.error('Có lỗi xảy ra:', error);
//             });
//         }
//     });
// });