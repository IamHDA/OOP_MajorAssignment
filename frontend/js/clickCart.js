function clickCart(){
    let cart = document.querySelector(".cart");
    const accessToken = localStorage.getItem('accessToken');
    cart.addEventListener('click', function(){
        if(accessToken === null){
            alert("Bạn cần đăng nhập để xem giỏ hàng");
        }
        else{
            window.localStorage.href= 'cart_detail.html';
        }
    })
}

clickCart();