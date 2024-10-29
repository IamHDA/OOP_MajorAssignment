// hover vao product

var product = document.querySelectorAll('.product__container');

localStorage.setItem("id__product", 1);

product.forEach(function(element){
    element.children[1].style.transition = "0.3s";
    element.children[1].addEventListener('mouseover', function(){
        element.children[1].style.transform = "translateY(-10px)";
    })
    element.children[1].addEventListener('mouseout', function(){
        element.children[1].style.transform = "translateY(0)";
    })
    
    element.children[2].addEventListener('mouseover', function(){
        element.children[1].style.transform = "translateY(-10px)";
    })
    element.children[2].addEventListener('mouseout', function(){
        element.children[1].style.transform = "translateY(0)";
    })  
})