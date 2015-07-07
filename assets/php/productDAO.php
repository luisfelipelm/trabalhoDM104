<?php
require 'vendor/autoload.php';
require 'connectionDB.php';


getProducts();

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

//echo json_encode(array('name'=>'crislaine'));
?>