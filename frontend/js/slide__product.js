function luotSlide(){  
    var productSilde = document.querySelectorAll('.product__slide');
    let isDragging = false;
    let lastX = 0;


    productSilde.forEach(function(element){
        element.addEventListener('mousedown', function(event){
            isDragging = true;
            lastX = event.clientX;
            element.style.cursor = 'grab';
            event.stopPropagation();
            event.preventDefault();
            return
        })
        element.addEventListener('mouseup', function(event){
            isDragging = false;
            element.style.cursor = 'default';
            event.stopPropagation();
        })
        element.addEventListener('mouseleave', function(){
            isDragging = false;
            element.style.cursor = 'default';
        })
        element.addEventListener('mousemove', function(event){
            if (isDragging) {
                const deltaX = Math.ceil((event.clientX - lastX)/5) * 220 ;
                lastX = event.clientX;  
                let productContainers = element.querySelectorAll('.product__container');
                productContainers.forEach(function(productContainer){
                    productContainer.style.transition = "1s";
                    productContainer.style.transform = `translateX(${deltaX}px)`;
                    })
            }
            else{
                return 0
            }
        })
    })
}

function fetchCatalog() {
    function lamtron(num) {
        return Math.round(num / 100000) * 100000;
    }
    
    function daucham(num) {
        let tmp = "";
        let mark = 0;
        for (let i = num.length; i >= 0; i--) {
            mark += 1;
            tmp += num[i] + tmp;
            if (num == 3 && i > 0) {
                tmp += "." + tmp;
                mark = 0;
            }
        }
        return tmp;
    }
    
    fetch('http://localhost:8080/collections/laptops-category/Hoc-tap-van-phong', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    })
    .then(response => {
        return response.json()
    })
    .then(data => {
        let productSlide = document.querySelector('.product__slide');
        for (let i = 0; i < data.length; i++) {
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
            var laptopContainer = '<div class="product__container">' + idProduct + imgProduct + nameProduct + productPrice +productBasePrice + cart + '</div>';
            productSlide.innerHTML += laptopContainer;
        }
    })
    .catch(error => console.log(error));
}

fetchCatalog();


luotSlide();

