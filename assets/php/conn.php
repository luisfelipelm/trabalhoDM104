<?php

$conn = @mysql_connect('localhost','root','lflm.zp,lflm');
if (!$conn) {
	die('Não foi possível Conectar: ' . mysql_error());
}
mysql_select_db('pos_geral', $conn);

?>