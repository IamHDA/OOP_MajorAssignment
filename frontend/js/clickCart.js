import checkAccessTokenIsvalid from "./accessToken.js";

function clickCart(){
    let cart = document.querySelector('.cart');
    cart.addEventListener('click', function(){
        let accessToken = localStorage.getItem('accessToken');
        if(accessToken === null){
            alert("Bạn cần đăng nhập để xem giỏ hàng!");
        }
        else{
           window.location('cart_detail.html');
        }
    })
}

clickCart();