<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Cadastro realizado com sucesso!</title>
</head>

<body>

<?php
    session_start();
    $login= $_POST ["login"];
    $senha= $_POST ["senha"];


	include '../php/conn.php';
	
	$rs = mysql_query("SELECT `login`, `id` FROM `clientes` WHERE `login` = '$login' and `senha` = '$senha' ");
	$row = mysql_fetch_row($rs);

    if($row>0){
        $_SESSION['login'] = $login;
        $_SESSION['idCliente'] = $row[1];
        if ($login == "admin")
            header("Location: ../html/menuAdmin.html");
        else
            header("Location: ../../pedidos.html");
        die();
    } else {
		echo "Login e/ou senha invalido(s).";
    }

?>

</body>
</html> 