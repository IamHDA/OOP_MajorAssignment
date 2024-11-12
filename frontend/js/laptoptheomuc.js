async function searchProduct(){
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

    let keyword = localStorage.getItem('valueSearch');
    fetch(`http://localhost:8080/laptop/search?keyword=${keyword}`)
    .then(response => {
        return response.json();
    })
    .then(data => {
        let allLaptop = document.querySelector('.all-laptop');
        for(let i = 0; i < data.length; i++){
            var idProduct = '<div class="id__product">' + data[i].id + '</div>';
            var imgProduct = '<a href="product.html" class="product__img">'+ '<img src="' + data[i].images[0].filePath + '" alt="">'+ '</a>';
            var nameProduct = '<a href="product.html" class="product__name">' + data[i].name + '(' + data[i].specification.cpu + ', ' + data[i].specification.ram + ', ' + data[i].specification.rom + ', ' + data[i].specification.graphicsCard + ', ' + data[i].specification.screen + ')' +'</a>';
            let basePrice = data[i].price.toString();
            basePrice = daucham(basePrice);
            let price = data[i].price * (100 - data[i].sale) / 100;
            price = lamtron(price);
            price = price.toString();
            price = daucham(price);
            var productPrice = '<div class="product__price">' + price + ' đ' + ' </div>'; 
            var productBasePrice = '<div class="product__base__price">' + '<h1>' + basePrice + ' đ' + '</h1>' + '<h2> (Tiết kiệm ' + data[i].sale + '%)</h2>' + '</div>';
            var cart = '<div class="product__cart"> <i class="fa-solid fa-cart-shopping"></i> </div>'
            var laptopContainer = '<div class="product__container">' + idProduct + imgProduct + nameProduct + productPrice +productBasePrice + cart + '</div>';
            allLaptop.innerHTML += laptopContainer;
        }
    })
    .catch(error => console.log(error));
}

async function selectCategoryProduct(){
    let branch = localStorage.getItem('branch');
    let state = localStorage.getItem('state');
    let api = 'http://localhost:8080/collections/filter?category=' + branch + '&brand=&cpu&vga&ram&ssd&screenSize&state=' + state + '&sortBy&sortOrder&minPrice=0&maxPrice=0';    
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

    fetch(`${api}`)
    .then(response => {
        return response.json();
    })
    .then(data => {
        let allLaptop = document.querySelector('.all-laptop');
        for(let i = 0; i < data.length; i++){
            var idProduct = '<div class="id__product">' + data[i].id + '</div>';
            var imgProduct = '<a href="product.html" class="product__img">'+ '<img src="' + data[i].images[0].filePath + '" alt="">'+ '</a>';
            var nameProduct = '<a href="product.html" class="product__name">' + data[i].name + '(' + data[i].specification.cpu + ', ' + data[i].specification.ram + ', ' + data[i].specification.rom + ', ' + data[i].specification.graphicsCard + ', ' + data[i].specification.screen + ')' +'</a>';
            let basePrice = data[i].price.toString();
            basePrice = daucham(basePrice);
            let price = data[i].price * (100 - data[i].sale) / 100;
            price = lamtron(price);
            price = price.toString();
            price = daucham(price);
            var productPrice = '<div class="product__price">' + price + ' đ' + ' </div>'; 
            var productBasePrice = '<div class="product__base__price">' + '<h1>' + basePrice + ' đ' + '</h1>' + '<h2> (Tiết kiệm ' + data[i].sale + '%)</h2>' + '</div>';
            var cart = '<div class="product__cart"> <i class="fa-solid fa-cart-shopping"></i> </div>'
            var laptopContainer = '<div class="product__container">' + idProduct + imgProduct + nameProduct + productPrice +productBasePrice + cart + '</div>';
            allLaptop.innerHTML += laptopContainer;
        }
    })
}

async function seeAll(){
    let action = localStorage.getItem('action');
    let api;
    if(action == "seeAll0"){
        api =  'http://localhost:8080/collections/laptops-category/Hoc-tap-van-phong';   
    }
    else if(action == "seeAll1"){
        api =  'http://localhost:8080/collections/laptops-category/Laptop-Gaming';   
    }
    else if(action == "seeAll2"){
        api =  'http://localhost:8080/collections/laptops-category/Do-hoa-hieu-nang-cao';   
    }
    else{
        api = 'http://localhost:8080/collections/laptops-category/Mong-nhe-cao-cap';
    }
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

    await fetch(`${api}`)
    .then(response => {
        return response.json();
    })
    .then(data => {
        let allLaptop = document.querySelector('.all-laptop');
        for(let i = 0; i < data.length; i++){
            var idProduct = '<div class="id__product">' + data[i].id + '</div>';
            var imgProduct = '<a href="product.html" class="product__img">'+ '<img src="' + data[i].images[0].filePath + '" alt="">'+ '</a>';
            var nameProduct = '<a href="product.html" class="product__name">' + data[i].name + '(' + data[i].specification.cpu + ', ' + data[i].specification.ram + ', ' + data[i].specification.rom + ', ' + data[i].specification.graphicsCard + ', ' + data[i].specification.screen + ')' +'</a>';
            let basePrice = data[i].price.toString();
            basePrice = daucham(basePrice);
            let price = data[i].price * (100 - data[i].sale) / 100;
            price = lamtron(price);
            price = price.toString();
            price = daucham(price);
            var productPrice = '<div class="product__price">' + price + ' đ' + ' </div>'; 
            var productBasePrice = '<div class="product__base__price">' + '<h1>' + basePrice + ' đ' + '</h1>' + '<h2> (Tiết kiệm ' + data[i].sale + '%)</h2>' + '</div>';
            var cart = '<div class="product__cart"> <i class="fa-solid fa-cart-shopping"></i> </div>'
            var laptopContainer = '<div class="product__container">' + idProduct + imgProduct + nameProduct + productPrice +productBasePrice + cart + '</div>';
            allLaptop.innerHTML += laptopContainer;
        }
    })
}

function selectProduct(){
    var productContainer = document.querySelectorAll('.product__container');
    
    productContainer.forEach(function(element){
        var productImg = element.querySelector('.product__img');
        var productName = element.querySelector('.product__name');
        var productId = element.querySelector(".id__product");

        productImg.addEventListener('click', function(){
            localStorage.setItem('id__product', productId.textContent);
        });
        productName.addEventListener('click', function(){
            localStorage.setItem('id__product', productId.textContent);
        });
    })
}


async function laptoptheomucMain(){
    if(localStorage.getItem('action') === "search"){
        await searchProduct();
    }
    
    else if(localStorage.getItem('action') === "selectionCategory"){
        await selectCategoryProduct();
    }
    else{
        await seeAll();
    }
    selectProduct();
}

laptoptheomucMain();