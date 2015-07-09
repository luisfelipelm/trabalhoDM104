<?php
require 'vendor/autoload.php';
require 'connectionDB.php';

$method = $_GET['getProductById'];
$id = $_GET['id'];

getProducts($id);

function getProductById(function($id))  {

	$db = getDB();
	$product = $db->produtos->where("id", $id);
    
	echo json_encode($product);
}

?>