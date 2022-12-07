<?php
require_once './core/functions.php';
header('Access-Control-Allow-Origin: *');

$category_id = $_POST['category_id'];

$bool = deleteCategory($category_id);

$response = array(
    'status' => $bool
);

echo json_encode($response);
?>