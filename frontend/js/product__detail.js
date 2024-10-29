const listImg = document.querySelectorAll('.product__img--list img');
const mainImg = document.querySelectorAll('.product__img--main img');
console.log(listImg.length);
console.log(mainImg.length)
let indexImg = 0;
let positionXImg = 0
listImg[0].style.borderWidth = "3.5px";

mainImg.forEach(function(element){
    element.style.transition = "0.8s";
})
for(let i = 0; i < listImg.length; i++){
    listImg[i].addEventListener('click', function(){
        for(let j = 0; j < listImg.length; j++){
            if(j != i){
                listImg[j].style.borderWidth = "2px";
            }
            if(j == i){
                listImg[j].style.borderWidth = "3.5px";
            }
        }
        if(i > indexImg){
            positionXImg -= 370 * (i - indexImg);
            indexImg = i;
            mainImg.forEach(function(element){
                element.style.transform = `translateX(${positionXImg}px)`;
            })
        }
        if(i < indexImg){
            positionXImg += 370 * (indexImg - i);
            indexImg = i;
            mainImg.forEach(function(element){
                element.style.transform = `translateX(${positionXImg}px)`;
            })
        }
    })
}
