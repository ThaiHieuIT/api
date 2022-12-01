function doRegister(){
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value

    register(email, password)
}

function register(email, password){
    let params = {'email': email, 'password': password}
    $.post('sign.php', params, function(data){
        let res = JSON.parse(data)
        if(res.code == true){
            window.location = 'login.html'
        }else{
            alert('Register  Failed')
        }
    })
}