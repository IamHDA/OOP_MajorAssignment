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

// buildSearchProduct
async function buildSearchProduct(dataResponse){
    let allLaptop = document.querySelector('.all-laptop');
    for(let i = 0; i < dataResponse.length; i++){
        var idProduct = '<div class="id__product">' + dataResponse[i].id + '</div>';
        var imgProduct = '<a href="product.html" class="produc__img">'+ '<img src="' + dataResponse[i].images[0].filePath + '.jpg' + '" alt="">'+ '</a>';
        var nameProduct = '<a href="product.html" class="product__name">' + dataResponse[i].name + '( ' + dataResponse[i].specification.cpu + ', ' + dataResponse[i].specification.graphicsCard + ', ' + dataResponse[i].specification.ram + ', ' + dataResponse[i].specification.rom +', '+ dataResponse[i].specification.screen + ' )' + '</a>';
        let basePrice = dataResponse[i].price.toString();
        basePrice = daucham(basePrice);
        let price = dataResponse[i].price * (100 - dataResponse[i].sale) / 100;
        price = lamtron(price);
        price = price.toString();
        price = daucham(price);
        var productPrice = '<div class="product__price">' + price + ' đ' + ' </div>'; 
        var productBasePrice = '<div class="product__base__price">' + '<h1>' + basePrice + ' đ' + '</h1>' + '<h2> (Tiết kiệm ' + dataResponse[i].sale + '%)</h2>' + '</div>';
        var cart = '<div class="product__cart"> <i class="fa-solid fa-cart-shopping"></i> </div>'
        var laptopContainer = '<div class="product__container">' + idProduct + imgProduct + nameProduct + productPrice +productBasePrice + cart + '</div>';
        allLaptop.innerHTML += laptopContainer;
    }
}

async function searchProduct(){
    try{
        let keyword = localStorage.getItem('valueSearch');
        const response = await fetch(`http://localhost:8080/laptop/search?keyword=${keyword}`)
        const dataResponse =  await response.json();

        await buildSearchProduct(dataResponse);
    }
    catch (error) {
        console.error('Error fetching data:', error);
    }
}

//buildSelectCategoryProduct
async function buildSelectCategoryProduct(data) {
    let allLaptop = document.querySelector('.all-laptop');
    for(let i = 0; i < data.length; i++){
        var idProduct = '<div class="id__product">' + data[i].id + '</div>';
        var imgProduct = '<a href="product.html" class="produc__img">'+ '<img src="' + data[i].images[0].filePath +  '" alt="">'+ '</a>';
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
        var laptopContainer = '<div class="product__container">' + idProduct + imgProduct + nameProduct + productPrice +productBasePrice + cart + '</div>';
        allLaptop.innerHTML += laptopContainer;
    }
}

async function selectCategoryProduct(){
    let branch = localStorage.getItem('branch');
    let state = localStorage.getItem('state');
    let api = 'http://localhost:8080/collections/filter?category=' + branch + '&brand=&cpu&vga&ram&ssd&screenSize&state=' + state + '&sortBy&sortOrder&minPrice=0&maxPrice=0';    

    try{
        const response = await fetch(`${api}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }       
        })

        data = await response.json();
        await buildSelectCategoryProduct(data);
    }
    catch (error) {
        console.error('Error fetching data:', error);
    }
}

// main
async function mainLapTopTheoMuc(){
    
    if(localStorage.getItem('action') === "search"){
        await searchProduct();
    }
    
    if(localStorage.getItem('action') === "selectionCategory"){
        await selectCategoryProduct();
    }
    await addProductToCart();
    selectProduct();
}

mainLapTopTheoMuc();
