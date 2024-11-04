async function fetchAddProductToCart(idProduct){
    try {
        const data = {
           "quantity" : 1,
           "laptop":{
                "id": idProduct
           }
        }
        const response = await fetch('http://localhost:8080/cart-detail/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`
            },
            body: data 
        });

        response = await response.json();
        return response;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}


async function addProductToCart(){
    let productContainer = document.querySelectorAll('.product__container');
    console.log("DSFDSFDSFDSFSDFDSFDSFSF");

    productContainer.forEach(function(element){
        console.log(element);
        let buttonAddToCart = element.querySelector('.product__cart');
        let idProduct = element.querySelector('.id__product').textContent;

        buttonAddToCart.addEventListener('click', async function(){
            try {
                const response = await fetchAddProductToCart(idProduct);
                if (response.status === 200) {
                    alert("Thêm thành công");
                } else {
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

