function selectFileImg(){
    let fileInput = document.querySelector('.file-input');
    let importedFiles = document.querySelector('.imported-files');
    fileInput.addEventListener('change', function(event){
        console.log(event.target.files);
        let file = event.target.files[0];
        console.log(file.name);
        importedFiles.innerHTML += '<p>' + file.name + '</p>';
    }); 
}

async function submitImg(){
    const formData = new FormData();
    let fileInput = document.querySelector('.file-input');
    for(const file of fileInput.files){
        formData.append("files", file);
    }
    try{
        await fetch(`http://localhost:8080//image/add`,{
            method: 'PUT',
            headers: {
            'Content-Type': 'application/json'
            },
            body: formData,
        });
    }
    catch(error){
        console.log("Da xay ra loi upload file anh:" + error);
    }
}

async function submitLaptop() {
    let name = document.querySelector('.name').value;
    let price = document.querySelector('.price').value;
    let state = document.querySelector('.state').value;
    let sale = document.querySelector('.sale').value;

    const dataLaptop = {
        name: name,
        price: price,
        state: state,
        sale: sale
    }
    try{
        await fetch(`http://localhost:8080/laptop/admin/add`,{
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataLaptop),
        });
    }
    catch(error){
        console.log("Da xay ra loi upload laptop: " + error);
    }
}

async function submitSpecification() {
    let cpu = document.querySelector('.cpu').value;
    let ram = document.querySelector('.ram').value;
    let rom = document.querySelector('.rom').value;
    let vga = document.querySelector('.vga').value;
    let screen = document.querySelector('.screen').value;
    let battery = document.querySelector('.battery').value;
    let operatingSystem = document.querySelector('.os').value;
    let weight = document.querySelector('.weigth').value;
    let webcam = document.querySelector('.webcam').value;
    let connectionPort = document.querySelector('.port').value;
    let port = document.getElementsByName("port");
    let selectedPort = "";
    for(let i = 0; i < 2; i++){
        if (port[i].checked) {
            selectedPort = port[i].value;
            break;
        }
    }

    const dataSpecification = {
        specification : {
            cpu: cpu,
            ram: ram,
            rom: rom,
            graphicsCard: vga,
            screen: screen,
            battery: battery,
            operatingSystem: operatingSystem,
            weight: weight,
            webcam: webcam,
            connectionPort: connectionPort,
            muxSwitch: selectedPort
        }
    }
    try{
        await fetch(`http://localhost:8080/laptop/admin/specification/add`,{
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataSpecification),
        });
    }
    catch(error){
        console.log("Da xay ra loi upload specification: " + error);
    }
}

function selectCategory(){
    let categoryButton = document.querySelector('.categoryButton');
    let drowList = document.querySelector('.dropdown-list');
    categoryButton.addEventListener('click', function(){
        drowList.style.display = "block";
    })

    
    document.addEventListener('click', function(event) {
        if (!drowList.contains(event.target) && !categoryButton.contains(event.target)) {
            drowList.style.display = 'none';
        }
    });

    let selection = drowList.getElementsByTagName('p');
    for(let i = 0; i < selection.length; i++){
        selection[i].addEventListener('click', function(){
            categoryButton.innerHTML = selection[i].innerHTML;
            drowList.style.display = 'none';
        })
    }
}

function chuanHoaCategory(category){
    let words = category.split(" ");
    let res = words[0];
    for(let i = 1; i < words.length; i++){
        res += "-" + words[i];
    }
    return res;
}

async function submitCategory(){
    let categoryButton = document.querySelector('.categoryButton');
    let category = chuanHoaCategory(categoryButton.innerHTML);
    const dataCategory = {
        name: category
    }
    try{
        await fetch(`http://localhost:8080/laptop/admin/laptopCategory/add`,{
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataCategory),
        });
    }
    catch(error){
        console.log("Da xay ra loi upload specification: " + error);
    }
}

async function laptopMain(){
    selectCategory();
    selectFileImg();
    let confirmButton = document.querySelector('.confirm-button');
    confirmButton.addEventListener('click', async function(){
        await submitLaptop();
        await submitSpecification();
        await submitImg();
        await submitCategory();
    });
}

laptopMain();