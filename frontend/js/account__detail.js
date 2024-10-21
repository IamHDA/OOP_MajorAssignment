document.querySelector(".register__login").style.display = "none";
document.querySelector(".account").style.display = 'block';

var thongTinTaiKhoan = document.querySelector(".thong-tin-tai-khoan");
var danhSachDonHang = document.querySelector(".danh-sach-don-hang");
var thayDoiMatKhau = document.querySelector(".thay-doi-mat-khau");
var logOut = document.querySelector(".log-out");

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
    empty.style,display = 'none'
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
        name = response.name;
        email = response.email;
        address = response.address;
        phone = response.phone;
    })
    .catch({
        alert()
    })

    var button = document.querySelector(".account__detail__content___thong-tin-tai-khoan__submit");

    const data = {
        name: name,
        address: address,
        phone: phone,
    }

    button.addEventListener('click', function(){
        fetch('http://localhost:3000/account',{
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

thayDoiMatKhau.addEventListener('click', function(){
    var currentPass = document.querySelector(".account__detail__content___thay-doi-mat-khau__mat-khau-hien-tai");
    // var newPass1 = 
})

