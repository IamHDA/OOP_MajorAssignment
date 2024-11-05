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
    const response = await fetch('http://localhost:8080/cart-detail', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`
        }
    });
    return response.json();
}

async function buildCartDeTail(){
    const responseData = await getDataCartDetail();
    let cartTable = document.querySelector('.cart-table');
    responseData.forEach(function(element){
        const imgProduct = '<img src= "' + element.images[0].filePath + ".jpg" + '"alt=""></img>';
        const nameProduct = '<a href="product.html" class="product__name">' + element.name + ' ' + '(' + element.specification.cpu + ' ' + element.specification.ram + ' ' + element.specification.rom + ' ' + element.specification.graphicsCard + ' ' + element.specification.screen + ')' +'</a>';
        const td1 = '<td>' + imgProduct + nameProduct + '</td>';
        const subButton = '<button class="left-button">-</button>';
        const counter = '<div class="laptop-counter">' + element.quantity + '</div>';
        const addButton = '<button class="right-button">+</button>';
        const adjust = '<div class="adjust">' + subButton + counter + addButton + '</div>';
        const trash = '<button class="trash-button"><img src="image/cart/trash-icon.png" class="trash-image"></button>';
        const adjustAndDelete = '<div class="adjust-delete-button">' + adjust + trash + '</div>';
        let tmp = lamtron(element.price * (100 - element.sale) / 100).toString();
        tmp = daucham(price);
        const unitPrice = '<p class="unit-price">' + tmp + '</p>';
        const totalUnitPrice = '<p class="total-unit-price"></p>';
        const td2 = '<td>' + unitPrice + totalUnitPrice + '</td>';
        const tableRow = '<tr class="table-row">' + td1 + td2 + '</tr>';
        cartTable.innerHTML += tableRow;
    });
} 
async function Main(){
    await buildCartDeTail();
    adjustNumberProduct();
    deleteProduct();
    deleteAllProduct();
}

Main();
