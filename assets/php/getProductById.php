<?php
require 'vendor/autoload.php';
require 'connectionDB.php';

getProductById();

function getProductById()  {
    
    $method = $_GET['method'];
    $id = $_GET['id'];

	$db = getDB();
	$product = $db->produtos()->where('id', $id);
    
	echo json_encode($product[$id]);

}

?>