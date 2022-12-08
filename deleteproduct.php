<?php
require_once './core/functions.php';
header('Access-Control-Allow-Origin: *');

$product_id = $_POST['product_id'];

$bool = deleteProduct($product_id);

$response = array(
    'status' => $bool
);

echo json_encode($response);
?>