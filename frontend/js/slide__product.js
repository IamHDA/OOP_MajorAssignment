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


luotSlide();

