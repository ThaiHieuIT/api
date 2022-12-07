function addCategori(){
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
    addCategory(category_id, category_name)
}

function addCategory(category_id, category_name){
    let params = {'category_id': category_id, 'category_name': category_name}
    $.post('addcategori.php', params, function(data){
        let res = JSON.parse(data)
        if(res.code == true){
            alert('Lỗi')
        }else{
            alert('Thêm Thành Công')
            window.location = 'addcategory.html'
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