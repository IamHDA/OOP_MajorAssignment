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


function addProductToCart(){
    let productCotainer = document.querySelectorAll('.product__container');
    productCotainer.forEach(function(element){
        let butonAddToCart = element.querySelector('.product__cart');
        let idProduct = element.querySelector('.id__product').textContent;
        butonAddToCart.addEventListener('click', function(){
            fetchAddProductToCart(idProduct);
            if (fetchAddProductToCart(idProduct) == 200){
                alert("Them thanh cong");
            }
            else{
                alert("That bai");
            }
        })
    })
}

addProductToCart();



