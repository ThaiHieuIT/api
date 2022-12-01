function doLogin(){
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value

    login(email, password)
}

function login(email, password){
    let params = {'email': email, 'password': password}
    $.post('login.php', params, function(data){
        let res = JSON.parse(data)
        if(res.status == 200){
            window.location = 'index.html'
        }else{
            alert('Login Failed')
        }
    })
}