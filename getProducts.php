<?php

	$result = array();

	include '../php/conn.php';
	
	$rs = mysql_query("select * from produtos");
	$row = mysql_fetch_row($rs);
	$items = array();
	while($row = mysql_fetch_object($rs)){
		array_push($items, $row);
	}
	$result["products"] = $items;

	echo json_encode($result);
?>