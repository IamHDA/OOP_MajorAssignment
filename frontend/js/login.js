var loginBox = document.getElementById("myLogin__box");
var header__top__account__login = document.getElementById("myHeader__top__account__login");
var exitLoginBox = document.getElementById("loginBoxExit");

header__top__account__login.addEventListener('click', function(){
    loginBox.style.display = 'block';
});

// exitRegisterBox.addEventListener('click', function(){
//     register__box.style.display = 'none';
// });

exitLoginBox.addEventListener('click', function(){
   loginBox.style.display = 'none';
});

register[1].addEventListener('click', function(){
    loginBox.style.display = "none";
    registerBox.style.display = "block";
});



// Elenment cua trang
const myLogin__box = document.getElementById("myLogin__box");
const Email = document.getElementById("userEmail");
const yourPassword = document.getElementById("password")
// Element loi
const notEmail = document.getElementById("invalidEmail");
const incorrectEmail = document.getElementById("incorrectEmail");

myLogin__box.addEventListener("submit", function(e){
        e.preventDefault;
    
        if(!Email.value){
            notEmail.style.display = "block";
        } else{
            notEmail.style.display = "none";
        }

        if(!yourPassword.value){
            incorrectEmail.style.display = "block";
        } else {
            incorrectEmail.style.display = "none";
        }

        window.location.href = "../Phần Trang chủ/index.html";
});