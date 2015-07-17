<?php
$conn = @mysql_connect('localhost','root','root');
if (!$conn) {
	die('Não foi possível Conectar: ' . mysql_error());
}
mysql_select_db('trabdm104', $conn);
?>