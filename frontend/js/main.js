// var header__top__account__register = document.getElementById("myHeader__top__account__register");
// var header__top__account__login = document.getElementById("myHeader__top__account__login");
// var register__box = document.getElementById("myRegister__box");
// var login__box = document.getElementById("myLogin__box");
// var exitRegisterBox = document.getElementById("registerBoxExit");
// var exitLoginBox = document.getElementById("loginBoxExit");
// var darklight = document.getElementById("darklight");

// //register and login

// header__top__account__register.addEventListener('click', function(){
//     register__box.style.display = 'block';
// });

// header__top__account__login.addEventListener('click', function(){
//     login__box.style.display = 'block';
// });

// exitRegisterBox.addEventListener('click', function(){
//     register__box.style.display = 'none';
// });

// exitLoginBox.addEventListener('click', function(){
//    login__box.style.display = 'none';
// });

// header__top

var hethongshowroom__hover = document.getElementById("hethongshowroom__hover");
var hethongshowroom = document.getElementById("hethongshowroom");
var header__top = document.querySelector(".header__top");
var header__mid = document.querySelector(".header__mid");
var header__bottom = document.querySelector(".header__bottom");

hethongshowroom.addEventListener('mousemove', function(e){
    hethongshowroom__hover.style.display = 'block';
    header__bottom.style.position = 'static';
});

hethongshowroom.addEventListener('mouseout', function(e){
    hethongshowroom__hover.style.display = 'none';
    header__bottom.style.position = 'sticky';
});


// content
var content = document.getElementById("content");

// account
var account__detail = document.getElementById("account__detail");

// Chinh sach
var hotrotragop = document.getElementById("hotrotragop");
var hotrotragop__box = document.getElementById("hotrotragop__box");
var giauudainhat = document.getElementById("giauudainhat");
var giauudainhat__box = document.getElementById("giauudainhat__box");
var baohanhtannha = document.getElementById("baohanhtannha");
var baohanhtannha__box = document.getElementById("baohanhtannha__box");
var mienphivanchuyen = document.getElementById("mienphivanchuyen");
var mienphivanchuyen__box = document.getElementById("mienphivanchuyen__box");


hotrotragop.style.transition = "0.2s";

hotrotragop.addEventListener('mousemove', function(){
    hotrotragop.style.fontSize = "17px";
});

hotrotragop.addEventListener('mouseout', function(){
    hotrotragop.style.fontSize = "15px";
});

giauudainhat.style.transition = "0.2s";

giauudainhat.addEventListener('mousemove', function(){
    giauudainhat.style.fontSize = "17px";
});

giauudainhat.addEventListener('mouseout', function(){
    giauudainhat.style.fontSize = "15px";
});

mienphivanchuyen.style.transition = "0.2s";

mienphivanchuyen.addEventListener('mousemove', function(){
    mienphivanchuyen.style.fontSize = "17px";
});

mienphivanchuyen.addEventListener('mouseout', function(){
    mienphivanchuyen.style.fontSize = "15px";
});

baohanhtannha.style.transition = "0.2s";

baohanhtannha.addEventListener('mousemove', function(){
    baohanhtannha.style.fontSize = "17px";
});

baohanhtannha.addEventListener('mouseout', function(){
    baohanhtannha.style.fontSize = "15px";
});

hotrotragop.addEventListener('click', function(e){
    hotrotragop__box.style.display = 'block';
    giauudainhat__box.style.display = 'none';
    baohanhtannha__box.style.display = 'none';
    mienphivanchuyen__box.style.display = 'none';
    header__top.style.display = 'none';
    header__bottom.style.display = 'none';
    content.style.display = 'none';
    account__detail.style.display = 'none';   
});

giauudainhat.addEventListener('click', function(e){
    giauudainhat__box.style.display = 'block';
    hotrotragop__box.style.display = 'none';
    baohanhtannha__box.style.display = 'none';
    mienphivanchuyen__box.style.display = 'none';
    header__top.style.display = 'none';
    header__bottom.style.display = 'none';  
    content.style.display = 'none';
    account__detail.style.display = 'none'; 
});

baohanhtannha.addEventListener('click', function(e){
    baohanhtannha__box.style.display = 'block';
    giauudainhat__box.style.display = 'none';
    hotrotragop__box.style.display = 'none';
    mienphivanchuyen__box.style.display = 'none';
    header__top.style.display = 'none';
    header__bottom.style.display = 'none';
    content.style.display = 'none';
    account__detail.style.display = 'none';
});

mienphivanchuyen.addEventListener('click', function(e){
    mienphivanchuyen__box.style.display = 'block';
    baohanhtannha__box.style.display = 'none';
    giauudainhat__box.style.display = 'none';
    hotrotragop__box.style.display = 'none';
    header__top.style.display = 'none';
    header__bottom.style.display = 'none';
    content.style.display = 'none';
    account__detail.style.display = 'none';
});

// darklight

darklight.addEventListener('click', function(e){
    if(document.body.style.backgroundColor == 'whitesmoke'){
        document.body.style.backgroundColor = 'black';
        darklight.style.background = 'black';
        darklight.style.color = 'white';
    }
    else{
        document.body.style.backgroundColor = 'whitesmoke';
        darklight.style.background = 'white';
        darklight.style.color = 'black';
    }
});

// button catalog

var buttoncatalog = document.getElementById("header__bottom__catalog");

buttoncatalog.addEventListener('click', function(e){
    e.preventDefault();  // Ngăn chặn hành động mặc định của liên kết
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
})