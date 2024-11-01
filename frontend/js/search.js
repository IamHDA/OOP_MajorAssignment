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

function searchProduct(){
    let keyword = localStorage.getItem('valueSearch');
    fetch(`http://localhost:8080/laptop/search?keyword=${keyword}`)
    .then(response => {
        return response.json();
    })
    .then(data => {
        let allLaptop = document.querySelector('.all-laptop');
        for(let i = 0; i < data.length; i++){
            var idProduct = '<div class="id__product">' + data[i].id + '</div>';
            var imgProduct = '<a href="product.html" class="produc__img">'+ '<img src="' + data[i].images[0].filePath + '.jpg' + '" alt="">'+ '</a>';
            var nameProduct = '<a href="product.html" class="product__name">' + data[i].name + ' ' + data[i].specification.cpu + ' ' + data[i].specification.ram + ' ' + data[i].specification.graphicsCard + '</a>';
            let basePrice = data[i].price.toString();
            basePrice = daucham(basePrice);
            let price = data[i].price * (100 - data[i].sale) / 100;
            price = lamtron(price);
            price = price.toString();
            price = daucham(price);
            var productPrice = '<div class="product__price">' + price + ' đ' + ' </div>'; 
            var productBasePrice = '<div class="product__base__price">' + '<h1>' + basePrice + ' đ' + '</h1>' + '<h2> (Tiết kiệm ' + data[i].sale + '%)</h2>' + '</div>';
            var cart = '<div class="product__cart"> <i class="fa-solid fa-cart-shopping"></i> </div>'
            var laptopContainer = '<div class="laptop-container">' + idProduct + imgProduct + nameProduct + productPrice +productBasePrice + cart + '</div>';
            allLaptop.innerHTML += laptopContainer;
        }
    })
    .catch(error => console.log(error));
}

searchProduct();