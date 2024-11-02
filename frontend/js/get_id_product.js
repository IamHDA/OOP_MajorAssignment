var productContainer = document.querySelectorAll('.product__container');

productContainer.forEach(function(element){
    var productImg = element.querySelector('.product__img');
    var productName = element.querySelector('.product__name');
    var productId = element.querySelector(".id__product")
    productImg.addEventListener('click', function(){
        localStorage.setItem('id__product', productId.innerHTML);
    });
    productName.addEventListener('click', function(){
        localStorage.setItem('id__product', productId.innerHTML);
    });
})