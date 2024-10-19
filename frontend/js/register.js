
const register = document.querySelectorAll("#myHeader__top__account__register");
const registerBox = document.querySelector(".register__box");
const registerBoxExit = document.querySelector("#registerBoxExit");

register[0].addEventListener('click', function(){
    registerBox.style.display = "block";
});

// An nut X trong registerBox
registerBoxExit.addEventListener('click', function(){
    registerBox.style.display = "none"; // Dong registerBox
    // reset cac gia tri cua input va an cac war
    document.querySelector("#register__name").value = "";
    document.querySelector("#register__userEmail").value = "";
    document.querySelector("#register__userPassword1").value = "";
    document.querySelector("#register__userPassword2").value = "";
    document.querySelector("#register__war1").style.display = "none";
    document.querySelector("#register__war2").style.display = "none";
    document.querySelector("#register__war3").style.display = "none";
    document.querySelector("#register__war4").style.display = "none";
    document.querySelector("#register__war5").style.display = "none";
})



const registerSubmit = document.querySelector("#register__submit");

const exitSuccessRegister = document.querySelector(".exit__success__register")

// An nut Đóng trong registerSucces
exitSuccessRegister.addEventListener('click', function(){
    document.querySelector(".success__register").style.display = "none";
});
exitSuccessRegister.style.transition = "0.3s";

exitSuccessRegister.addEventListener('mouseover', function(){
    exitSuccessRegister.style.fontSize = "23px";
});

exitSuccessRegister.addEventListener('mouseout', function(){
    exitSuccessRegister.style.fontSize = "20px";
});

// khi an vao nut dang ky trong registerBox
registerSubmit.addEventListener('click', function(e){
    e.preventDefault();
    const inputName = document.querySelector("#register__name");
    const inputUserEmail = document.querySelector("#register__userEmail");
    const inputPassword1 = document.querySelector("#register__userPassword1");
    const inputPassword2 = document.querySelector("#register__userPassword2");

    let name = inputName.value;
    let userEmail = inputUserEmail.value;
    let userPassword1 = inputPassword1.value;
    let userPassword2 = inputPassword2.value;

    var warName = document.querySelector("#register__war1");
    var warUserEmail1 = document.querySelector("#register__war2");
    var warUserEmail2 = document.querySelector("#register__war3");
    var warPassword = document.querySelector("#register__war4");
    var warlength = document.querySelector("#register__war5");
    ok1 = 1;
    ok2 = 1;
    ok3 = 1;
    ok4 = 1;
    ok5 = 1;

    // Kiểm tra các điều kiện của tên người dùng, tên đăng nhập và mật khẩu
    if (name == ""){ // Tên người dùng trống
        warName.style.display = "block";
        ok1 = 0;
    }
    else{
        warName.style.display = "none";
        ok1 = 1;
    }

    if (userEmail.length < 5){ // Tên đăng nhập dài không quá 5 ký tự
        warUserEmail2.style.display = "block";
        ok2 = 0;
    }
    else{
        warUserEmail2.style.display = "none";
        ok2 = 1;
    }

    if (userEmail == ""){    // Tên đăng nhập trống
        warUserEmail1.style.display = "block";
        ok3 = 0;
    }
    else{
        warUserEmail1.style.display = "none";
        ok3 = 1;
    }

    if (userPassword1 !=  userPassword2){   // Hai mật khẩu khác nhau
        warPassword.style.display = "block";
        ok4 = 0;
    }
    else{
        warPassword.style.display = "none";
        ok4 = 1;
        if(userPassword1.length < 6){       // Mật khẩu ngắn hơn 6 ký tự
            warlength.style.display = "block";
            ok5 = 0;
        }
        else{
            warlength.style.display = "none";
            ok5 = 1;
        }
    }

    // thoa man cac dieu kien
    if(ok1 == 1 && ok2 == 1 && ok3 == 1 && ok4 == 1 && ok5 == 1){
        const dataUser = {
            name: name,
            email: userEmail,
            pass: userPassword1,
        };

        // push data ve backend
        fetch('http://localhost:3000/account', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataUser) // Chuyển dữ liệu thành JSON

        })
            .then(response =>{
                response.json();
            })
            .then(function(){
                // reset gia tri input
                inputName.value = "";
                inputUserEmail.value = "";
                inputPassword1.value = "";
                inputPassword2.value = "";  
                registerBox.style.display = "none";
                // Thong bao thanh cong
                document.querySelector(".success__register").style.display = "block";
            })
            .catch(error => {
                console.error('Có lỗi ở register!', error);
                alert("lỗi rồi");
            })
    }
});

