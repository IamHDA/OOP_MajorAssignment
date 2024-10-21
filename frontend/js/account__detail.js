var thongTinTaiKhoan = document.querySelector(".thong-tin-tai-khoan");
var danhSachDonHang = document.querySelector(".danh-sach-don-hang");
var thayDoiMatKhau = document.querySelector(".thay-doi-mat-khau");
var logOut = document.querySelector(".log-out");

var account = document.querySelector('click', function(){
    var taikhoancua = document.querySelector("#taikhoancua");
    // Lay ten 
    fetch('http://localhost:3000/account', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`
        }       
    })
    .then(response => {
        return response.json();
    })
    .them(response => {
        <p class="user-name">Biendaden</p>
        var tmpname = '<p class="user-name">' + response.name + '</p>';
        var tmptext = '<div class = "text" > Tài khoản của, </div>';
        tmp = tmptext + tmpname;
        taikhoancua.innerHTML = tmp;
    })
})
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

var thongTinTaiKhoanBox = document.querySelector('.account__detail__content___thong-tin-tai-khoan');
var danhSachDonHangBox = document.querySelector('.account__detail__content___danh-sach-don-hang');
var thayDoiMatKhauBox = document.querySelector('.account__detail__content___thay-doi-mat-khau');
var empty = document.querySelector('.empty');

thongTinTaiKhoanBox.style.display = 'none';
danhSachDonHangBox.style.display = 'none';
thayDoiMatKhauBox.style.display = 'none';


// ----------------------click selection----------------------
thongTinTaiKhoan.addEventListener('click', function(){
    // Thay doi style selection
    thongTinTaiKhoan.addEventListener('mouseout', function(){
        thongTinTaiKhoan.style.backgroundColor = "rgb(0, 91, 173)";
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
    danhSachDonHang.style.backgroundColor = 'rgb(235, 235, 235)';
    danhSachDonHang.style.color = 'rgb(102, 102, 102)';
    thayDoiMatKhau.style.backgroundColor = 'rgb(235, 235, 235)';
    thayDoiMatKhau.style.color = 'rgb(102, 102, 102)';
    // Mo thongTinTaiKhoanBox
    empty.style.display = 'none';
    thongTinTaiKhoanBox.style.display = 'block';
    danhSachDonHangBox.style.display = 'none';
    thayDoiMatKhauBox.style.display = 'none';
})

danhSachDonHang.addEventListener('click', function(){
    // Thay doi style selection
    danhSachDonHang.addEventListener('mouseout', function(){
        danhSachDonHang.style.backgroundColor = "rgb(0, 91, 173)";
        danhSachDonHang.style.color = 'white';  
    });
    thongTinTaiKhoan.addEventListener('mouseout', function(){
        thongTinTaiKhoan.style.backgroundColor = 'rgb(235, 235, 235)';
        thongTinTaiKhoan.style.color = 'rgb(102, 102, 102)';
    });
    thongTinTaiKhoan.style.backgroundColor = 'rgb(235, 235, 235)';
    thongTinTaiKhoan.style.color = 'rgb(102, 102, 102)';
    thayDoiMatKhau.addEventListener('mouseout', function(){
        thayDoiMatKhau.style.backgroundColor = 'rgb(235, 235, 235)';
        thayDoiMatKhau.style.color = 'rgb(102, 102, 102)';
    });
    thayDoiMatKhau.style.backgroundColor = 'rgb(235, 235, 235)';
    thayDoiMatKhau.style.color = 'rgb(102, 102, 102)';
    // Mo danhSachDonHangBox
    empty.style.display = 'none';
    thongTinTaiKhoanBox.style.display = 'none';
    danhSachDonHangBox.style.display = 'block';
    thayDoiMatKhauBox.style.display = 'none';
})

thayDoiMatKhau.addEventListener('click', function(){
    // Thay doi style selection
    thayDoiMatKhau.addEventListener('mouseout', function(){
        thayDoiMatKhau.style.backgroundColor = "rgb(0, 91, 173)";
        thayDoiMatKhau.style.color = 'white';
    });
    thongTinTaiKhoan.addEventListener('mouseout', function(){
        thongTinTaiKhoan.style.backgroundColor = 'rgb(235, 235, 235)';
        thongTinTaiKhoan.style.color = 'rgb(102, 102, 102)';
    });
    thongTinTaiKhoan.style.backgroundColor = 'rgb(235, 235, 235)';
    thongTinTaiKhoan.style.color = 'rgb(102, 102, 102)';
    danhSachDonHang.addEventListener('mouseout', function(){
        danhSachDonHang.style.backgroundColor = 'rgb(235, 235, 235)';
        danhSachDonHang.style.color = 'rgb(102, 102, 102)';
    });
    danhSachDonHang.style.backgroundColor = 'rgb(235, 235, 235)';
    danhSachDonHang.style.color = 'rgb(102, 102, 102)';
    // Mo thayDoiMatKhauBox
    empty.style,display = 'none'
    thongTinTaiKhoanBox.style.display = 'none';
    danhSachDonHangBox.style.display = 'none';
    thayDoiMatKhauBox.style.display = 'block';
})




// -----------------Box------------------------

// thongTinTaiKhoanBox
thongTinTaiKhoan.addEventListener('click', function(){
    var name = document.querySelector(".account__detail__content___thong-tin-tai-khoan__user-name__input");
    var email = document.querySelector(".account__detail__content___thong-tin-tai-khoan__user-email__input");
    var address = document.querySelector(".account__detail__content___thong-tin-tai-khoan__user-address__input");
    var phone = document.querySelector(".account__detail__content___thong-tin-tai-khoan__user-numberphone__input");

    var accessToken = localStorage.getItem('accessToken');

    // kiem tra xem accessToken con hoat dong hay khong???
    // fetch('https://api.example.com/protected-resource', {
    // method: 'GET',
    // headers: {
    //     'Authorization': `Bearer ${accessToken}`
    // }
    // })
    // .then(response => {
    //     if (response.ok) {
    //     console.log('Token còn hợp lệ.');
    //     } else {
    //     console.log('Token đã hết hạn hoặc không hợp lệ.');
    //     }
    // })
    // .catch(error => {
    //     console.error('Có lỗi xảy ra:', error);
    // });

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
    .then(response =>{
        name.value = response.name;
        email.value = response.email;
        address.value = response.address;
        phone.value = response.phone;
    })

    var button = document.querySelector(".account__detail__content___thong-tin-tai-khoan__submit");

    const data = {
        name: name,
        address: address,
        phone: phone,
    }

    button.addEventListener('click', function(){
        fetch('http://localhost:8080/user/changeInfo',{
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(function(){
            localStorage.setItem('name', name);
            localStorage.setItem('address', address);
            localStorage.setItem('phone', phone);
        })
        .then(function(){
            alert("Cập nhật thông tin thành công");
        })
        .catch(error => {
            alert("Đã xảy ra lỗi");
            console.log("Loi cap nhat thong tin!");
            console.log(error);
        })
    })
})

// thay doi mat khau

var thayDoiMatKhauButton = document.querySelector('.button_thaydoimatkhau');

thayDoiMatKhauButton.addEventListener('click', function(){
    var currentPass = document.querySelector(".account__detail__content___thay-doi-mat-khau__mat-khau-hien-tai__input").value;
    var newPass1 = document.querySelector(".account__detail__content___thay-doi-mat-khau__mat-khau-moi-1__input").value;
    var newPass2 = document.querySelector(".account__detail__content___thay-doi-mat-khau__mat-khau-moi-2__input").value;

    var war1 = document.querySelector('.war1');
    var war2 = document.querySelector('.war2');

    if(newPass1 != newPass2){
        war1.style.display = 'block';
    }

    else{
        war1.style.display = 'block';
        var pass;
        // lay mat khau hien tai
        var accessToken = localStorage.getItem('accessToken');
        fetch('http://localhost:3000/account', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`
            }       
        })
        .then(response => {
            return response.json();
        })
        .then(response =>{
            pass = response.pass;
        })
        .catch(error =>{
            console.log(error);
            console.log("Loi thay doi mat khau");
            alert("Đã xảy ra lỗi. Thay đổi mật khẩu không thành công!");
        })
        if(pass != currentPass){
            war2.style.display = 'block';
        }
        else{
            war2.style.display = 'none';
            const pass = {
                pass: newPass1
            }
            fetch('http://localhost:3000/account',{
                method: 'PUT',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
        }
    }

})

// log out
logOut.addEventListener('click', function(){
    localStorage.setItem('accessToken', null);
    document.querySelector(".register__login").style.display = "display";
    document.querySelector(".account").style.display = 'none';
})

