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

// getDataCartDetail
async function getDataCartDetail() {
    let accessToken = localStorage.getItem('accessToken');
    await checkAccessTokenIsvalid(); // check accessToken   
    const response = await fetch('http://localhost:8080/cart-detail', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`
        }
    });
    return await response.json();
}

// buildCartDetail
async function buildCartDeTail(){
    const responseData = await getDataCartDetail();
    let cartTable = document.querySelector('.cart-table');
    responseData.forEach(function(element){
        const imgProduct = '<img class = "laptop-img" src= "' + element.images[0].filePath + ".jpg" + '"alt=""></img>';
        const nameProduct = '<a href="product.html" class="product__name">' + element.name + ' ' + '(' + element.specification.cpu + ' ' + element.specification.ram + ' ' + element.specification.rom + ' ' + element.specification.graphicsCard + ' ' + element.specification.screen + ')' +'</a>';
        const td1 = '<td>' + imgProduct + nameProduct + '</td>';
        const subButton = '<button class="left-button">-</button>';
        const counter = '<div class="laptop-counter">' + element.quantity + '</div>';
        const addButton = '<button class="right-button">+</button>';
        const adjust = '<div class="adjust">' + subButton + counter + addButton + '</div>';
        const trash = '<button class="trash-button"><img src="image/cart/trash-icon.png" class="trash-image"></button>';
        const adjustAndDelete = '<div class="adjust-delete-button">' + adjust + trash + '</div>';
        let tmp = lamtron(element.price * (100 - element.sale) / 100).toString();
        tmp = daucham(price) + " VNĐ";
        const unitPrice = '<p class="unit-price">' + tmp + '</p>';
        let tmp2 = lamtron(element.price * (100 - element.sale) / 100) * parseInt(element.quantity);
        tmp2 = tmp2.toString() + " VNĐ";
        const totalUnitPrice = '<p class="total-unit-price">' + tmp2 + '</p>';
        const td2 = '<td>' + unitPrice + totalUnitPrice + '</td>';
        const tableRow = '<tr class="table-row">' + td1 + td2 + adjustAndDelete + '</tr>';
        cartTable.innerHTML += tableRow;
    });
} 

// adjustNumberProduct
function adjustNumberProduct(){
    let totalPrice = document.querySelector('.total-price');
    tableRow.forEach(function(element){
        let buttonRight = element.querySelector('.right-button');
        let numberProduct = element.querySelector('.laptop-counter');
        let buttonLeft = element.querySelector('.left-button');
        let unitPrice = element.querySelector('.unit-price');
        let totalUnitPrice = element.querySelector('.total-unit-price');

        // Chỉnh màu cho nút giảm khi sản phẩm bằng 1 và khác 1
        if(numberProduct.textContent == "1"){
            buttonLeft.style.color = '#D4D1D1';
        }
        if(numberProduct.textContent != "1"){
            buttonLeft.style.color = 'black';
        }

        // Bấm nút giảm
        buttonLeft.addEventListener('click', function(){
            if(numberProduct.textContent != "1"){
                let currentNumber = parseInt(numberProduct.textContent, 10);
                let newNumber = currentNumber - 1;
                newNumber = newNumber.toString();
                numberProduct.innerHTML = newNumber;
                // Chỉnh giá
                let unitPriceNumber = unitPrice.textContent; // gia 1 product
                unitPriceNumber = boDauCham(unitPriceNumber);
                unitPriceNumber = parseInt(unitPriceNumber, 10); // chuyen gia 1 product ve int
                let totalUnitPriceNumber = unitPriceNumber * parseInt(newNumber, 10); // tinh tong gia moi
                totalUnitPriceNumber = totalUnitPriceNumber.toString(); // chuyen tong gia moi ve string
                totalUnitPriceNumber = daucham(totalUnitPriceNumber) + " VNĐ";
                totalUnitPrice.innerHTML = totalUnitPriceNumber;

                // Chỉnh màu cho nút giảm khi sản phẩm bằng 1
                if(numberProduct.textContent == "1"){
                    buttonLeft.style.color = '#D4D1D1';
                }

                // Chinh tong gia cart
                let totalPriceNumber = totalPrice.textContent;
                totalPriceNumber = boDauCham(totalPriceNumber);
                totalPriceNumber = parseInt(totalPriceNumber, 10);
                totalPriceNumber -= unitPriceNumber;
                totalPriceNumber = totalPriceNumber.toString();
                totalPriceNumber = daucham(totalPriceNumber) + " VNĐ";
                totalPrice.innerHTML = totalPriceNumber;
            }    
        })

        // Bấm nút tăng

        buttonRight.addEventListener('click', function(){
            let currentNumber = parseInt(numberProduct.textContent, 10);
            let newNumber = currentNumber + 1;
            newNumber = newNumber.toString();
            numberProduct.innerHTML = newNumber;
            // Chỉnh giá
            let unitPriceNumber = unitPrice.textContent; // gia 1 product
            unitPriceNumber = boDauCham(unitPriceNumber);
            unitPriceNumber = parseInt(unitPriceNumber, 10); // chuyen gia 1 product ve int
            let totalUnitPriceNumber = unitPriceNumber * parseInt(newNumber, 10); // tinh tong gia moi
            totalUnitPriceNumber = totalUnitPriceNumber.toString(); // chuyen tong gia moi ve string
            totalUnitPriceNumber = daucham(totalUnitPriceNumber) + " VNĐ";
            totalUnitPrice.innerHTML = totalUnitPriceNumber;

            // Chỉnh màu cho nút giảm khi sản phẩm khac 1
            if(numberProduct.textContent != "1"){
                buttonLeft.style.color = 'black';
            }

            // Chinh tong gia cart
            let totalPriceNumber = totalPrice.textContent;
            totalPriceNumber = boDauCham(totalPriceNumber); 
            totalPriceNumber = parseInt(totalPriceNumber, 10);
            totalPriceNumber += unitPriceNumber;
            totalPriceNumber = totalPriceNumber.toString();
            totalPriceNumber = daucham(totalPriceNumber) + " VNĐ";
            totalPrice.innerHTML = totalPriceNumber;
        })


    })
}

// deleteProduct
function deleteProduct(){
    let countTableRow = tableRow.length;
    let cartCounter = document.querySelector('.cart-counter');
    cartCounter.innerHTML = "(" + countTableRow + " sản phẩm" + ")";
    for(let i = 0; i < tableRow.length; i++){
        let deleteButton = tableRow[i].querySelector('.trash-button');
        deleteButton.addEventListener('click', function(){
            // thay doi tong gia cart
            let totalUnitPrice = tableRow[i].querySelector('.total-unit-price');
            let totalUnitPriceNumber = totalUnitPrice.textContent;
            totalUnitPriceNumber = boDauCham(totalUnitPriceNumber);
            totalUnitPriceNumber = parseInt(totalUnitPriceNumber, 10);

            let totalPrice = document.querySelector('.total-price');
            let totalPriceNumber = totalPrice.textContent;
            totalPriceNumber = boDauCham(totalPriceNumber);
            totalPriceNumber = parseInt(totalPriceNumber, 10);

            totalPriceNumber -= totalUnitPriceNumber;
            totalPriceNumber = totalPriceNumber.toString(); // chuyen tong gia moi ve string
            totalPriceNumber = daucham(totalPriceNumber) + " VNĐ";
            totalPrice.innerHTML = totalPriceNumber;

            // xoa the div
            tableRow[i].remove();
            countTableRow -= 1;
            cartCounter.innerHTML = "(" + countTableRow + " sản phẩm" + ")";
            console.log(tableRow.length);
            if (countTableRow == 0){
                cartDetail.style.display = 'none';
                emptyCart.style.display = 'block';
                cartCounter.innerHTML = "(" + countTableRow + " sản phẩm" + ")";
            }
        })
    }
}

// deletaAllProduct
function deleteAllProduct(){
    let buttonClear = document.querySelector('.make-empty-button');
    let cartCounter = document.querySelector('.cart-counter');
    buttonClear.addEventListener('click', function(){
        for(let i = 0; i < tableRow.length; i++){
            tableRow[i].remove();
        }
        cartCounter.innerHTML = "(0 sản phẩm)";
        cartDetail.style.display = 'none';
        emptyCart.style.display = 'block';
    })
}

// main
async function mainCartDetail(){
    await buildCartDeTail();
    let cartDetail = document.querySelector('.my-cart-detail');
    let emptyCart = document.querySelector('.empty-cart');
    let tableRow = document.querySelectorAll('.table-row');
    if (tableRow.length != 0){
        cartDetail.style.display = 'flex';
        emptyCart.style.display = 'none';
    }
    if (tableRow.length == 0){
        cartDetail.style.display = 'none';
        emptyCart.style.display = 'block';
    }
    
    adjustNumberProduct();
    deleteProduct();
    deleteAllProduct();
}

mainCartDetail();
