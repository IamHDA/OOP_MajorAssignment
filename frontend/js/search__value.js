let search = document.querySelector('.search');
let inputSearch = document.querySelector('.input__search');
let buttonSearch = document.querySelector('.button__search');


buttonSearch.addEventListener('click', function(){
    const valueSearch = inputSearch.value;
    console.log(valueSearch);
    console.log("ok");
    localStorage.setItem('valueSearch', valueSearch);
    localStorage.setItem('action', "search");
    window.location.href = 'laptoptheomuc.html';
});
