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

async function searchProduct(){
    let keyword = localStorage.getItem('valueSearch');
    let data = await fetch(`http://localhost:8080/laptop/search?keyword=${keyword}`)
    data = await data.json();
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
}

async function selectCategoryProduct(){
    let category = localStorage.getItem('category');
    let state = localStorage.getItem('state');
    let api = 'http://localhost:8080/collections/filter?category=' + category + '&brand=&state=' + state + '&cpu&vga&ram&ssd&screenSize&sortBy&sortOrder&minPrice=0&maxPrice=0';    

    let data = await fetch(`${api}`)
    data = await data.json();
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

    let data = await fetch(`${api}`)
    data = await data.json();
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
}

async function getDaTaFilter() {
    let category = localStorage.getItem('category');
    let brand = localStorage.getItem('brand');
    let state = localStorage.getItem('state');
    let cpu = localStorage.getItem('cpu');
    let vga = localStorage.getItem('vga');
    let ram = localStorage.getItem('ram');
    let ssd = localStorage.getItem('ssd');
    let screenSize = localStorage.getItem('screenSize');
    let minPrice = localStorage.getItem('minPrice');
    let maxPrice = localStorage.getItem('maxPrice');
    let sortBy = localStorage.getItem('sortBy');
    let sortOrder = localStorage.getItem('sortOrder');

    if(category === null){
        category = "";
    }
    if(brand === null){
        brand = "";
    }
    if(state === null){
        state = "";
    }
    if(cpu === null){
        cpu = "";
    }
    if(vga === null){
        vga = "";
    }
    if(ram === null){
        ram = "";
    }
    if(ssd === null){
        ssd = "";
    }
    if(screenSize === null){
        screenSize = "";
    }
    if(minPrice === null){
        minPrice = 0;
    }
    if(maxPrice === null){
        maxPrice = 0;
    }
    if(sortBy === null){
        sortBy = "";
    }
    if(sortOrder === null){
        sortOrder = "";
    }

    let api = 'http://localhost:8080/collections/filter?category=' + category + '&brand=' + brand +  '&state=' + state + '&cpu' + '&vga=' + vga + '&ram=' + ram + '&ssd=' + ssd + '&screenSize=' + screenSize + '&sortBy=' + sortBy + '&sortOrder=' + sortOrder + '&minPrice=' + minPrice + '&maxPrice=' + maxPrice;
    let response = await fetch(`${api}`);
    let data = await response.json()
    let allLaptop = document.querySelector('.all-laptop');
    allLaptop.innerHTML = "";
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
}

