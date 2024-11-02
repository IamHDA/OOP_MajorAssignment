function selectionCategory() {
    let lapTopMoi = document.querySelector('.category__detail__lap_top_moi');
    let lapTopLikeNew = document.querySelectorAll('.category__detail__lap_top_like_new');

    // For the "lapTopMoi" element
    let selectionLapTopMoi = lapTopMoi.querySelectorAll('.category__detail__branch__detail');
    
    selectionLapTopMoi.forEach(function(element) {
        let nameBranch = element.querySelector('.id').textContent;
        element.addEventListener('click', function() {
            localStorage.setItem('branch', nameBranch);
            localStorage.setItem('state', 'New');
            localStorage.setItem('action', 'selectionCategory');
        });
    });

    // For each "lapTopLikeNew" element
    lapTopLikeNew.forEach(function(lapTop) {
        let selectionLapTopLikeNew = lapTop.querySelectorAll('.category__detail__branch__detail');
        
        selectionLapTopLikeNew.forEach(function(element) {
            let nameBranch = element.querySelector('.id').textContent;
            element.addEventListener('click', function() {
                localStorage.setItem('branch', nameBranch);
                localStorage.setItem('state', 'Like-New');
                localStorage.setItem('action', 'selectionCategory');
            });
        });
    });
}

selectionCategory();