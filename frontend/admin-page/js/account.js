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
    let currentPage = document.querySelector('.currentPage');
    let numberPageHTML = document.querySelector('.numberPage')
    let numberPage = 0;
    if(data.length % 5 == 0){
        numberPage = data.length / 5;
    }
    else{
        numberPage = Math.round(data.length / 5) + 1;
    }
    let currentPageNumber = 1;
    currentPage.innerHTML = currentPageNumber;
    numberPageHTML.innerHTML = numberPage;
    await buildPage1(data);
    
    let left = document.querySelector('.left');
    let right = document.querySelector('.right');
    let pages = document.querySelector('.pages');

    left.addEventListener('click', async function(){
        if(currentPageNumber > 1){
            let accountTable = "";
            currentPageNumber -= 1;
            let numberRow = 0;
            for(let i = (currentPageNumber - 1) * 5; i < data.length; i++){
                numberRow += 1;
                let id = '<td class="id">' + data[i].id + '</td>';
                let stt =  '<td class="stt">' + numberRow + '</td>';
                let name = '<td class="name">' + data[i].name + '</td>';
                let email = '<td class="email">' + data[i].email + '</td>';
                let contact = '<td class="contact">' + data[i].phone + '</td>';
                let address = '<td class="address">' + data[i].address + '</td>';
                let registrationDate = '<td class="registration-date">' + data[i].registrationDate + '</td>';
                let role = '<td class="role">' + data[i].role + '</td>';
                let tableRow = '<tr class="table-other-row">' + id + stt + name + email + contact + address + registrationDate + role + '</tr>';
                accountTable += tableRow;
        
                if(numberRow == 5 || i == data.length - 1){
                    accountTable = '<table class="account-table"><tr class="table-first-row"><td class="stt">STT</td><td class="id">ID</td><td class="name">Họ tên</td><td class="email">Email</td><td class="contact">Số điện thoại</td><td class="address">Địa chỉ</td><td class="registration-date">Ngày đăng ký</td><td class="role">Vai trò</td></tr>' + accountTable + '</table>';
                    pages.innerHTML = accountTable;
                    break;
                }
            }
            currentPage.innerHTML = currentPageNumber;
        }
    })
    right.addEventListener('click', async function(){
        if(currentPageNumber < numberPage){
            let accountTable = "";
            currentPageNumber += 1;
            let numberRow = 0;
            for(let i = (currentPageNumber - 1) * 5; i < data.length; i++){
                numberRow += 1;
                let id = '<td class="id">' + data[i].id + '</td>';
                let stt =  '<td class="stt">' + numberRow + '</td>';
                let name = '<td class="name">' + data[i].name + '</td>';
                let email = '<td class="email">' + data[i].email + '</td>';
                let contact = '<td class="contact">' + data[i].phone + '</td>';
                let address = '<td class="address">' + data[i].address + '</td>';
                let registrationDate = '<td class="registration-date">' + data[i].registrationDate + '</td>';
                let role = '<td class="role">' + data[i].role + '</td>';
                let tableRow = '<tr class="table-other-row">' + id + stt + name + email + contact + address + registrationDate + role + '</tr>';
                accountTable += tableRow;
        
                if(numberRow == 5 || i == data.length - 1){
                    accountTable = '<table class="account-table"><tr class="table-first-row"><td class="stt">STT</td><td class="id">ID</td><td class="name">Họ tên</td><td class="email">Email</td><td class="contact">Số điện thoại</td><td class="address">Địa chỉ</td><td class="registration-date">Ngày đăng ký</td><td class="role">Vai trò</td></tr>' + accountTable + '</table>';
                    pages.innerHTML = accountTable;
                    break;
                }
            }
            currentPage.innerHTML = currentPageNumber;
        }
    })
}

async function buildPage1(data){
    let pages = document.querySelector('.pages');
    let numberRow = 0;
    let accountTable = '';
    for(let i = 0; i < data.length; i++){
        numberRow += 1;
        let id = '<td class="id">' + data[i].id + '</td>';
        let stt =  '<td class="stt">' + numberRow + '</td>';
        let name = '<td class="name">' + data[i].name + '</td>';
        let email = '<td class="email">' + data[i].email + '</td>';
        let contact = '<td class="contact">' + data[i].phone + '</td>';
        let address = '<td class="address">' + data[i].address + '</td>';
        let registrationDate = '<td class="registration-date">' + data[i].registrationDate + '</td>';
        let role = '<td class="role">' + data[i].role + '</td>';
        let tableRow = '<tr class="table-other-row">' + id + stt + name + email + contact + address + registrationDate + role + '</tr>';
        accountTable += tableRow;

        if(numberRow == 5 || i == data.length - 1){
            accountTable = '<table class="account-table"><tr class="table-first-row"><td class="stt">STT</td><td class="id">ID</td><td class="name">Họ tên</td><td class="email">Email</td><td class="contact">Số điện thoại</td><td class="address">Địa chỉ</td><td class="registration-date">Ngày đăng ký</td><td class="role">Vai trò</td></tr>' + accountTable + '</table>';
            pages.innerHTML = accountTable;
            break;
        }
    }
}





await buildAllAccount();