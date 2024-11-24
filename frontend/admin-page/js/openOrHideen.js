let option2 = document.querySelector('.option2');
let subOption = option2.querySelector('.sub-option');

if(localStorage.getItem('hidden') == "true"){
    subOption.style.display = 'flex';
    subOption.style.marginTop = "10px";
    option2.style.paddingBottom = "0px";
}

if(localStorage.getItem('hidden') == "false"){
    subOption.style.display = 'none';
    option2.style.paddingBottom = "10px";
}

option2.addEventListener('click', function(){
    if(localStorage.getItem('hidden') == "true"){
        localStorage.setItem('hidden', 'false');
        subOption.style.display = 'flex';
        subOption.style.marginTop = "10px";
        option2.style.paddingBottom = "0px";
    }else if(localStorage.getItem('hidden') == "false"){
        localStorage.setItem('hidden', 'true');
        subOption.style.display = 'none';
        option2.style.paddingBottom = "10px";
    }
})