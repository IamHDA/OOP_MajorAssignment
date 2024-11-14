import checkAccessTokenIsvalid from "./accessToken.js";

async function getThisMonthRevenue(){
    let revenue = document.querySelector('.revenue');
    await checkAccessTokenIsvalid();
    let accessToken = localStorage.getItem("accessToken");
    let response = await fetch('http://localhost:8080/order/admin/getThisMonthRevenue', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`
        }       
    });
    response = await response.text();
    revenue.innerHTML = response + ' VNĐ';
}

async function getThisMonthUsers() {
    let numberNewUser = document.querySelector('.numberNewUser');
    await checkAccessTokenIsvalid();
    let accessToken = localStorage.getItem("accessToken");
    let response = await fetch('http://localhost:8080/user/admin/thisMonthUsers', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`
        }       
    });
    response = await response.text();
    numberNewUser.innerHTML = response + ' tài khoản';
}

async function getCountThisMonthOrder(){
    let numberOrder = document.querySelector('.numberOrder');
    await checkAccessTokenIsvalid();
    let accessToken = localStorage.getItem("accessToken");
    let response = await fetch('http://localhost:8080/user/info', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`
        }       
    });
    response = await response.text();
    numberOrder.innerHTML = response + ' đơn hàng';
}

async function overallMain() {
    await getThisMonthRevenue();
    await getThisMonthUsers();
    await getCountThisMonthOrder();
}

overallMain();