let option2 = document.querySelector('.option2');
let subOption = option2.querySelector('.sub-option');

if(localStorage.getItem('hidden') == "true"){
    subOption.style.display = 'flex';
}

if(localStorage.getItem('hidden') == "false"){
    subOption.style.display = 'none';
}

option2.addEventListener('click', function(){
    if(localStorage.getItem('hidden') == "true"){
        localStorage.getItem('hidden', 'false');
        subOption.style.display = 'false';
    }
    if(localStorage.getItem('hidden') == "false"){
        localStorage.getItem('hidden', 'true');
        subOption.style.display = 'none';
    }
})