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



let id = localStorage.getItem('id__product'); 

fetch(`http://localhost:8080/laptop/${id}`, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
    }
})
.then(response => {
    return response.json();
})
.then(response => {
    let productName = document.querySelector('.product__name');
    let productImgMain = document.querySelector('.product__img--main');
    let productImgList = document.querySelector('.product__img--list');
    let productSpecification = document.querySelector('.product__specifications');
    let ulProductSpecification = productSpecification.getElementsByTagName('ul')[0];
    let productPrice = document.querySelector('.product__price');
    let productBasePrice = document.querySelector('.product__base__price');
    let productSale = document.querySelector('.product__sale');

    productName.innerHTML += response.name;


    for(let i = 0; i < response.images.length; i++){
        productImgMain.innerHTML += '<img src= "' + response.images[i].filePath + ".jpg" + '"alt=""></img>';
        productImgList.innerHTML += '<img src= "' + response.images[i].filePath + ".jpg" + '"alt=""></img>';
    }

    ulProductSpecification.innerHTML += '<li>CPU :'  + response.specification.cpu + '</li>';
    ulProductSpecification.innerHTML += '<li>RAM :'  + response.specification.ram + '</li>';
    ulProductSpecification.innerHTML += '<li>VGA :'  + response.specification.graphicsCard + '</li>';

    let basePrice = response.price.toString();
    basePrice = daucham(basePrice);

    productSale.innerHTML += 'Tiết kiệm ' + response.sale + '%';
    productBasePrice.innerHTML += basePrice + ' đ';
    let price = response.price * (100 - response.sale) / 100;
    price = lamtron(price);
    price = price.toString();
    price = daucham(price);
    productPrice.innerHTML += price + ' đ';   

    const listImg = document.querySelectorAll('.product__img--list img');
    const mainImg = document.querySelectorAll('.product__img--main img');
    let indexImg = 0;
    let positionXImg = 0
    listImg[0].style.borderWidth = "3.5px";
    mainImg.forEach(function(element){
        element.style.transition = "0.8s";
    })
    for(let i = 0; i < listImg.length; i++){
        listImg[i].addEventListener('click', function(){
            for(let j = 0; j < listImg.length; j++){
                if(j != i){
                    listImg[j].style.borderWidth = "2px";
                }
                if(j == i){
                    listImg[j].style.borderWidth = "3.5px";
                }
            }
            if(i > indexImg){
                positionXImg -= 370 * (i - indexImg);
                indexImg = i;
                mainImg.forEach(function(element){
                    element.style.transform = `translateX(${positionXImg}px)`;
                })
            }
            if(i < indexImg){
                positionXImg += 370 * (indexImg - i);
                indexImg = i;
                mainImg.forEach(function(element){
                    element.style.transform = `translateX(${positionXImg}px)`;
                })
            }
        })
    }
})


