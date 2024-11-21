import checkAccessTokenIsvalid from "./accessToken.js";

function getListCategory(strListCategory){
    let res = [];
    strListCategory = strListCategory.trim();
    let index = 0;
    let tmp = "";
    let check = 1;
    while(true){
        if(strListCategory[index] == " "){
            while(strListCategory[index] == " "){
                index += 1;
            }
            if(check == 0){
                check = 1;
            }
            else{
                tmp += " ";
            }
        }
        else if(strListCategory[index] == ","){
            index += 1;
            res.push(tmp);
            tmp ="";
            check = 0;
        }
        else{
            tmp += strListCategory[index];
            index += 1;
        }
        if(index == strListCategory.length){
            res.push(tmp);
            break; 
        }
    }
    return res;
}

async function getAllCategory() {
    let allCategory = document.querySelector('.all-category');
    try{
        await checkAccessTokenIsvalid();
        let accessToken = localStorage.getItem('accessToken');
        let response = await fetch('http://192.168.0.103:8080/collections/admin/getAllCategories',{
            method: 'GET',
            headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`
            },
        });
        response = await response.json();
        for(let i = 0; i < response.length; i++){
            allCategory.innerHTML += '<p>' + response[i] + '</p>';
        }
    }
    catch(error){
        alert("Đã xảy ra lỗi! Vui lòng thử lại.");
        console.log("Loi xay ra addCategory: " + error);
    } 
}

function addCategory(){
    let addCategory = document.querySelector('.add-category');
    let buttonAdd = addCategory.querySelector('.submit');
    buttonAdd.addEventListener('click', async function(){
        console.log("adfadf");
        let strListCategory = addCategory.querySelector('.input').value;
        let listCategory = getListCategory(strListCategory);
        let data = {
            name: []
        };
        for(let i = 0; i < listCategory.length; i++){
           data.name.push(listCategory[i]);
        };
        try{
            await checkAccessTokenIsvalid();
            let accessToken = localStorage.getItem('accessToken');
            let response = await fetch('http://192.168.0.103:8080/collections/admin/add',{
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`
                },
                body: JSON.stringify(data)
            });
            response = await response.json();
            alert("Thêm category thành công!");
            window.location.reload();
        }
        catch(error){
            alert("Đã xảy ra lỗi! Vui lòng thử lại.");
            console.log("Loi xay ra addCategory: " + error);
        }
    })
}

function deleteCategory(){
    let addCategory = document.querySelector('.delete-category');
    let buttonAdd = addCategory.querySelector('.submit');
    buttonAdd.addEventListener('click', async function(){
        console.log("adfadf");
        let strListCategory = addCategory.querySelector('.input').value;
        let listCategory = getListCategory(strListCategory);
        let data = {
            name: []
        };
        for(let i = 0; i < listCategory.length; i++){
           data.name.push(listCategory[i]);
        };
        try{
            await checkAccessTokenIsvalid();
            let accessToken = localStorage.getItem('accessToken');
            let response = await fetch('http://192.168.0.103:8080/collections/admin/delete',{
                method: 'DELETE',
                headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`
                },
                body: JSON.stringify(data)
            });
            response = await response.json();
            alert("Xóa category thành công!");
            window.location.reload();
        }
        catch(error){
            alert("Đã xảy ra lỗi! Vui lòng thử lại.");
            console.log("Loi xay ra deleteCategory: " + error);
        }
    })
}

async function mainCategory(){
    await getAllCategory();
    deleteCategory();
    addCategory();
}

mainCategory();