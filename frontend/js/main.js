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

let danhMucSanPhamButton = document.querySelector('.danhmucsanpham');

danhMucSanPhamButton.addEventListener("click", function(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Cuộn mượt mà
    });
})

let category = document.querySelector('.category');

for(let i = 0; i < category.children.length; i++){
    category.children[i].addEventListener('mouseover', function(){
        category.children[i].style.color = '#0365ff';
        category.children[i].style.backgroundColor = 'rgb(186,222,254)';
    })
    category.children[i].addEventListener('mouseout', function(){
        category.children[i].style.color = 'black';
        category.children[i].style.backgroundColor = 'white';
    })
}

let hocTapVanPhongCoBanCategory = document.querySelector('.category__hoctapvanphongcoban');

hocTapVanPhongCoBanCategory.addEventListener('click', function(){
    window.scrollTo({
        top: 1500,
        behavior: 'smooth' // Cuộn mượt mà
    });
})


 