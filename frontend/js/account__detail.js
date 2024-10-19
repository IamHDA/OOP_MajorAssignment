// thong tin tai khoan

var xinChao = document.querySelector(".header__top__login-success");

xinChao.addEventListener('click', function(){
    content.style.display = 'none';
    header__bottom.style.display = 'none';
    

    var accountDetail = document.querySelector(".account__detail");
    accountDetail.style.display = 'block';

    var thongTinTaiKhoan = document.querySelector("account__detail__selection");


    var thongTinTaiKhoan = document.querySelector("#account__detail__selection__thong-tin-tai-khoan");
    var danhSachDonHang = document.querySelector("#account__detail__selection__danh-sach-don-hang");
    var thayDoiMatKhau = document.querySelector("#account__detail__selection__thay-doi-mat-khau");
    var logOut = document.querySelector("#account__detail__selection__log-out");

    var emptycontent = document.querySelector(".empty");
    var thongTinTaiKhoanContent = document.querySelector(".account__detail__content___thong-tin-tai-khoan");
    var danhSachDonHangContent = document.querySelector(".account__detail__content___danh-sach-don-hang")
    var thayDoiMatKhauContent = document.querySelector(".account__detail__content___thay-doi-mat-khau");


// hover selection
    thongTinTaiKhoan.addEventListener('mouseover', function(){
       thongTinTaiKhoan.style.backgroundColor = "rgb(0, 91, 173)";
       thongTinTaiKhoan.style.color = 'white';
    });
    thongTinTaiKhoan.addEventListener('mouseout', function(){
        thongTinTaiKhoan.style.backgroundColor = 'rgb(235, 235, 235)';
        thongTinTaiKhoan.style.color = 'rgb(102, 102, 102)';
    });

    danhSachDonHang.addEventListener('mouseover', function(){
        danhSachDonHang.style.backgroundColor = "rgb(0, 91, 173)";
        danhSachDonHang.style.color = 'white';
    });
    danhSachDonHang.addEventListener('mouseout', function(){
        danhSachDonHang.style.backgroundColor = 'rgb(235, 235, 235)';
        danhSachDonHang.style.color = 'rgb(102, 102, 102)';
    });

    thayDoiMatKhau.addEventListener('mouseover', function(){
        thayDoiMatKhau.style.backgroundColor = "rgb(0, 91, 173)";
        thayDoiMatKhau.style.color = 'white';
    });
    thayDoiMatKhau.addEventListener('mouseout', function(){
        thayDoiMatKhau.style.backgroundColor = 'rgb(235, 235, 235)';
        thayDoiMatKhau.style.color = 'rgb(102, 102, 102)';
    });

    logOut.addEventListener('mouseover', function(){
        logOut.style.backgroundColor = "rgb(0, 91, 173)";
        logOut.style.color = 'white';
    });
    logOut.addEventListener('mouseout', function(){
        logOut.style.backgroundColor = 'rgb(235, 235, 235)';
        logOut.style.color = 'rgb(102, 102, 102)';
    });

//selection click
    thongTinTaiKhoan.addEventListener('click', function(){
        emptycontent.style.display = 'none';
        thongTinTaiKhoanContent.style.display = 'block';
        danhSachDonHangContent.style.display = 'none';
        thayDoiMatKhauContent.style.display = 'none';

        thongTinTaiKhoan.style.backgroundColor = "rgb(0, 91, 173)";
        thayDoiMatKhau.style.backgroundColor = 'rgb(235, 235, 235)';
        thayDoiMatKhau.style.color = 'rgb(102, 102, 102)';
        danhSachDonHang.style.backgroundColor = 'rgb(235, 235, 235)';
        danhSachDonHang.style.color = 'rgb(102, 102, 102)';

        thongTinTaiKhoan.addEventListener('mouseout', function(){
            thongTinTaiKhoan.style.backgroundColor = 'rgb(0, 91, 173)';
            thongTinTaiKhoan.style.color = 'white';
        });
        danhSachDonHang.addEventListener('mouseout', function(){
            danhSachDonHang.style.backgroundColor = 'rgb(235, 235, 235)';
            danhSachDonHang.style.color = 'rgb(102, 102, 102)';
        });
        thayDoiMatKhau.addEventListener('mouseout', function(){
            thayDoiMatKhau.style.backgroundColor = 'rgb(235, 235, 235)';
            thayDoiMatKhau.style.color = 'rgb(102, 102, 102)';
        });

        var name = document.querySelector(".account__detail__content___thong-tin-tai-khoan__user-name__input");
        var email = document.querySelector(".account__detail__content___thong-tin-tai-khoan__user-email__input");
        var address = document.querySelector(".account__detail__content___thong-tin-tai-khoan__user-address__input");
        var phone = document.querySelector(".account__detail__content___thong-tin-tai-khoan__user-numberphone__input");

        // reset
        name.value = "";
        email.value = "";
        address.value = "";
        phone.value = "";
        
        fetch('http://localhost:3000/account',{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer token'
            }
        })
        .then(response => {
            return response.json();
        })

        .then(data =>{
            console.log(data);
            name.value = data[0].name;
            email.value = data[0].email;
            address.value = data[0].address;
            phone.value = data[0].phone;
        })

    });

    danhSachDonHang.addEventListener('click', function(){
        emptycontent.style.display = 'none';
        thongTinTaiKhoanContent.style.display = 'none';
        danhSachDonHangContent.style.display = 'block';
        thayDoiMatKhauContent.style.display = 'none';

        thongTinTaiKhoan.style.backgroundColor = "rgb(235, 235, 235)";
        thongTinTaiKhoan.style.color = 'rgb(102, 102, 102)';
        danhSachDonHang.style.backgroundColor = 'rgb(0, 91, 173)';
        thayDoiMatKhau.style.backgroundColor = 'rgb(235, 235, 235)';
        thayDoiMatKhau.style.color = 'rgb(102, 102, 102)';

        thongTinTaiKhoan.addEventListener('mouseout', function(){
            thongTinTaiKhoan.style.backgroundColor = 'rgb(235, 235, 235)';
            thongTinTaiKhoan.style.color = 'rgb(102, 102, 102)';
        });
        thayDoiMatKhau.addEventListener('mouseout', function(){
            thayDoiMatKhau.style.backgroundColor = 'rgb(235, 235, 235)';
            thayDoiMatKhau.style.color = 'rgb(102, 102, 102)';
        });
        danhSachDonHang.addEventListener('mouseout', function(){
            danhSachDonHang.style.backgroundColor = 'rgb(0, 91, 173)';
            danhSachDonHang.style.color = 'white';
        });
    });

    thayDoiMatKhau.addEventListener('click', function(){
        emptycontent.style.display = 'none';
        thongTinTaiKhoanContent.style.display = 'none';
        danhSachDonHangContent.style.display = 'none';
        thayDoiMatKhauContent.style.display = 'block';

        thongTinTaiKhoan.style.backgroundColor = "rgb(235, 235, 235)";
        thongTinTaiKhoan.style.color = 'rgb(102, 102, 102)';
        thayDoiMatKhau.style.backgroundColor = 'rgb(0, 91, 173)';
        danhSachDonHang.style.backgroundColor = 'rgb(235, 235, 235)';
        danhSachDonHang.style.color = 'rgb(102, 102, 102)';

        thongTinTaiKhoan.addEventListener('mouseout', function(){
            thongTinTaiKhoan.style.backgroundColor = 'rgb(235, 235, 235)';
            thongTinTaiKhoan.style.color = 'rgb(102, 102, 102)';
        });
        danhSachDonHang.addEventListener('mouseout', function(){
            danhSachDonHang.style.backgroundColor = 'rgb(235, 235, 235)';
            danhSachDonHang.style.color = 'rgb(102, 102, 102)';
        });
        thayDoiMatKhau.addEventListener('mouseout', function(){
            thayDoiMatKhau.style.backgroundColor = 'rgb(0, 91, 173)';
            thayDoiMatKhau.style.color = 'white';
        });
    });

    // Thay doi thong tin
    var button__ThongTinTaiKhoan = document.querySelector(".account__detail__content___thong-tin-tai-khoan__submit");

    button__ThongTinTaiKhoan.addEventListener('click', function(){
        var name = document.querySelector(".account__detail__content___thong-tin-tai-khoan__user-name__input");
        var email = document.querySelector(".account__detail__content___thong-tin-tai-khoan__user-email__input");
        var address = document.querySelector(".account__detail__content___thong-tin-tai-khoan__user-address__input");
        var phone = document.querySelector(".account__detail__content___thong-tin-tai-khoan__user-numberphone__input");

        data = {
            name: name.value,
            email: email.value,
            address: address.value,
            phone: phone.value
        }

        fetch('http://localhost:3000/account',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data) // Chuyển dữ liệu thành JSON
        })
        .then(function(){
            alert("Thay doi thanh cong");
        })
        .catch(error =>{
            alert("Da xay ra loi, yeu cau thu lai");
            console.log(error);
        })
    });


});