<?php
    session_start();
    $login= isset ($_POST["login"]) ? $_POST["login"] : '';
    $senha= isset ($_POST["senha"]) ? $_POST["senha"] : '';


	include '../php/conn.php';

	$rs = mysql_query("SELECT `login`, `senha`, id FROM `clientes` WHERE `login` = '$login' and `senha` = '$senha' ");

	$row = mysql_fetch_row($rs);
    echo json_encode($row);

?>

