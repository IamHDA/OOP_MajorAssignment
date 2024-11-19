import checkAccessTokenIsvalid from "./accessToken.js";

async function getAllAccount(){
    await checkAccessTokenIsvalid();
    let accessToken = localStorage.getItem('accessToken');
    let response = await fetch('http://localhost:8080/user/admin/getAllUsers',{
        method: 'GET',
        headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`
        },
    });
    response = await response.json();
    return response;
}

async function buildAllAccount() {
    let data = await getAllAccount();
    let numberPage = 0;
    if(data.length % 5 == 0){
        numberPage = data.length / 5;
    }
    else{
        numberPage = data.length / 5 + 1;
    }
    tmp = numberPage.toString();
    document.querySelector('.numberPage').innerHTML = number; 
    let index = 1;
    let accountTable = "";
    let pages = document.querySelector('.pages');
    let numberRow = 0;
    await data.forEach(function(element){
        numberRow += 1;
        let id = '<td class="id">' + element.id + '</td>';
        let stt =  '<td class="stt">' + index + '</td>';
        index += 1;
        let name = '<td class="name">' + element.name + '</td>';
        let email = '<td class="email">' + element.email + '</td>';
        let contact = '<td class="contact">' + element.phone + '</td>';
        let address = '<td class="address">' + element.address + '</td>';
        let registrationDate = '<td class="registration-date">' + element.registrationDate + '</td>';
        let role = '<td class="role">' + element.role + '</td>';
        let tableRow = '<tr class="table-other-row">' + id + stt + name + email + contact + address + registrationDate + role + '</tr>';
        accountTable += tableRow;
        if(numberRow == 5){
            accountTable = '<table class="account-table"><tr class="table-first-row"><td class="stt">STT</td><td class="id">ID</td><td class="name">Họ tên</td><td class="email">Email</td><td class="contact">Số điện thoại</td><td class="address">Địa chỉ</td><td class="registration-date">Ngày đăng ký</td><td class="role">Vai trò</td></tr>' + accountTable + '</table>';
            pages.innerHTML += accountTable;
            accountTable = '';
            numberRow = 0;
        }
    })
    if(numberRow > 0){
        accountTable = '<table class="account-table"><tr class="table-first-row"><td class="stt">STT</td><td class="id">ID</td><td class="name">Họ tên</td><td class="email">Email</td><td class="contact">Số điện thoại</td><td class="address">Địa chỉ</td><td class="registration-date">Ngày đăng ký</td><td class="role">Vai trò</td></tr>' + accountTable + '</table>';
        pages.innerHTML += accountTable;
    }
    pageTrantition(numberPage);
}

function pageTrantition(numberPage){
    let left = document.querySelector('.letf');
    let right = document.querySelector('.right');
    let currentPage = 1;
    let accountTable = querySelectorAll('.account-table');
    document.querySelector('.currentPage').innerHTML = currentPage;

    left.addEventListener('click', function(){
        if(currentPage > 1){
            currentPage -= 1;
            document.querySelector('.currentPage').innerHTML = currentPage;
            accountTable.forEach(function(element){
                element.style.transform = `translateX(-1049px)`;
            })
        }
    });
    
    right.addEventListener('click', function() {
        if (currentPage < numberPage) {
            currentPage += 1;
            document.querySelector('.currentPage').innerHTML = currentPage;
            accountTable.forEach(function(element) {
                element.style.transform = `translateX(1049px)`;
            });
        }
            
    });
}

await buildAllAccount();