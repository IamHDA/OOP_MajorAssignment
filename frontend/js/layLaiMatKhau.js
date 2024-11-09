async function layLaiMatKhau(){
    let quenMatKhau = document.querySelector(".quenMatKhau");
    let button = quenMatKhau.querySelector(".button");
    button.addEventListener("click", async function(){
        let email = quenMatKhau.querySelector("input").value;
        try{
            let response1 = await fetch('http://localhost:8080/forgetPassword/checkEmail',{
                method: 'GET',
                headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`
                },
                body: email
            });
            response1 = await response1.text();
            if(response1 === "User found"){
                quenMatKhau.querySelector('.war').style.display = "none";
                try{
                    let response2 = await fetch('http://localhost:8080/forgetPassword/sendEmail',{
                        method: 'GET',
                        headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${accessToken}`
                        },
                        body: email
                    });
                    response2 = await response2.json();
                    if(response2 === "Mail sent successfuly"){
                        alert("Yêu cầu lấy lại mật khẩu của bạn cần được xác minh. Hãy vào kiểm tra Email của bạn để xác nhận đổi mật khẩu!");
                    }
                }
                catch(error){
                    console.log(error);
                    alert("Đã xảy ra lỗi, vui lòng thực hiện lại!");
                }
            }
            else{
                quenMatKhau.querySelector('.war').style.display = "block";
            }
        }
        catch(error){
            console.log(error);
            alert("Đã xảy ra lỗi, vui lòng thực hiện lại!");
        }
    })
}

layLaiMatKhau();