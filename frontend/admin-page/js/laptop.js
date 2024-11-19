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

async function submitData(){
    const formData = new formData();
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

selectFileImg();