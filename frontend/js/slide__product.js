// function luotSlide(){  
//     var productSilde = document.querySelectorAll('.product__slide');
//     let isDragging = false;
//     let lastX = 0;


//     productSilde.forEach(function(element){
//         element.addEventListener('mousedown', function(event){
//             isDragging = true;
//             lastX = event.clientX;
//             element.style.cursor = 'grab';
//             event.stopPropagation();
//             event.preventDefault();
//             return
//         })
//         element.addEventListener('mouseup', function(event){
//             isDragging = false;
//             element.style.cursor = 'default';
//             event.stopPropagation();
//         })
//         element.addEventListener('mouseleave', function(){
//             isDragging = false;
//             element.style.cursor = 'default';
//         })
//         element.addEventListener('mousemove', function(event){
//             if (isDragging) {
//                 const deltaX = Math.ceil((event.clientX - lastX)/5) * 220 ;
//                 lastX = event.clientX;  
//                 let productContainers = element.querySelectorAll('.product__container');
//                 productContainers.forEach(function(productContainer){
//                     productContainer.style.transition = "1s";
//                     productContainer.style.transform = `translateX(${deltaX}px)`;
//                     })
//             }
//             else{
//                 return 0
//             }
//         })
//     })
// }

// function fetchCatalog1() {
//     function lamtron(num) {
//         return Math.round(num / 100000) * 100000;
//     }
    
//     function daucham(num) {
//         let tmp = "";
//         let mark = 0;
//         for(let i = num.length - 1; i >= 0; i--){
//             mark += 1;
//             tmp = num[i] + tmp;
//             if(mark == 3 && i != 0){
//                 tmp = "." + tmp;
//                 mark = 0
//             }
//         }
//         return tmp;
//     }
    
//     fetch('http://localhost:8080/collections/laptops-category/Hoc-tap-van-phong', {
//         method: 'GET',
//         headers: {
//             'Content-Type': 'application/json',
//         }
//     })
//     .then(response => {
//         return response.json()
//     })
//     .then(data => {
//         let productSlide = document.querySelector('.product__slide__hoctapvanphong');
//         for (let i = 0; i < data.length; i++) {
//             var idProduct = '<div class="id__product">' + data[i].id + '</div>';
//             var imgProduct = '<a href="product.html" class="product__img">'+ '<img src="' + data[i].images[0].filePath + '.jpg' + '" alt="">'+ '</a>';
//             var nameProduct = '<a href="product.html" class="product__name">' + data[i].name + ' ' + data[i].specification.cpu + ' ' + data[i].specification.ram + ' ' + data[i].specification.graphicsCard + '</a>';
//             let basePrice = data[i].price.toString();
//             basePrice = daucham(basePrice);
//             let price = data[i].price * (100 - data[i].sale) / 100;
//             price = lamtron(price);
//             price = price.toString();
//             price = daucham(price);
//             var productPrice = '<div class="product__price">' + price + ' đ' + ' </div>'; 
//             var productBasePrice = '<div class="product__base__price">' + '<h1>' + basePrice + ' đ' + '</h1>' + '<h2> (Tiết kiệm ' + data[i].sale + '%)</h2>' + '</div>';
//             var cart = '<div class="product__cart"> <i class="fa-solid fa-cart-shopping"></i> </div>'
//             var laptopContainer = '<div class="product__container">' + idProduct + imgProduct + nameProduct + productPrice +productBasePrice + cart + '</div>';
//             productSlide.innerHTML += laptopContainer;
//         }
//     })
//     .then(data => {
//         var allLaptop = document.querySelector('.all-laptop');
//         var childrenAllLapTop = Array.from(allLaptop.children);
        
//         childrenAllLapTop.forEach(function(element){
//             var productImg = element.getElementsByTagName('img')[0];
//             var productName = element.querySelector('.product__name');
//             var productId = element.querySelector(".id__product");

//             productImg.addEventListener('click', function(){
//                 localStorage.setItem('id__product', productId.textContent);
//             });
//             productName.addEventListener('click', function(){
//                 localStorage.setItem('id__product', productId.textContent);
//             });
//         })
//     })
//     .catch(error => console.log(error));
// }

