import checkAccessTokenIsvalid from './accessToken.js';

var thongTinTaiKhoan = document.querySelector(".thong-tin-tai-khoan");
var danhSachDonHang = document.querySelector(".danh-sach-don-hang");
var thayDoiMatKhau = document.querySelector(".thay-doi-mat-khau");
var logOut = document.querySelector(".log-out");

var thongTinTaiKhoanBox = document.querySelector('.account__detail__content___thong-tin-tai-khoan');
var danhSachDonHangBox = document.querySelector('.account__detail__content___danh-sach-don-hang');
var thayDoiMatKhauBox = document.querySelector('.account__detail__content___thay-doi-mat-khau');
var empty = document.querySelector('.empty');

function daucham(num){
    let tmp = "";
    let mark = 0;
    for(let i = num.length - 1; i >= 0; i--){
        mark += 1;
        tmp = num[i] + tmp;
        if(mark == 3 && i != 0){
            tmp = "." + tmp;
            mark = 0
        }
    }
    return tmp;
}

async function getDataUserName() {
    
    var text = document.querySelector("#taikhoancua");
    await checkAccessTokenIsvalid();
    let accessToken = localStorage.getItem("accessToken");
    let response = await fetch('http://localhost:8080/user/info', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`
        }       
    });
    response = await response.json();
    var tmpname = '<p class="user-name">' + response.name + '</p>';
    var tmp = 'Tài khoản của, ' + '\n' + tmpname;
    text.innerHTML = tmp;
    console.log(tmpname);
    text.style.fontFamily = "Arial, sans-serif";
    tmpname = response.name;
    tmp = '<p> Xin chào ' + tmpname + '<p>';
    var account = document.querySelector('.account');
    account.innerHTML = tmp;
}
// hover selection
function hoverSelection(){
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

    thongTinTaiKhoanBox.style.display = 'none';
    danhSachDonHangBox.style.display = 'none';
    thayDoiMatKhauBox.style.display = 'none';
}

// ----------------------click selection----------------------
function clickSelection(){
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
        empty.style.display = 'none'
        thongTinTaiKhoanBox.style.display = 'none';
        danhSachDonHangBox.style.display = 'none';
        thayDoiMatKhauBox.style.display = 'block';
    })
}




// -----------------Box------------------------

// thongTinTaiKhoanBox
async function changeUserInfor() {
    thongTinTaiKhoan.addEventListener('click', async function(){
        var name = document.querySelector(".account__detail__content___thong-tin-tai-khoan__user-name__input");
        var email = document.querySelector(".account__detail__content___thong-tin-tai-khoan__user-email__input");
        var address = document.querySelector(".account__detail__content___thong-tin-tai-khoan__user-address__input");
        var phone = document.querySelector(".account__detail__content___thong-tin-tai-khoan__user-numberphone__input");

        await checkAccessTokenIsvalid();
        var accessToken = localStorage.getItem('accessToken');
        let response = await fetch('http://localhost:8080/user/info', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`
            }    
        });
        
        response = await response.json();
        name.value = response.name;
        email.value = response.email;
        address.value = response.address;
        phone.value = response.phone;

        var button = document.querySelector(".account__detail__content___thong-tin-tai-khoan__submit");

        button.addEventListener('click', async function(){
            const data = {
                name: name.value,
                address: address.value,
                phone: phone.value
            }
            
            await checkAccessTokenIsvalid();
            await fetch('http://localhost:8080/user/changeInfo',{
                method: 'PUT',
                headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`
                },
                body: JSON.stringify(data)  
            });
                localStorage.setItem('name', name.value);
                alert("Cập nhật thông tin thành công");
        })
    })
}

// Don hang
function buildOder(){
    let danhSachDonHang = document.querySelector('.danh-sach-don-hang');
    danhSachDonHang.addEventListener('click', async function(){
        let tableDanhSachDonHang = document.querySelector('.tableDanhSachDonHang');
        tableDanhSachDonHang.innerHTML = '<tr class="firstRow"><td class="stt">STT</td><td class="id">Số đơn hàng</td><td class="totalPrice">Giá trị</td><td class="status">Trạng thái</td></tr>';
        await checkAccessTokenIsvalid();
        let accessToken = localStorage.getItem('accessToken');
        let response = await fetch('http://localhost:8080/order/getCurrentUserOrder', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`
            }    
        });
        response = await response.json();
        let index = 1;
        await response.forEach(function(element){
            let stt = '<td class="stt">' + index + '</td>';
            index += 1;
            let id = '<td class="id">' + '#' + '100' + element.id.toString() + '</td>';
            let price = '<td class="totalPrice">' + daucham(element.totalPrice.toString()) + ' VNĐ' + '</td>';
            let status = '<td class="status">'  + element.status.name + '</td>';
            let nextRow =  '<tr class="nextRow">' + stt + id + price + status + '</tr>'
            tableDanhSachDonHang.innerHTML += nextRow;
        });

        if(index == 1){
            document.querySelector('.oderEmpty').style.display = "block";
            document.querySelector('.tableDanhSachDonHang').style.display = "none";
        }
        else{
            document.querySelector('.oderEmpty').style.display = "none";
            document.querySelector('.tableDanhSachDonHang').style.display = "block";
        }
    })    
}

// thay doi mat khau

async function changePassword(){
    var thayDoiMatKhauButton = document.querySelector('.button_thaydoimatkhau');
    thayDoiMatKhauButton.addEventListener('click', async function(){
        var currentPass = document.querySelector(".account__detail__content___thay-doi-mat-khau__mat-khau-hien-tai__input").value;
        var newPass1 = document.querySelector(".account__detail__content___thay-doi-mat-khau__mat-khau-moi-1__input").value;
        var newPass2 = document.querySelector(".account__detail__content___thay-doi-mat-khau__mat-khau-moi-2__input").value;

        var war1 = document.querySelector('.war1');
        var war2 = document.querySelector('.war2');

        if(newPass1 != newPass2){
            war1.style.display = 'block';
        }

        else{
            war1.style.display = 'none';
            // lay mat khau hien tai
            await checkAccessTokenIsvalid();
            var accessToken = localStorage.getItem('accessToken');
            const data = {
                password: newPass1
            }
            let response = await fetch('http://localhost:8080/user/changePass',{
                method: 'PUT',
                headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`
                },
                body: JSON.stringify(data)
            });
            
            response = await response.text();
            
            if(response === "Change password successfully"){
                alert("Thay đổi mật khẩu thành công!");
                 // reset
                currentPass = "";
                newPass1 = "";
                newPass2 = "";
            }else{
                alert("Mật khẩu mới không được trùng với mật khẩu trước đó!");
            }
        }
    })
}
// log out
function logOutFunc(){
    logOut.addEventListener('click', function(){
        console.log("event called");
        localStorage.clear();
        document.querySelector(".register__login").style.display = "display";
        document.querySelector(".account").style.display = 'none';
    })
}

async function mainAccountDetail() {
    await getDataUserName();
    hoverSelection();
    clickSelection();
    await changeUserInfor();
    await changePassword();
    logOutFunc();
    // buildOder();
}

mainAccountDetail();