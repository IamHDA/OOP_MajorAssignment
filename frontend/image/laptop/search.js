
function searchProduct(){
    let valueSearch = document.getElementById('search').value;
    fetch('http://localhost:8080/product')
    .then(response => response.json())
    .then(data => {
        let productSearch = data.filter(value => {
            return value.name.includes(valueSearch)
        })
        document.getElementById('product').innerHTML = '';
        let product = '';
        productSearch.map(value => {
            return product += `<div>${value.id}. ${value.name}<\div>`
        })
        document.getElementById('product').innerHTML = product;
    })
    .catch(error => console.log(error));
}