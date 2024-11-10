import checkAccessTokenIsvalid from "./accessToken.js";

async function getDaTa(){
    function lamtron(num) {
        return Math.round(num / 100000) * 100000;
    }
    
    function daucham(num){
        let tmp = "";
        let mark = 0;
        for(let i = num.length - 1; i >= 0; i--){
            mark += 1;
            tmp = num[i] + tmp;
            if(mark == 3 && i != 0){
                tmp = "." + tmp;
                mark = 0
            }
        }
        return tmp;
    }

    let id = localStorage.getItem('id__product'); 

    fetch(`http://localhost:8080/laptop/api/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    })
    .then(response => {
        return response.json();
    })
    .then(response => {
        let productName = document.querySelector('.product__name');
        let productImgMain = document.querySelector('.product__img--main');
        let productImgList = document.querySelector('.product__img--list');
        let productSpecification = document.querySelector('.product__specifications');
        let ulProductSpecification = productSpecification.getElementsByTagName('ul')[0];
        let productPrice = document.querySelector('.product__price');
        let productBasePrice = document.querySelector('.product__base__price');
        let productSale = document.querySelector('.product__sale');

        productName.innerHTML += response.name;

        for(let i = 0; i < response.images.length; i++){
            productImgMain.innerHTML += '<img src= "' + response.images[i].filePath + '"alt=""></img>';
            productImgList.innerHTML += '<img src= "' + response.images[i].filePath + '"alt=""></img>';
        }

        ulProductSpecification.innerHTML += '<li>CPU : '  + response.specification.cpu + '</li>';
        ulProductSpecification.innerHTML += '<li>RAM : '  + response.specification.ram + '</li>';
        ulProductSpecification.innerHTML += '<li>ROM : '  + response.specification.rom + '</li>';
        ulProductSpecification.innerHTML += '<li>VGA : '  + response.specification.graphicsCard + '</li>';
        ulProductSpecification.innerHTML += '<li>Màn hình : ' +  response.specification.screen+ '</li>';
        ulProductSpecification.innerHTML += '<li>Pin :' + response.specification.battery + '</li>';
        ulProductSpecification.innerHTML += '<li>Trọng lượng : ' + response.specification.weight + '</li>';
        ulProductSpecification.innerHTML += '<li>Webcam : ' +  response.specification.webcam + '</li>';
        ulProductSpecification.innerHTML += '<li>Hệ điều hành: ' +  response.specification.operatingSystem + '</li>';
        ulProductSpecification.innerHTML += '<li>Cổng kết nối: <br>' + '<div class = "tab">' + response.specification.connectionPort.replace(/\n/g, "<br>") + '</div>' + '</li>';

        let basePrice = response.price.toString();
        basePrice = daucham(basePrice);

        productSale.innerHTML += 'Tiết kiệm ' + response.sale + '%';
        productBasePrice.innerHTML += basePrice + ' đ'; 
        let price = response.price * (100 - response.sale) / 100;
        price = lamtron(price);
        price = price.toString();
        price = daucham(price);
        productPrice.innerHTML += price + ' đ';   

        const listImg = document.querySelectorAll('.product__img--list img');
        const mainImg = document.querySelectorAll('.product__img--main img');
        let indexImg = 0;
        let positionXImg = 0
        listImg[0].style.borderWidth = "3.5px";
        mainImg.forEach(function(element){
            element.style.transition = "0.8s";
        })


        for(let i = 0; i < listImg.length; i++){
            listImg[i].addEventListener('click', function(){
                for(let j = 0
                    ; j < listImg.length; j++){
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

        var commentContainer = document.querySelector('.comment__container');
        var commentList = response.comments;
        commentList.forEach(function(element){

            var name = '<div class="comment__user__name">' + element.userName + '</div>';
            var partition = '<div class="infor_and_time__partition"> | </div>';
            if(element.updateAt === null){
                var time = '<div class="comment__time">' + element.postAt + '</div>';
            }
            else{
                var time = '<div class="comment__time">' + 'Đã chỉnh sửa' + element.updateAt + '</div>';
            }
            var update = '<div class="comment__time">' + '     | Chỉnh sửa' + '</div>';
            var inforAndTime = '<div class="comment__infor_and_time">' + name + partition + time + update + '</div>';
            var content = '<div class="comment__content">' + element.content + '</div>';
            commentContainer.innerHTML += inforAndTime + content;
        })
    })
}

async function postComment() {
    let productComment = document.querySelector('.product__comment');
    let button = productComment.querySelector('.button__submit_comment');
    button.addEventListener('click', async function(){
        let accessToken = localStorage.getItem('accessToken');
        if(accessToken === null){
            alert("Bạn cần phải đăng nhập để bình luận!")
        }
        else{
            checkAccessTokenIsvalid();
            accessToken = localStorage.getItem('accessToken');
            let comment = productComment.querySelector('.inputContent').value;
            let data = {
                content: comment
            };
            try{
                let idProduct = localStorage.getItem('id__product');
                let response = await fetch(`http://localhost:8080/comment/post?laptopId=${idProduct}`, {
                    method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${accessToken}`
                        },
                        body: JSON.stringify(data)
                });
                response = await response.text();
                if(response == "Comment posted successfully"){
                    location.reload();
                }
            }
            catch(error){
                console.log(error);
                alert("Đã có lỗi xảy ra!");
            }
        }
    });
}

async function productDetailMain(){
    await getDaTa();
    await postComment();
}

productDetailMain();