<?php
require_once 'mysql.php';

function get_category_list(){
    $sql = 'SELECT * FROM CATEGORIES';
    $pdo = get_pdo();

    $stmt = $pdo->query($sql);
    $category_list = array();

    while ($row = $stmt->fetch()) {
        $category = array(
            'id' => $row['id'],
            'name' => $row['name']
        );

        array_push($category_list, $category);
    }
    
    return json_encode($category_list);
}

/**
 * Api for product
 */
function get_product_list(){
    $sql = 'SELECT * FROM PRODUCTS';
    $pdo = get_pdo();

    $stmt = $pdo->query($sql);
    $product_list = array();

    while ($row = $stmt->fetch()) {
        $product = array(
            'id' => $row['id'],
            'name' => $row['name'],
            'description' => $row['description'],
            'img' => $row['img'],
            'price' => $row['price'],
            'category_id' => $row['category_id']
        );

        array_push($product_list, $product);
    }
    
    return json_encode($product_list);
}

function get_product_list_by_category($category_id){
    $sql = 'SELECT * FROM PRODUCTS WHERE category_id=:category_id';
    $pdo = get_pdo();

    $stmt = $pdo->prepare($sql);
    $stmt->bindParam(':category_id', $category_id);
    $stmt->execute();

    $product_list = array();

    while ($row = $stmt->fetch()) {
        $product = array(
            'id' => $row['id'],
            'name' => $row['name'],
            'description' => $row['description'],
            'img' => $row['img'],
            'price' => $row['price'],
            'category_id' => $row['category_id']
        );
        array_push($product_list, $product);
    }

    return json_encode($product_list);
}

function get_product($product_id){
    $sql = 'SELECT * FROM PRODUCTS WHERE id=:id';
    $pdo = get_pdo();

    $stmt = $pdo->prepare($sql);
    $stmt->bindParam(':id', $product_id);
    $stmt->execute();

    while ($row = $stmt->fetch()) {
        $product = array(
            'id' => $row['id'],
            'name' => $row['name'],
            'description' => $row['description'],
            'img' => $row['img'],
            'price' => $row['price'],
            'category_id' => $row['category_id']
        );

        return json_encode($product);
    }
    
    return json_encode(array());
}

/**
 * Authentication
 */
//Đăng nhập
function login($email, $password){
    $sql = 'SELECT * FROM USERS WHERE email=:email AND password=:password';
    $pdo = get_pdo();

    $stmt = $pdo->prepare($sql);
    $stmt->bindParam(':email', $email);
    $stmt->bindParam(':password', $password);
    $stmt->execute();

    while ($row = $stmt->fetch()) {
        $user = array(
            'id' => $row['id'],
            'email' => $row['email'],
            'password' => $row['password']
        );
        return $user;
    }
    
    return false;
}
//Tạo tài khoản
function register($email, $password){
    $sql = 'INSERT INTO USERS(ID,EMAIL,PASSWORD) VALUES(NULL, :email, :password)';
    $pdo = get_pdo();

    $stmt = $pdo->prepare($sql);
    $stmt->bindParam(':email', $email);
    $stmt->bindParam(':password', $password);
    return $stmt->execute();
}

//add category
function addCategory($category_id, $category_name){
    $sql = 'INSERT INTO categories(ID,Name) VALUES(:category_id, :category_name)';
    $pdo = get_pdo();

    $stmt = $pdo->prepare($sql);
    $stmt->bindParam(':category_id', $category_id);
    $stmt->bindParam(':category_name', $category_name);
    return $stmt->execute();
}
//Xóa Category
function deleteCategory($category_id){
    $sql = 'DELETE FROM categories WHERE id=:category_id';
    $pdo = get_pdo();

    $stmt = $pdo->prepare($sql);
    $stmt->bindParam(':category_id', $category_id);
    return $stmt->execute();
}
// Sửa Category
function updateCategory($category_id, $category_name){
    $sql = 'UPDATE categories SET name=:category_name where id=:category_id';
    $pdo = get_pdo();

    $stmt = $pdo->prepare($sql);
    $stmt->bindParam(':category_id', $category_id);
    $stmt->bindParam(':category_name', $category_name);
    return $stmt->execute();
}

function addProduct($product_id, $product_name, $product_description, $product_img, $product_price, $category_id){
    $sql = 'INSERT INTO products(ID,Name,description,img,price,category_id) VALUES(:product_id, :product_name,:product_description,:product_img,:product_price, :category_id)';
    $pdo = get_pdo();

    $stmt = $pdo->prepare($sql);
    $stmt->bindParam(':product_id', $product_id);
    $stmt->bindParam(':product_name', $product_name);
    $stmt->bindParam(':product_description', $product_description);
    $stmt->bindParam(':product_img', $product_img);
    $stmt->bindParam(':product_price', $product_price);
    $stmt->bindParam(':category_id', $category_id);
    return $stmt->execute();
}

function deleteProduct($product_id){
    $sql = 'DELETE FROM products WHERE id=:product_id';
    $pdo = get_pdo();

    $stmt = $pdo->prepare($sql);
    $stmt->bindParam(':product_id', $product_id);
    return $stmt->execute();
}

function updateProduct($product_id, $product_name, $product_description, $product_img, $product_price, $category_id){
    $sql = 'UPDATE products SET name=:product_name where id=:id';
    $pdo = get_pdo();

    $stmt = $pdo->prepare($sql);
    $stmt->bindParam(':product_id', $product_id);
    $stmt->bindParam(':product_name', $product_name);
    $stmt->bindParam(':product_description', $product_description);
    $stmt->bindParam(':product_img', $product_img);
    $stmt->bindParam(':product_price', $product_price);
    $stmt->bindParam(':category_id', $category_id);
    return $stmt->execute();
}
?>



