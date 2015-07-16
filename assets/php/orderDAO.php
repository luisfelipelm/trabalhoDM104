<?php
require 'vendor/autoload.php';
require 'connectionDB.php';

saveOrder();

function saveOrder()  {
    
    $product_id = $_GET ["product_id"];
    $client_id = $_GET ["client_id"];
    $quantity = $_GET ["quantity"];
    $total = $_GET ["total"];
    $order_date = date('Y-m-d');
    $order_number = rand(1000,1000000);
    
    $order = array(
			'produto_id' => $product_id,
			'cliente_id' => $client_id,
			'quantidade' => $quantity,
            'valor_total' => $total,
            'data_pedido' => $order_date,
            'numero_pedido' => $order_number,
    );

    print_r($order);
    
	$db = getDB();
	
	$orderAdded = $db->pedido->insert($order);

	echo json_encode($orderAdded);

}

?>