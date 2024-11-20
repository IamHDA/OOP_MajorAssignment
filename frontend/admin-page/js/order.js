import checkAccessTokenIsvalid from "./accessToken.js";

let allOrder;
let numberPageCurrent = 1;
let numberPageOrder = 0;
let numberPageOrderHTML = document.querySelector('.numberPage');
let numberPageCurrentHTML = document.querySelector('.currentPage');
let pageHTML = document.querySelector('.page');

async function getAllOrder() {
    try{
        await checkAccessTokenIsvalid();
        let accessToken = localStorage.getItem('accessToken');
        let response = await fetch('http://localhost:8080/order/admin/getAllOrders',{
            method: 'GET',
            headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`
            }
        });
        response = await response.json();
        allOrder = response;
    }
    catch(error){
        alert("Đã xảy ra lỗi! Vui lòng thử lại.");
        console.log("Loi xay ra getAllOrder: " + error);
    }
}

async function buildPage1() {
    pageHTML.innerHTML = "";
    if(allOrder.length % 10 == 0){
        numberPageOrder = allOrder.length / 10;
    }
    else{
        numberPageOrder = Math.floor(allOrder.length / 10) + 1;
    }
    numberPageOrderHTML.innerHTML = numberPageOrder;
    numberPageCurrentHTML.innerHTML = numberPageCurrent;

    let indexRow = 0;
    let page = "";
    for(let i = 0; i < allOrder.length; i++){
        indexRow += 1;
        let stt = '<td class="stt">' + indexRow + '</td>';
        let orderId = '<td class="id">' + allOrder[i].id + '</td>'
        let name = '<td class="name">' + allOrder[i].receiverName + '</td>'
        let contact = '<td class="contact">' + allOrder[i].receiverPhone + '</td>';
        let address = '<td class="address">' + allOrder[i].shippingAddress + '</td>';
        let totalPrice = '<td class="total-price">' + allOrder[i].totalPrice + 'VNĐ' + '</td>';
        let orderDate = '<td class="order-date">' + allOrder[i].orderDate + '</td>';
        let note =  '<td class="note">' + allOrder[i].note + '</td>';
        let status = '<td class="status">' + allOrder[i].status + '</td>';
        let paymentMethod = '<td class="payment-method">' + allOrder[i].paymentMethod + '</td>';
        let rowTableOrder = '<tr class="table-other-row">' + stt + orderId + name + contact + address + totalPrice + orderDate + note + status + paymentMethod  + '</tr>';
        page += rowTableOrder;
        if(indexRow == 10){
            pageHTML.innerHTML = '<div class="page">' + '<tr class="table-first-row"><td class="stt">STT</td<td class="id">ID</td><td class="name">Họ tên</td><td class="contact">Số điện thoại</td><td class="address">Địa chỉ</td><td class="total-price">Đơn giá</td><td class="order-date">Ngày đặt</td><td class="note">Ghi chú</td><td class="status">Trạng thái</td><td class="payment-method">Thanh toán</td></tr>'+ page + '</div>';
            break;
        }
    }

    if(pageHTML.innerHTML == ""){
        pageHTML.innerHTML = '<div class="page">' + '<tr class="table-first-row"><td class="stt">STT</td<td class="id">ID</td><td class="name">Họ tên</td><td class="contact">Số điện thoại</td><td class="address">Địa chỉ</td><td class="total-price">Đơn giá</td><td class="order-date">Ngày đặt</td><td class="note">Ghi chú</td><td class="status">Trạng thái</td><td class="payment-method">Thanh toán</td></tr>'+ page + '</div>';
    }

}

function pageTransition(){
    let left = document.querySelector('.left');
    let right = document.querySelector('.right');

    left.addEventListener('click', async function(){
        if(numberPageCurrent > 1){
            pageHTML.innerHTML = "";
            numberPageCurrent -= 1;
            numberPageCurrentHTML.innerHTML = numberPageCurrent;
            let indexRow = 10 * (numberPageCurrent - 1);
            let page = "";
            for(let i = 0; i < allOrder.length; i++){
                indexRow += 1;
                let stt = '<td class="stt">' + indexRow + '</td>';
                let orderId = '<td class="id">' + allOrder[i].id + '</td>'
                let name = '<td class="name">' + allOrder[i].receiverName + '</td>'
                let contact = '<td class="contact">' + allOrder[i].receiverPhone + '</td>';
                let address = '<td class="address">' + allOrder[i].shippingAddress + '</td>';
                let totalPrice = '<td class="total-price">' + allOrder[i].totalPrice + 'VNĐ' + '</td>';
                let orderDate = '<td class="order-date">' + allOrder[i].orderDate + '</td>';
                let note =  '<td class="note">' + allOrder[i].note + '</td>';
                let status = '<td class="status">' + allOrder[i].status + '</td>';
                let paymentMethod = '<td class="payment-method">' + allOrder[i].paymentMethod + '</td>';
                let rowTableOrder = '<tr class="table-other-row">' + stt + orderId + name + contact + address + totalPrice + orderDate + note + status + paymentMethod  + '</tr>';
                page += rowTableOrder;
                if(indexRow == 10){
                    pageHTML.innerHTML = '<div class="page">' + '<tr class="table-first-row"><td class="stt">STT</td<td class="id">ID</td><td class="name">Họ tên</td><td class="contact">Số điện thoại</td><td class="address">Địa chỉ</td><td class="total-price">Đơn giá</td><td class="order-date">Ngày đặt</td><td class="note">Ghi chú</td><td class="status">Trạng thái</td><td class="payment-method">Thanh toán</td></tr>'+ page + '</div>';
                    break;
                }
            }

            if(pageHTML.innerHTML == ""){
                pageHTML.innerHTML = '<div class="page">' + '<tr class="table-first-row"><td class="stt">STT</td<td class="id">ID</td><td class="name">Họ tên</td><td class="contact">Số điện thoại</td><td class="address">Địa chỉ</td><td class="total-price">Đơn giá</td><td class="order-date">Ngày đặt</td><td class="note">Ghi chú</td><td class="status">Trạng thái</td><td class="payment-method">Thanh toán</td></tr>'+ page + '</div>';
            }
        }
    })

    right.addEventListener('click', async function(){
        if(numberPageCurrent < numberPageOrder){
            pageHTML.innerHTML = "";
            numberPageCurrent += 1;
            numberPageCurrentHTML.innerHTML = numberPageCurrent;
            let indexRow = 10 * (numberPageCurrent - 1);
            let page = "";
            for(let i = 0; i < allOrder.length; i++){
                indexRow += 1;
                let stt = '<td class="stt">' + indexRow + '</td>';
                let orderId = '<td class="id">' + allOrder[i].id + '</td>'
                let name = '<td class="name">' + allOrder[i].receiverName + '</td>'
                let contact = '<td class="contact">' + allOrder[i].receiverPhone + '</td>';
                let address = '<td class="address">' + allOrder[i].shippingAddress + '</td>';
                let totalPrice = '<td class="total-price">' + allOrder[i].totalPrice + 'VNĐ' + '</td>';
                let orderDate = '<td class="order-date">' + allOrder[i].orderDate + '</td>';
                let note =  '<td class="note">' + allOrder[i].note + '</td>';
                let status = '<td class="status">' + allOrder[i].status + '</td>';
                let paymentMethod = '<td class="payment-method">' + allOrder[i].paymentMethod + '</td>';
                let rowTableOrder = '<tr class="table-other-row">' + stt + orderId + name + contact + address + totalPrice + orderDate + note + status + paymentMethod  + '</tr>';
                page += rowTableOrder;
                if(indexRow == 10){
                    pageHTML.innerHTML = '<div class="page">' + '<tr class="table-first-row"><td class="stt">STT</td<td class="id">ID</td><td class="name">Họ tên</td><td class="contact">Số điện thoại</td><td class="address">Địa chỉ</td><td class="total-price">Đơn giá</td><td class="order-date">Ngày đặt</td><td class="note">Ghi chú</td><td class="status">Trạng thái</td><td class="payment-method">Thanh toán</td></tr>'+ page + '</div>';
                    break;
                }
            }

            if(pageHTML.innerHTML == ""){
                pageHTML.innerHTML = '<div class="page">' + '<tr class="table-first-row"><td class="stt">STT</td<td class="id">ID</td><td class="name">Họ tên</td><td class="contact">Số điện thoại</td><td class="address">Địa chỉ</td><td class="total-price">Đơn giá</td><td class="order-date">Ngày đặt</td><td class="note">Ghi chú</td><td class="status">Trạng thái</td><td class="payment-method">Thanh toán</td></tr>'+ page + '</div>';
            }
        }
    })
}

async function mainOrder(){
    await getAllOrder();
    await buildPage1();
    pageTransition();
}

mainOrder();