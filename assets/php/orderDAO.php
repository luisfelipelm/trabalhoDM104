<?php
require 'vendor/autoload.php';
require 'connectionDB.php';

saveOrder();

function saveOrder()  {
    
    $product_id = $_POST ["product_id"];
    $client_id = $_POST ["client_id"];
    $quantity = $_POST ["quantity"];
    $total = $_POST ["total"];
    $freight = $_POST ["freight"];
    $order_date = date('Y-m-d');
    $order_number = $_POST ["orderNumber"];
    $status = "ENVIADO";
    
    $order = array(
			'produto_id' => $product_id,
			'cliente_id' => $client_id,
			'quantidade' => $quantity,
            'valor_total' => $total,
            'data_pedido' => $order_date,
            'numero_pedido' => $order_number,
            'frete' => $freight,
            'status' => $status,
    );

    print_r($order);
    
	$db = getDB();
	
	$orderAdded = $db->pedido->insert($order);

	echo json_encode($orderAdded);

}

?>