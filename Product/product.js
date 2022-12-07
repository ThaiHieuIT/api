function addProduct(){
    let product_id = document.getElementById('product_id').value
    let product_name = document.getElementById('product_name').value
    let product_description = document.getElementById('product_description').value
    let product_img = document.getElementById('product_img').value
    let product_price = document.getElementById('product_price').value
    let category_id = document.getElementById('category_id').value
    // if(product_id.value==""){
    //     alert('Vui Lòng Nhập product_id')
    //     return false
    // }else{
    //     product_id = document.getElementById('product_id').value
    // }
    // if(product_name.value==""){
    //     alert('Vui Lòng Nhập product_name')
    //     return false
    // }else{
    //     product_name = document.getElementById('product_name').value
    // }
    addCategory(product_id, product_name, product_description, product_img, product_price, category_id)
}

function addProduct(product_id, product_name, product_description, product_img, product_price, category_id){
    let params = {'product_id': product_id, 'product_name': product_name, 'product_description': product_description, 'product_img': product_img, 'product_price': product_price, 'category_id':category_id}
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
function deleteCategori(){
    let category_id = document.getElementById('category_id')
    if(category_id.value==""){
        alert('Vui Lòng Nhập category_id')
        return false
    }else{
        category_id = document.getElementById('category_id').value
    }
    deleteCategory(category_id)
}

function deleteCategory(category_id, category_name){
    let params = {'category_id': category_id, 'category_name': category_name}
    $.post('deleteCategory.php', params, function(data){
        let res = JSON.parse(data)
        if(res.code == true){
            alert('Lỗi')
        }else{
            alert('Xóa Thành Công')
            window.location = 'deletecategory.html'
        }
    })
}

//Sửa Category
function updateCategori(){
    let category_id = document.getElementById('category_id')
    let category_name = document.getElementById('category_name')
    if(category_id.value==""){
        alert('Vui Lòng Nhập category_id')
        return false
    }else{
        category_id = document.getElementById('category_id').value
    }
    if(category_name.value==""){
        alert('Vui Lòng Nhập category_name')
        return false
    }else{
        category_name = document.getElementById('category_name').value
    }
    updateCategory(category_id, category_name)
}

function updateCategory(category_id, category_name){
    let params = {'category_id': category_id, 'category_name': category_name}
    $.post('updatecategory.php', params, function(data){
        let res = JSON.parse(data)
        if(res.code == true){
            alert('Lỗi')
        }else{
            alert('Thêm Thành Công')
            window.location = 'updatecategory.html'
        }
    })
}