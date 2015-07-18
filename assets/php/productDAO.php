<?php
require 'vendor/autoload.php';
require 'connectionDB.php';

$method = $_GET['method'];

if($method === 'getProductById'){
    getProductById();
}else{
    getProducts();
}


function getProducts()  {

	$db = getDB();
	$products = array();
	foreach($db->produtos() as $product) {
		$products[] = array(
			'id' => $product['id'],
			'produto' => $product['produto'],
			'descricao' => $product['descricao'],
            'valor' => $product['valor']
		);
	}
    
	echo json_encode($products);
}



function getProductById()  {
    
    $method = $_GET['method'];
    $id = $_GET['id'];

	$db = getDB();
	$product = $db->produtos()->where('id', $id);
    
	echo json_encode($product[$id]);

}


?>