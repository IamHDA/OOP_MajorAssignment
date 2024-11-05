async function checkAccessTokenIsvalid(){
    let accessToken = localStorage.getItem('accessToken');
    const response = await fetch('http://localhost:8080/check-accessToken', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`
        }
    });
    response = await response.text();
    console.log(response)
    if(response !== "Token is still valid"){;
        let refreshToken = localStorage.getItem('refreshToken');
        let response = await fetch('http://localhost:8080/refresh-token', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${refreshToken}`
            }
        });
        response = await response.json();
        localStorage.setItem('accessToken', response.accessToken);
        localStorage.setItem('refreshToken', response.refreshToken);
    }
}