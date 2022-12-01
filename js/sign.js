function doRegister(){
    let email = document.getElementById('email')
    let password = document.getElementById('password')
    if(email.value==""){
        alert('Vui Lòng Nhập Email')
        return false
    }else{
        email = document.getElementById('email').value
    }
    if(password.value==""){
        alert('Vui Lòng Nhập Password')
        return false
    }else{
        password = document.getElementById('password').value
    }
    register(email, password)
}

function register(email, password){
    let params = {'email': email, 'password': password}
    $.post('sign.php', params, function(data){
        let res = JSON.parse(data)
        if(res.code == true){
            
        }else{
            alert('Đăng Kí Thành Công')
            window.location = 'login.html'
        }
    })
}