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
    let index = 1;
    let accountTable = document.querySelector('.account-table');
    await data.forEach(function(element){
        console.log(element);
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
        accountTable.innerHTML += tableRow;
    })
}

await buildAllAccount();