<?php
require_once '/api/core/functions.php';
header('Access-Control-Allow-Origin: *');

$product_id = $_POST['product_id'];
$product_name = $_POST['product_name'];
$product_description = $_POST['product_description'];
$product_img = $_POST['product_img'];
$product_price = $_POST['product_price'];
$category_id = $_POST['category_id'];

$bool = addProduct($product_id, $product_name, $product_description, $product_img, $product_price, $category_id);

$response = array(
    'status' => $bool
);

echo json_encode($response);
?>