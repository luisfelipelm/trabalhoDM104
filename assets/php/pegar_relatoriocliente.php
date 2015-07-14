<?php
	$page = isset($_POST['page']) ? intval($_POST['page']) : 1;
	$rows = isset($_POST['rows']) ? intval($_POST['rows']) : 10;
	$offset = ($page-1)*$rows;
	$result = array();
session_start();
    $id= $_SESSION['idpedido'];

	include 'conn.php';
	
	$rs = mysql_query("select count(*) from pedido as ped join produtos as prod
                       where ped.produto_id = prod.id");

	$row = mysql_fetch_row($rs);
	$result["total"] = $row[0];
	$rs = mysql_query("SELECT prod.produto, ped.quantidade, ped.valor_total, ped.data_pedido 
                        FROM pos_geral.pedido as ped join pos_geral.produtos as prod
                        where ped.numero_pedido = $id and ped.produto_id = prod.id
                        limit $offset,$rows");
	
	$items = array();
	while($row = mysql_fetch_object($rs)){
		array_push($items, $row);
	}
	$result["rows"] = $items;

	echo json_encode($result);

?>