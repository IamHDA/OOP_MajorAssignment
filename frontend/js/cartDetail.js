function lamtron(num) {
    return Math.round(num / 100000) * 100000;
}

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

async function getDataCartDetail() {
    var accessToken = localStorage.getItem('accessToken');
    console.log(accessToken);
    const response = await fetch('http://localhost:8080/cart-detail', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`
        }
    });
    return await response.json();
}

async function buildCartDeTail(){
    const responseData = await getDataCartDetail();
    let cartTable = document.querySelector('.cart-table');
    console.log(responseData);
    responseData.forEach(function(element){
        const imgProduct = '<img class = "laptop-img" src= "' + element.laptop.images[0].filePath + ".jpg" + '"alt=""></img>';
        const nameProduct = '<a href="product.html" class="product__name">' + element.laptop.name + ' ' + '(' + element.laptop.specification.cpu + ' ' + element.laptop.specification.ram + ' ' + element.laptop.specification.rom + ' ' + element.laptop.specification.graphicsCard + ' ' + element.laptop.specification.screen + ')' +'</a>';
        const td1 = '<td>' + imgProduct + nameProduct + '</td>';
        const subButton = '<button class="left-button">-</button>';
        const counter = '<div class="laptop-counter">' + element.quantity + '</div>';
        const addButton = '<button class="right-button">+</button>';
        const adjust = '<div class="adjust">' + subButton + counter + addButton + '</div>';
        const trash = '<button class="trash-button"><img src="image/cart/trash-icon.png" class="trash-image"></button>';
        const adjustAndDelete = '<div class="adjust-delete-button">' + adjust + trash + '</div>';
        let tmp = lamtron(element.laptop.price * (100 - element.laptop.sale) / 100).toString();
        tmp = daucham(tmp);
        const unitPrice = '<p class="unit-price">' + tmp + '</p>';
        const totalUnitPrice = '<p class="total-unit-price"></p>';
        const td2 = '<td>' + adjustAndDelete + unitPrice + totalUnitPrice + '</td>';
        const tableRow = '<tr class="table-row">' + td1 + td2 + '</tr>';
        cartTable.innerHTML += tableRow;
    });
} 
async function Main(){
    await buildCartDeTail();
    let cartDetail = document.querySelector('.my-cart-detail');
    let emptyCart = document.querySelector('.empty-cart');
    let tableRow = document.querySelectorAll('.table-row');
    if (tableRow.length != 0){
        cartDetail.style.display = 'flex';
        emptyCart.style.display = 'none';
        adjustNumberProduct();
    }
    if (tableRow.length == 0){
        cartDetail.style.display = 'none';
        emptyCart.style.display = 'block';
    }
    
    deleteProduct();
    deleteAllProduct();
}

Main();