// function fetchCatalog2() {
//     function lamtron(num) {
//         return Math.round(num / 100000) * 100000;
//     }
    
//     function daucham(num) {
//         let tmp = "";
//         let mark = 0;
//         for(let i = num.length - 1; i >= 0; i--){
//             mark += 1;
//             tmp = num[i] + tmp;
//             if(mark == 3 && i != 0){
//                 tmp = "." + tmp;
//                 mark = 0
//             }
//         }
//         return tmp;
//     }
    
//     fetch('http://localhost:8080/collections/laptops-category/Laptop-Gaming', {
//         method: 'GET',
//         headers: {
//             'Content-Type': 'application/json',
//         }
//     })
//     .then(response => {
//         return response.json()
//     })
//     .then(data => {
//         let productSlide = document.querySelector('.product__slide__hoctapvanphong');
//         for (let i = 0; i < data.length; i++) {
//             var idProduct = '<div class="id__product">' + data[i].id + '</div>';
//             var imgProduct = '<a href="product.html" class="product__img">'+ '<img src="' + data[i].images[0].filePath + '.jpg' + '" alt="">'+ '</a>';
//             var nameProduct = '<a href="product.html" class="product__name">' + data[i].name + ' ' + data[i].specification.cpu + ' ' + data[i].specification.ram + ' ' + data[i].specification.graphicsCard + '</a>';
//             let basePrice = data[i].price.toString();
//             basePrice = daucham(basePrice);
//             let price = data[i].price * (100 - data[i].sale) / 100;
//             price = lamtron(price);
//             price = price.toString();
//             price = daucham(price);
//             var productPrice = '<div class="product__price">' + price + ' đ' + ' </div>'; 
//             var productBasePrice = '<div class="product__base__price">' + '<h1>' + basePrice + ' đ' + '</h1>' + '<h2> (Tiết kiệm ' + data[i].sale + '%)</h2>' + '</div>';
//             var cart = '<div class="product__cart"> <i class="fa-solid fa-cart-shopping"></i> </div>'
//             var laptopContainer = '<div class="product__container">' + idProduct + imgProduct + nameProduct + productPrice +productBasePrice + cart + '</div>';
//             productSlide.innerHTML += laptopContainer;
//         }
//     })
//     .then(data => {
//         var allLaptop = document.querySelector('.all-laptop');
//         var childrenAllLapTop = Array.from(allLaptop.children);
        
//         childrenAllLapTop.forEach(function(element){
//             var productImg = element.getElementsByTagName('img')[0];
//             var productName = element.querySelector('.product__name');
//             var productId = element.querySelector(".id__product");

//             productImg.addEventListener('click', function(){
//                 localStorage.setItem('id__product', productId.textContent);
//             });
//             productName.addEventListener('click', function(){
//                 localStorage.setItem('id__product', productId.textContent);
//             });
//         })
//     })
//     .catch(error => console.log(error));
// }

// function fetchCatalog4() {
//     function lamtron(num) {
//         return Math.round(num / 100000) * 100000;
//     }
    
//     function daucham(num) {
//         let tmp = "";
//         let mark = 0;
//         for(let i = num.length - 1; i >= 0; i--){
//             mark += 1;
//             tmp = num[i] + tmp;
//             if(mark == 3 && i != 0){
//                 tmp = "." + tmp;
//                 mark = 0
//             }
//         }
//         return tmp;
//     }
    
