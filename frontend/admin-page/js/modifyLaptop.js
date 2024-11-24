import checkAccessTokenIsvalid from "./accessToken.js";

let allLaptop = "";
let numberPageCurrent = 1;
let numberPageLaptop = 0;
let numberPageLaptopHTML = document.querySelector('.numberPage');
let numberPageCurrentHTML = document.querySelector('.currentPage');
let pageHTML = document.querySelector('.page');

function daucham(num){
    let str = num.toString();
    let tmp = "";
    let mark = 0;
    for(let i = str.length - 1; i >= 0; i--){
        mark += 1;
        tmp = str[i] + tmp;
        if(mark == 3 && i != 0){
            tmp = "." + tmp;
            mark = 0
        }
    }
    return tmp;
}

async function getAllLapTop(){
    try{
        await checkAccessTokenIsvalid();
        let accessToken = localStorage.getItem('accessToken');
        let response = await fetch('http://100.126.61.16:8080/laptop/admin/getAllLaptops',{
            method: 'GET',
            headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`
            }
        });
        response = await response.json();
        allLaptop = response;
    }
    catch(error){
        alert("Đã xảy ra lỗi! Vui lòng thử lại.");
        console.log("Loi xay ra getAllLaptop: " + error);
    }
}

async function buildPage1() {
    pageHTML.innerHTML = "";
    if(allLaptop.length % 5 == 0){
        numberPageLaptop = allLaptop.length / 5;
    }
    else{
        numberPageLaptop = Math.floor(allLaptop.length / 5) + 1;
    }
    numberPageLaptopHTML.innerHTML = numberPageLaptop;
    numberPageCurrentHTML.innerHTML = numberPageCurrent;

    let indexRow = 0;
    let page = "";
    for(let i = indexRow; i < allLaptop.length; i++){
        indexRow += 1;
        let stt = '<td class="stt">' + indexRow + '</td>';
        let LaptopId = '<td class="id">' + allLaptop[i].id + '</td>'
        let name = '<td class="name">' + allLaptop[i].name + '</td>'
        let price = '<td class="price">' + daucham(allLaptop[i].price) + ' VNĐ' + '</td>';
        let sale = '<td class="sale">' + allLaptop[i].sale + ' %' + '</td>';
        let state = '<td class="state">' + allLaptop[i].state + '</td>';
        let available = '<td class="available">' + allLaptop[i].available + '</td>';
        let rowTableLaptop = '<tr class="table-other-row">' + stt + LaptopId + name + price + sale + state + available  + '</tr>';
        page += rowTableLaptop;
        if(indexRow % 5 == 0){
            pageHTML.innerHTML = '<div class="page">' + '<table class="Laptop-table">' + '<tr class="table-first-row"><td class="stt">STT</td><td class="id">ID</td><td class="name">Họ tên</td><td class="contact">Số điện thoại</td><td class="address">Địa chỉ</td><td class="total-price">Đơn giá</td><td class="Laptop-date">Ngày đặt</td><td class="note">Ghi chú</td><td class="status">Trạng thái</td><td class="payment-method">Thanh toán</td></tr>'+ page + '</table>' + '</div>';
            break;
        }
    }

    if(pageHTML.innerHTML == ""){
        pageHTML.innerHTML = '<div class="page">' + '<table class="Laptop-table">' + '<tr class="table-first-row"><td class="stt">STT</td><td class="id">ID</td><td class="name">Họ tên</td><td class="contact">Số điện thoại</td><td class="address">Địa chỉ</td><td class="total-price">Đơn giá</td><td class="Laptop-date">Ngày đặt</td><td class="note">Ghi chú</td><td class="status">Trạng thái</td><td class="payment-method">Thanh toán</td></tr>'+ page + '</table>' + '</div>';
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
            let indexRow = 5 * (numberPageCurrent - 1);
            let page = "";
            for(let i = indexRow; i < allLaptop.length; i++){
                indexRow += 1;
                let stt = '<td class="stt">' + indexRow + '</td>';
                let LaptopId = '<td class="id">' + allLaptop[i].id + '</td>'
                let name = '<td class="name">' + allLaptop[i].name + '</td>'
                let price = '<td class="price">' + daucham(allLaptop[i].price) + ' VNĐ' + '</td>';
                let sale = '<td class="sale">' + allLaptop[i].sale + ' %' + '</td>';
                let state = '<td class="state">' + allLaptop[i].state + '</td>';
                let available = '<td class="available">' + allLaptop[i].available + '</td>';
                let rowTableLaptop = '<tr class="table-other-row">' + stt + LaptopId + name + price + sale + state + available  + '</tr>';
                page += rowTableLaptop;
                if(indexRow % 5 == 0){
                    pageHTML.innerHTML = '<div class="page">' + '<table class="Laptop-table">' + '<tr class="table-first-row"><td class="stt">STT</td><td class="id">ID</td><td class="name">Tên Laptop</td><td class="price">Giá sản phẩm</td><td class="sale">Giảm giá</td><td class="state">Trạng thái</td><td class="available">Còn hàng</td></tr>'+ page + '</table>' + '</div>';
                    break;
                }
            }
        
            if(pageHTML.innerHTML == ""){
                pageHTML.innerHTML = '<div class="page">' + '<table class="Laptop-table">' + '<tr class="table-first-row"><td class="stt">STT</td><td class="id">ID</td><td class="name">Tên Laptop</td><td class="price">Giá sản phẩm</td><td class="sale">Giảm giá</td><td class="state">Trạng thái</td><td class="available">Còn hàng</td></tr>'+ page + '</table>' + '</div>';
            }
        }
    })

    right.addEventListener('click', async function(){
        if(numberPageCurrent < numberPageLaptop){
            pageHTML.innerHTML = "";
            numberPageCurrent += 1;
            numberPageCurrentHTML.innerHTML = numberPageCurrent;
            let indexRow = 5 * (numberPageCurrent - 1);
            let page = "";
            for(let i = indexRow; i < allLaptop.length; i++){
                indexRow += 1;
                let stt = '<td class="stt">' + indexRow + '</td>';
                let LaptopId = '<td class="id">' + allLaptop[i].id + '</td>'
                let name = '<td class="name">' + allLaptop[i].name + '</td>'
                let price = '<td class="price">' + daucham(allLaptop[i].price) + ' VNĐ' + '</td>';
                let sale = '<td class="sale">' + allLaptop[i].sale + ' %' + '</td>';
                let state = '<td class="state">' + allLaptop[i].state + '</td>';
                let available = '<td class="available">' + allLaptop[i].available + '</td>';
                let rowTableLaptop = '<tr class="table-other-row">' + stt + LaptopId + name + price + sale + state + available  + '</tr>';
                page += rowTableLaptop;
                if(indexRow % 5 == 0){
                    pageHTML.innerHTML = '<div class="page">' + '<table class="Laptop-table">' + '<tr class="table-first-row"><td class="stt">STT</td><td class="id">ID</td><td class="name">Tên Laptop</td><td class="price">Giá sản phẩm</td><td class="sale">Giảm giá</td><td class="state">Trạng thái</td><td class="available">Còn hàng</td></tr>'+ page + '</table>' + '</div>';
                    break;
                }
            }
        
            if(pageHTML.innerHTML == ""){
                pageHTML.innerHTML = '<div class="page">' + '<table class="Laptop-table">' + '<tr class="table-first-row"><td class="stt">STT</td><td class="id">ID</td><td class="name">Tên Laptop</td><td class="price">Giá sản phẩm</td><td class="sale">Giảm giá</td><td class="state">Trạng thái</td><td class="available">Còn hàng</td></tr>'+ page + '</table>' + '</div>';
            }
        }
    })
}

function modifyLaptopMain(){
    getAllLapTop();
    buildPage1();
    pageTransition();
}

modifyLaptopMain();