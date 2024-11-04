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

        var slide;

        if(url === 'http://localhost:8080/collections/laptops-category/Hoc-tap-van-phong'){
            slide = document.querySelector('.hoctapvanphongcoban');
        }

        if(url === 'http://localhost:8080/collections/laptops-category/Laptop-Gaming'){
            slide = document.querySelector('.laptopgaming');
        }

        if(url ==='http://localhost:8080/collections/laptops-category/Do-hoa-hieu-nang-cao'){
            slide = document.querySelector('.laptopdohoa');
        }

        if(url === 'http://localhost:8080/collections/laptops-category/Mong-nhe-cao-cap'){
            slide = document.querySelector('.laptopmongnhe');
        }

        let productSlide = slide.querySelector('.all-laptop');
        data.forEach(item => {
            const idProduct = '<div class="id__product">' + item.id + '</div>';
            const imgProduct = '<a href="product.html" class="product__img">' + '<img src="' + item.images[0].filePath + '.jpg' + '" alt="">' + '</a>';
            const nameProduct = '<a href="product.html" class="product__name">' + item.name + ' ' + '(' + item.specification.cpu + ' ' + item.specification.ram + ' ' + item.specification.rom + ' ' + item.specification.graphicsCard + ' ' + item.specification.screen + ')' +'</a>';
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
    var AllLaptop = document.querySelectorAll('.all-laptop');
    AllLaptop.forEach(function(allLaptop){
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
    }
    selectProduct();

    async function fetchAddProductToCart(idProduct){
        try {
            const data = {
               "quantity" : 1,
               "laptop":{
                    "id": idProduct
               }
            };
            var accessToken = localStorage.getItem("accessToken");
            const response = await fetch('http://localhost:8080/cart-detail/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${accessToken}`
                },
                body: JSON.stringify(data)
            });
    
            return response;
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
    
    
    async function addProductToCart(){
        let productContainer = document.querySelectorAll('.product__container');
    
        productContainer.forEach(function(element){
            console.log(element);
            let buttonAddToCart = element.querySelector('.product__cart');
            let idProduct = element.querySelector('.id__product').textContent;
    
            buttonAddToCart.addEventListener('click', async function(){
                try {
                    const response = await fetchAddProductToCart(idProduct);
                    const responseData = await response.json();
                    console.log(responseData);
                    if (response.status === 200) {
                        alert("Thêm thành công");
                    } else if(response.status === 400 && responseData.message === "Laptop is already in cart"){
                        alert("Sản phẩm đã tồn tại trong giỏ hàng");
                    }else{
                        alert("Thất bại");
                    }
                } catch (error) {
                    console.error("Lỗi khi thêm sản phẩm vào giỏ hàng:", error);
                    alert("Có lỗi xảy ra");
                }
            });
        });
    }
    
    addProductToCart();
    
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
//                 return 0
//             }
//         })
//     })
// }

function selectProduct(){
    var AllLaptop = document.querySelectorAll('.all-laptop');
    AllLaptop.forEach(function(allLaptop){
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
    })
}

// luotSlide();