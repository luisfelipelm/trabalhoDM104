<?php
	session_start();
	include 'conn.php';
	if(isset($_REQUEST['variable'])){
		$variable = $_REQUEST['variable'];
		$_SESSION['login'] = $variable;
		
		$rs = mysql_query("select id from clientes where login = '$variable'");
	
		$row = mysql_fetch_row($rs);
		$_SESSION['cliente_id'] = $row[0];	
	}
?>