async function buildFilter(){
    let option1 = document.querySelector('#option1');
    let option2 = document.querySelector('#option2');
    let option3 = document.querySelector('#option3');
    let option4 = document.querySelector('#option4');
    let option5 = document.querySelector('#option5');
    let option6 = document.querySelector('#option6');
    let option7 = document.querySelector('#option7');

    let choices1 = option1.querySelectorAll('.choice');
    for(let i = 0; i < choices1.length; i++){
       choices1[i].addEventListener('click', async function(){
            if(i == 0){
                localStorage.setItem('brand', 'Acer');
                await getDaTaFilter();
            }
            if(i == 1){
                localStorage.setItem('brand', 'Asus');
                await getDaTaFilter();
            }
            if(i == 2){
                localStorage.setItem('brand', 'Dell');
                await getDaTaFilter();
            }
            if(i == 3){
                localStorage.setItem('brand', 'HP');
                await getDaTaFilter();
            }
            if(i == 4){
                localStorage.setItem('brand', 'Lenovo');
                await getDaTaFilter();
            }
            if(i == 5){
                localStorage.setItem('brand', 'MSI');
                await getDaTaFilter();
            }
       })
    }

    let choices2 = option2.querySelectorAll('.choice');
    for(let i = 0; i < choices2.length; i++){
        choices2[i].addEventListener('click', async function(){
            if(i == 0){
                localStorage.setItem('minPrice', '0');
                localStorage.setItem('maxPrice', '10000000');
                await getDaTaFilter();
            }
            if(i == 1){
                localStorage.setItem('minPrice', '10000000');
                localStorage.setItem('maxPrice', '20000000');
                await getDaTaFilter();
            }
            if(i == 2){
                localStorage.setItem('minPrice', '20000000');
                localStorage.setItem('maxPrice', '30000000');
                await getDaTaFilter();
            }
            if(i == 3){
                localStorage.setItem('minPrice', '30000000');
                localStorage.setItem('maxPrice', '40000000');
                await getDaTaFilter();
            }
            if(i == 4){
                localStorage.setItem('minPrice', '40000000');
                localStorage.setItem('maxPrice', '50000000');
                await getDaTaFilter();
            }
            if(i == 5){
                localStorage.setItem('minPrice', '50000000');
                localStorage.setItem('maxPrice', '0');
                await getDaTaFilter();
            }
        })
    }

    let choices3 = option3.querySelectorAll('.choice');
    for(let i = 0; i < choices3.length; i++){
        choices3[i].addEventListener('click', async function(){
            if(i == 0){
                localStorage.setItem('cpu', 'Core-i3');
                await getDaTaFilter();
            }
            if(i == 1){
                localStorage.setItem('cpu', 'Core-i5');
                await getDaTaFilter();
            }
            if(i == 2){
                localStorage.setItem('cpu', 'Core-i7');
                await getDaTaFilter();
            }
            if(i == 3){
                localStorage.setItem('cpu', 'Core-i9');
                await getDaTaFilter();
            }
            if(i == 4){
                localStorage.setItem('cpu', 'Ultra-5');
                await getDaTaFilter();
            }
            if(i == 5){
                localStorage.setItem('cpu', 'Ultra-7');
                await getDaTaFilter();
            }
            if(i == 6){
                localStorage.setItem('cpu', 'Ryzen-5');
                await getDaTaFilter();
            }
            if(i == 7){
                localStorage.setItem('cpu', 'Ryzen-7');
                await getDaTaFilter();
            }
            if(i == 8){
                localStorage.setItem('cpu', 'Ryzen-9');
                await getDaTaFilter();
            }
        })
    }
    let choices4 = option4.querySelectorAll('.choice');
    for(let i = 0; i < choices4.length; i++){
        choices3[i].addEventListener('click', async function(){
            if(i == 0){
                localStorage.setItem('vga', 'RTX-3050');
                await getDaTaFilter();
            }
            if(i == 1){
                localStorage.setItem('vga', 'RTX-3050Ti');
                await getDaTaFilter();
            }
            if(i == 2){
                localStorage.setItem('vga', 'RTX-3060');
                await getDaTaFilter();
            }
            if(i == 3){
                localStorage.setItem('vga', 'RTX-3070Ti');
                await getDaTaFilter();
            }
            if(i == 4){
                localStorage.setItem('vga', 'RTX-4050');
                await getDaTaFilter();
            }
            if(i == 5){
                localStorage.setItem('vga', 'RTX-4060');
                await getDaTaFilter();
            }
            if(i == 6){
                localStorage.setItem('vga', 'RTX-4070');
                await getDaTaFilter();
            }
            if(i == 7){
                localStorage.setItem('vga', 'Irix-Xe');
                await getDaTaFilter();
            }
            if(i == 8){
                localStorage.setItem('vga', 'UHD');
                await getDaTaFilter();
            }
        })
    }
    let choices5 = option5.querySelectorAll('.choice');
    for(let i = 0; i < choices5.length; i++){
        choices5[i].addEventListener('click', async function(){
            if(i == 0){
                localStorage.setItem('ram', '4GB');
                await getDaTaFilter();
            }
            if(i == 1){
                localStorage.setItem('ram', '8GB');
                await getDaTaFilter();
            }
            if(i == 2){
                localStorage.setItem('ram', '12GB');
                await getDaTaFilter();
            }
            if(i == 3){
                localStorage.setItem('ram', '16GB');
                await getDaTaFilter();
            }
            if(i == 4){
                localStorage.setItem('ram', '32GB');
                await getDaTaFilter();
            }
        })
    }
    let choices6 = option6.querySelectorAll('.choice');
    for(let i = 0; i < choices6.length; i++){
        if(i == 0){
            localStorage.setItem('ssd', '256GB');
            await getDaTaFilter();
        }
        if(i == 1){
            localStorage.setItem('ssd', '512GB');
            await getDaTaFilter();
        }
        if(i == 2){
            localStorage.setItem('ssd', '1T');
            await getDaTaFilter();
        }
    }
    let choices7 = option7.querySelectorAll('.choice');
    for(let i = 0; i < choices7.length; i++){
        if(i == 0){
            localStorage.setItem('screenSize', '14');
            await getDaTaFilter();
        }
        if(i == 1){
            localStorage.setItem('screenSize', '15');
            await getDaTaFilter();
        }
        if(i == 2){
            localStorage.setItem('screenSize', '16');
            await getDaTaFilter();
        }
    }

    let sort = document.querySelector('.sort');
    let options = sort.querySelectorAll('.option');
    options.forEach(function(element){
        element.addEventListener('click', async function(params){
            let value = element.value;
            let tmp = value.split(" ");
            localStorage.setItem('sortBy', tmp[0]);
            localStorage.setItem('sortOrder', tmp[1]);
            await getDaTaFilter();
        })
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

async function reset(){
    localStorage.setItem('brand', null);
    localStorage.setItem('state', null);
    localStorage.setItem('cpu', null);
    localStorage.setItem('vga', null);
    localStorage.setItem('ram', null);
    localStorage.setItem('ssd', null);
    localStorage.setItem('screenSize', null);
    localStorage.setItem('minPrice', null);
    localStorage.setItem('maxPrice', null);
    localStorage.setItem('sortBy', null);
    localStorage.setItem('sortOrder', null);
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
    await reset();
    await getDaTaFilter();
    selectProduct();
} 

laptoptheomucMain();