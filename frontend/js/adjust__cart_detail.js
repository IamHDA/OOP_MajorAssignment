function boDauCham(number){
    let res = "";
    for(let i = 0; i < number.length; i++){
        if(number[i] != "."){
            res += number[i];
        }
        if(number[i] == " "){
            break;
        }
    }
    return res;
}

function daucham(num) {
    let tmp = "";
    let mark = 0;
    for (let i = num.length - 1; i >= 0; i--) {
        mark += 1;
        tmp = num[i] + tmp;
        if (mark == 3 && i != 0) {
            tmp = "." + tmp;
            mark = 0;
        }
    }
    return tmp;
}

function adjustNumberProduct(){
    let tableRow = document.querySelectorAll('.table-row');
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

function deletaProduct(){
    let tableRow = document.querySelectorAll('.table-row');
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
        })
    }
}


adjustNumberProduct();
deletaProduct();