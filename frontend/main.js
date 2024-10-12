var header__top__account__register = document.getElementById("myHeader__top__account__register");
var header__top__account__login = document.getElementById("myHeader__top__account__login");
var register__box = document.getElementById("myRegister__box");
var login__box = document.getElementById("myLogin__box");
var exitRegisterBox = document.getElementById("registerBoxExit");
var exitLoginBox = document.getElementById("loginBoxExit");
var darklight = document.getElementById("darklight");

//register and login

header__top__account__register.addEventListener('click', function(){
    register__box.style.display = 'block';
});

header__top__account__login.addEventListener('click', function(){
    login__box.style.display = 'block';
});

exitRegisterBox.addEventListener('click', function(){
    register__box.style.display = 'none';
});

exitLoginBox.addEventListener('click', function(){
   login__box.style.display = 'none';
});

// header__top

var hethongshowroom__hover = document.getElementById("hethongshowroom__hover");
var header__bottom = document.getElementById("header__bottom");
var hethongshowroom = document.getElementById("hethongshowroom");

hethongshowroom.addEventListener('mousemove', function(e){
    hethongshowroom__hover.style.display = 'block';
    header__bottom.style.position = 'static';
});

hethongshowroom.addEventListener('mouseout', function(e){
    hethongshowroom__hover.style.display = 'none';
    header__bottom.style.position = 'sticky';
});

// Chinh sach
var hotrotragop = document.getElementById("hotrotragop");
var hotrotragop__box = document.getElementById("hotrotragop__box");
var giauudainhat = document.getElementById("giauudainhat");
var giauudainhat__box = document.getElementById("giauudainhat__box");
var baohanhtannha = document.getElementById("baohanhtannha");
var baohanhtannha__box = document.getElementById("baohanhtannha__box");
var mienphivanchuyen = document.getElementById("mienphivanchuyen");
mienphivanchuyen__box = document.getElementById("mienphivanchuyen__box");
var header__top = document.getElementById("header__top");

hotrotragop.addEventListener('click', function(e){
    hotrotragop__box.style.display = 'block';
    header__top.style.display = 'none'; 
    giauudainhat__box.style.display = 'none';
    baohanhtannha__box.style.display = 'none';
    mienphivanchuyen__box.style.display = 'none';   
});

giauudainhat.addEventListener('click', function(e){
    giauudainhat__box.style.display = 'block';
    hotrotragop__box.style.display = 'none';
    header__top.style.display = 'none'; 
    baohanhtannha__box.style.display = 'none';
    mienphivanchuyen__box.style.display = 'none';
});

baohanhtannha.addEventListener('click', function(e){
    baohanhtannha__box.style.display = 'block';
    giauudainhat__box.style.display = 'none';
    hotrotragop__box.style.display = 'none';
    header__top.style.display = 'none';
    mienphivanchuyen__box.style.display = 'none';
});

mienphivanchuyen.addEventListener('click', function(e){
    mienphivanchuyen__box.style.display = 'block';
    baohanhtannha__box.style.display = 'none';
    giauudainhat__box.style.display = 'none';
    hotrotragop__box.style.display = 'none';
    header__top.style.display = 'none';
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