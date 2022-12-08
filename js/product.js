function doAddProduct(){
    let product_id = document.getElementById('product_id')
    let product_name = document.getElementById('product_name')
    let product_description = document.getElementById('product_description')
    let product_img = document.getElementById('product_img')
    let product_price = document.getElementById('product_price')
    let category_id = document.getElementById('category_id')
    if(product_id.value==""){
        alert('Vui Lòng Nhập product_id')
        return false
    }else{
        product_id = document.getElementById('product_id').value
    }
    if(product_name.value==""){
        alert('Vui Lòng Nhập product_name')
        return false
    }else{
        product_name = document.getElementById('product_name').value
    }
    if(product_description.value==""){
        alert('Vui Lòng Nhập product_description')
        return false
    }else{
        product_description = document.getElementById('product_description').value
    }
    if(product_img.value==""){
        alert('Vui Lòng Nhập product_img')
        return false
    }else{
        product_img = document.getElementById('product_img').value
    }
    if(product_price.value==""){
        alert('Vui Lòng Nhập product_price')
        return false
    }else{
        product_price = document.getElementById('product_price').value
    }
    if(category_id.value==""){
        alert('Vui Lòng Nhập category_id')
        return false
    }else{
        category_id = document.getElementById('category_id').value
    }
    addProduct(product_id, product_name, product_description, product_img, product_price, category_id)
}

function addProduct(product_id, product_name, product_description, product_img, product_price, category_id){
    let params = {'product_id': product_id, 'product_name': product_name, 'product_description': product_description, 'product_img': product_img, 'product_price': product_price, 'category_id': category_id}
    $.post('addproduct.php', params, function(data){
        let res = JSON.parse(data)
        if(res.code == true){
            alert('Lỗi')
        }else{
            alert('Thêm Thành Công')
            window.location = 'addproduct.html'
        }
    })
}

// Xóa Category
function doDeleteProduct(){
    let product_id = document.getElementById('product_id')
    if(product_id.value==""){
        alert('Vui Lòng Nhập product_id')
        return false
    }else{
        product_id = document.getElementById('product_id').value
    }
    deleteCategory(product_id)
}

function deleteCategory(product_id){
    let params = {'product_id': product_id}
    $.post('deleteproduct.php', params, function(data){
        let res = JSON.parse(data)
        if(res.code == true){
            alert('Lỗi')
        }else{
            alert('Xóa Thành Công')
            window.location = 'deleteproduct.html'
        }
    })
}

//Sửa Product

function doUpdateProduct(){
    let product_id = document.getElementById('product_id')
    let product_name = document.getElementById('product_name')
    let product_description = document.getElementById('product_description')
    let product_img = document.getElementById('product_img')
    let product_price = document.getElementById('product_price')
    let category_id = document.getElementById('category_id')
    if(product_id.value==""){
        alert('Vui Lòng Nhập product_id')
        return false
    }else{
        product_id = document.getElementById('product_id').value
    }
    if(product_name.value==""){
        alert('Vui Lòng Nhập product_name')
        return false
    }else{
        product_name = document.getElementById('product_name').value
    }
    if(product_description.value==""){
        alert('Vui Lòng Nhập product_description')
        return false
    }else{
        product_description = document.getElementById('product_description').value
    }
    if(product_img.value==""){
        alert('Vui Lòng Nhập product_img')
        return false
    }else{
        product_img = document.getElementById('product_img').value
    }
    if(product_price.value==""){
        alert('Vui Lòng Nhập product_price')
        return false
    }else{
        product_price = document.getElementById('product_price').value
    }
    if(category_id.value==""){
        alert('Vui Lòng Nhập category_id')
        return false
    }else{
        category_id = document.getElementById('category_id').value
    }
    updateProduct(product_id, product_name, product_description, product_img, product_price, category_id)
}

function updateProduct(product_id, product_name, product_description, product_img, product_price, category_id){
    let params = {'product_id': product_id, 'product_name': product_name, 'product_description': product_description, 'product_img': product_img, 'product_price': product_price, 'category_id': category_id}
    $.post('updateproduct.php', params, function(data){
        let res = JSON.parse(data)
        if(res.code == true){
            alert('Lỗi')
        }else{
            alert('Thêm Thành Công')
            window.location = 'updateproduct.html'
        }
    })
}