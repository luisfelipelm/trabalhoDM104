<?php

$conn = @mysql_connect('localhost','u817180700_dm104','trabdm104');
if (!$conn) {
	die('Não foi possível Conectar: ' . mysql_error());
}
mysql_select_db('u817180700_dm104', $conn);

?>