//     fetch('http://localhost:8080/collections/laptops-category/Mong-nhe-cao-cap', {
//         method: 'GET',
//         headers: {
//             'Content-Type': 'application/json',
//         }
//     })
//     .then(response => {
//         return response.json()
//     })
//     .then(data => {
//         let productSlide = document.querySelector('.product__slide__hoctapvanphong');
//         for (let i = 0; i < data.length; i++) {
//             var idProduct = '<div class="id__product">' + data[i].id + '</div>';
//             var imgProduct = '<a href="product.html" class="product__img">'+ '<img src="' + data[i].images[0].filePath + '.jpg' + '" alt="">'+ '</a>';
//             var nameProduct = '<a href="product.html" class="product__name">' + data[i].name + ' ' + data[i].specification.cpu + ' ' + data[i].specification.ram + ' ' + data[i].specification.graphicsCard + '</a>';
//             let basePrice = data[i].price.toString();
//             basePrice = daucham(basePrice);
//             let price = data[i].price * (100 - data[i].sale) / 100;
//             price = lamtron(price);
//             price = price.toString();
//             price = daucham(price);
//             var productPrice = '<div class="product__price">' + price + ' đ' + ' </div>'; 
//             var productBasePrice = '<div class="product__base__price">' + '<h1>' + basePrice + ' đ' + '</h1>' + '<h2> (Tiết kiệm ' + data[i].sale + '%)</h2>' + '</div>';
//             var cart = '<div class="product__cart"> <i class="fa-solid fa-cart-shopping"></i> </div>'
//             var laptopContainer = '<div class="product__container">' + idProduct + imgProduct + nameProduct + productPrice +productBasePrice + cart + '</div>';
//             productSlide.innerHTML += laptopContainer;
//         }
//     })
//     .then(data => {
//         var allLaptop = document.querySelector('.all-laptop');
//         var childrenAllLapTop = Array.from(allLaptop.children);
        
//         childrenAllLapTop.forEach(function(element){
//             var productImg = element.getElementsByTagName('img')[0];
//             var productName = element.querySelector('.product__name');
//             var productId = element.querySelector(".id__product");

//             productImg.addEventListener('click', function(){
//                 localStorage.setItem('id__product', productId.textContent);
//             });
//             productName.addEventListener('click', function(){
//                 localStorage.setItem('id__product', productId.textContent);
//             });
//         })
//     })
//     .catch(error => console.log(error));
// }

// function fetchCatalog3() {
//     function lamtron(num) {
//         return Math.round(num / 100000) * 100000;
//     }
    
//     function daucham(num) {
//         let tmp = "";
//         let mark = 0;
//         for(let i = num.length - 1; i >= 0; i--){
//             mark += 1;
//             tmp = num[i] + tmp;
//             if(mark == 3 && i != 0){
//                 tmp = "." + tmp;
//                 mark = 0
//             }
//         }
//         return tmp;
//     }
    
//     fetch('http://localhost:8080/collections/laptops-category/Do-hoa-hieu-nang-cao', {
//         method: 'GET',
//         headers: {
//             'Content-Type': 'application/json',
//         }
//     })
//     .then(response => {
//         return response.json()
//     })
//     .then(data => {
//         let productSlide = document.querySelector('.product__slide__hoctapvanphong');
//         for (let i = 0; i < data.length; i++) {
//             var idProduct = '<div class="id__product">' + data[i].id + '</div>';
//             var imgProduct = '<a href="product.html" class="product__img">'+ '<img src="' + data[i].images[0].filePath + '.jpg' + '" alt="">'+ '</a>';
//             var nameProduct = '<a href="product.html" class="product__name">' + data[i].name + ' ' + data[i].specification.cpu + ' ' + data[i].specification.ram + ' ' + data[i].specification.graphicsCard + '</a>';
//             let basePrice = data[i].price.toString();
//             basePrice = daucham(basePrice);
//             let price = data[i].price * (100 - data[i].sale) / 100;
//             price = lamtron(price);
//             price = price.toString();
//             price = daucham(price);
//             var productPrice = '<div class="product__price">' + price + ' đ' + ' </div>'; 
//             var productBasePrice = '<div class="product__base__price">' + '<h1>' + basePrice + ' đ' + '</h1>' + '<h2> (Tiết kiệm ' + data[i].sale + '%)</h2>' + '</div>';
//             var cart = '<div class="product__cart"> <i class="fa-solid fa-cart-shopping"></i> </div>'
//             var laptopContainer = '<div class="product__container">' + idProduct + imgProduct + nameProduct + productPrice +productBasePrice + cart + '</div>';
//             productSlide.innerHTML += laptopContainer;
//         }
//     })
//     .then(data => {
//         var allLaptop = document.querySelector('.all-laptop');
//         var childrenAllLapTop = Array.from(allLaptop.children);
        
