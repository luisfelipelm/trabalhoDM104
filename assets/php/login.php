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


    $conexao = new mysqli("localhost","root","lflm.zp,lflm","pos_geral");
    if ($conexao->connect_errno) {
    die ("Erro de conexão com localhost, o seguinte erro ocorreu -> ". $conexao->connect_errno);
    }

    $query_ver_sql = $conexao->query("SELECT `login` FROM `clientes` WHERE `login` = '$login' and `senha` = '$senha' "); 

    $query_ver= @mysqli_num_rows($query_ver_sql); 

    if($query_ver>0){
        $_SESSION['login'] = $login;
        if ($login == "admin")
            header("Location: ../html/menuAdmin.html");
        else
            header("Location: ../html/pedidos.html");
        die();
    } else {
		echo "Login e/ou senha invalido(s).";
    }
?>

</body>
</html> 