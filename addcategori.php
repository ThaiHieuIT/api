<?php
require_once './core/functions.php';
header('Access-Control-Allow-Origin: *');

$category_id = $_POST['category_id'];
$category_name = $_POST['category_name'];

$bool = addCategory($category_id, $category_name);

$response = array(
    'status' => $bool
);

echo json_encode($response);
?>