//         childrenAllLapTop.forEach(function(element){
//             var productImg = element.getElementsByTagName('img')[0];
//             var productName = element.querySelector('.product__name');
//             var productId = element.querySelector(".id__product");

//             productImg.addEventListener('click', function(){
//                 localStorage.setItem('id__product', productId.textContent);
//             });
//             productName.addEventListener('click', function(){
//                 localStorage.setItem('id__product', productId.textContent);
//             });
//         })
//     })
//     .catch(error => console.log(error));
// }

// fetchCatalog1();

// luotSlide();

async function fetchCatalog(url) {
    function lamtron(num) {
        return Math.round(num / 100000) * 100000;
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

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const data = await response.json();

        let productSlide = document.querySelector('.all-laptop');
        data.forEach(item => {
            const idProduct = '<div class="id__product">' + item.id + '</div>';
            const imgProduct = '<a href="product.html" class="product__img">' + '<img src="' + item.images[0].filePath + '.jpg' + '" alt="">' + '</a>';
            const nameProduct = '<a href="product.html" class="product__name">' + item.name + ' ' + item.specification.cpu + ' ' + item.specification.ram + ' ' + item.specification.graphicsCard + '</a>';
            let basePrice = daucham(item.price.toString());
            let price = lamtron(item.price * (100 - item.sale) / 100).toString();
            price = daucham(price);
            const productPrice = '<div class="product__price">' + price + ' đ' + '</div>'; 
            const productBasePrice = '<div class="product__base__price">' + '<h1>' + basePrice + ' đ' + '</h1>' + '<h2> (Tiết kiệm ' + item.sale + '%)</h2>' + '</div>';
            const cart = '<div class="product__cart"> <i class="fa-solid fa-cart-shopping"></i> </div>';
            const laptopContainer = '<div class="product__container">' + idProduct + imgProduct + nameProduct + productPrice + productBasePrice + cart + '</div>';
            productSlide.innerHTML += laptopContainer;
        });

    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

function selectProduct(){
    var allLaptop = document.querySelector('.all-laptop');
    var childrenAllLapTop = Array.from(allLaptop.children);
    
    childrenAllLapTop.forEach(function(element){
        var productImg = element.getElementsByTagName('img')[0];
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

async function fetchAllCatalogs() {
    const urls = [
        'http://localhost:8080/collections/laptops-category/Hoc-tap-van-phong',
        'http://localhost:8080/collections/laptops-category/Laptop-Gaming',
        'http://localhost:8080/collections/laptops-category/Do-hoa-hieu-nang-cao',
        'http://localhost:8080/collections/laptops-category/Mong-nhe-cao-cap'
    ];

    for (const url of urls) {
        await fetchCatalog(url);
        selectProduct();
    }
}

fetchAllCatalogs();

// function luotSlide(){  
//     var productSilde = document.querySelectorAll('.product__slide');
//     let isDragging = false;
//     let lastX = 0;


//     productSilde.forEach(function(element){
//         element.addEventListener('mousedown', function(event){
//             isDragging = true;
//             lastX = event.clientX;
//             element.style.cursor = 'grab';
//             event.stopPropagation();
//             event.preventDefault();
//             return
//         })
//         element.addEventListener('mouseup', function(event){
//             isDragging = false;
//             element.style.cursor = 'default';
//             event.stopPropagation();
//         })
//         element.addEventListener('mouseleave', function(){
//             isDragging = false;
//             element.style.cursor = 'default';
//         })
//         element.addEventListener('mousemove', function(event){
//             if (isDragging) {
//                 const deltaX = Math.ceil((event.clientX - lastX)/5) * 220 ;
//                 lastX = event.clientX;  
//                 let productContainers = element.querySelectorAll('.product__container');
//                 productContainers.forEach(function(productContainer){
//                     productContainer.style.transition = "1s";
//                     productContainer.style.transform = `translateX(${deltaX}px)`;
//                     })
//             }
//             else{
//                 return 0;
//             }
//         })
//     })
// }

