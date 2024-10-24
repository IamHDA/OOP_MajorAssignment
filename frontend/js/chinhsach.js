// hover chinh sach
var hotrotragop = document.querySelector('.hotrotragop');
var giauudainhat = document.querySelector('.giauudainhat');
var mienphivanchuyen = document.querySelector('.mienphivanchuyen');
var baohanhtannha = document.querySelector('.baohanhtannha');


hotrotragop.style.transition = "0.2s";

hotrotragop.addEventListener('mousemove', function(){
    hotrotragop.style.fontSize = "18px";
});

hotrotragop.addEventListener('mouseout', function(){
    hotrotragop.style.fontSize = "17px";
});

giauudainhat.style.transition = "0.2s";

giauudainhat.addEventListener('mousemove', function(){
    giauudainhat.style.fontSize = "18px";
});

giauudainhat.addEventListener('mouseout', function(){
    giauudainhat.style.fontSize = "17px";
});

mienphivanchuyen.style.transition = "0.2s";

mienphivanchuyen.addEventListener('mousemove', function(){
    mienphivanchuyen.style.fontSize = "18px";
});

mienphivanchuyen.addEventListener('mouseout', function(){
    mienphivanchuyen.style.fontSize = "17px";
});

baohanhtannha.style.transition = "0.2s";

baohanhtannha.addEventListener('mousemove', function(){
    baohanhtannha.style.fontSize = "18px";
});

baohanhtannha.addEventListener('mouseout', function(){
    baohanhtannha.style.fontSize = "17px";
});


// var logo = document.querySelector('.logo');

// logo.addEventListener('click', function(){
//     if (localStorage.getItem('accessToken') === null) {
//         document.querySelector(".register__login").style.display = "display";
//         document.querySelector(".account").style.display = 'none';
//     } else {
//         document.querySelector(".register__login").style.display = "none";
//         document.querySelector(".account").style.display = 'block';
//         // Lay ten 
//         fetch('http://localhost:8080/user/info', {
//             method: 'GET',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Authorization': `Bearer ${accessToken}`
//             }       
//         })
//         .then(response => {
//             return response.json();
//         })
//         .then(response => {
//             tmpname = response.name;
//             tmp = '<p> Xin chào ' + tmpname + '<p>';
//             var account = document.querySelector('.account');
//             account.innerHTML = tmp;
//         })
//     }
// })