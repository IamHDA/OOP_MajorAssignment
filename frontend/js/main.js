// document.querySelector(".register__login").style.display = "display";
// document.querySelector(".account").style.display = 'none';

// mở / đóng register box

var register = document.querySelector(".register");
var registerBox = document.querySelector(".register__box");
var exitRegisterBox = document.querySelector(".exitRegisterBox");

register.addEventListener('click', function(){
    registerBox.style.display = 'block';
})

exitRegisterBox.addEventListener('click', function(){
    registerBox.style.display = 'none';
    // reset
    document.querySelector(".register__name").value = "";
    document.querySelector(".register__userEmail").value = "";
    document.querySelector(".register__userPassword1").value = "";
    document.querySelector(".register__userPassword2").value = "";
    document.querySelector(".register__war1").style.display = "none";
    document.querySelector(".register__war2").style.display = "none";
    document.querySelector(".register__war3").style.display = "none";
    document.querySelector(".register__war4").style.display = "none";
    document.querySelector(".register__war5").style.display = "none";
})


// mở / đóng login box
var login = document.querySelector(".login");
var loginBox = document.querySelector('.login__box');
var exitLoginBox = document.querySelector('.exitLoginBox');

login.addEventListener('click', function(){
    loginBox.style.display = 'block';
})


exitLoginBox.addEventListener('click', function(){
    loginBox.style.display = 'none';
    // reset
    document.querySelector(".login__box__email").value = "";
    document.querySelector(".login__box__password").value = "";
    document.querySelector(".incorrectEmail").style.display = "none";

})

// An vao dang ky trong o dang nhap
var registerF = document.querySelector(".registerF");

registerF.addEventListener('click', function(){
    loginBox.style.display = 'none';
    registerBox.style.display = 'block';
})

// hover vao product

var product = document.querySelectorAll('.product__container')


product.forEach(function(element){
    element.children[1].style.transition = "0.3s";
    element.children[1].addEventListener('mouseover', function(){
        element.children[1].style.transform = "translateY(-10px)";
    })
    element.children[1].addEventListener('mouseout', function(){
        element.children[1].style.transform = "translateY(0)";
    })
    
    element.children[2].addEventListener('mouseover', function(){
        element.children[1].style.transform = "translateY(-10px)";
    })
    element.children[2].addEventListener('mouseout', function(){
        element.children[1].style.transform = "translateY(0)";
    })  
})