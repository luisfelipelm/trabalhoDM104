<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Cadastro realizado com sucesso!</title>
</head>

<body>

<?php
session_start();
    $login = $_SESSION['login'];
    $produto= $_POST ["produto"];
    $descricao= $_POST ["descricao"];
    $valor= $_POST ["valor"];
    $altura= $_POST ["altura"];
    $largura= $_POST ["largura"];
    $comprimento= $_POST ["comprimento"];
    $peso= $_POST ["peso"];
    $quantidade= $_POST["quantidade"];


    $conexao = new mysqli("localhost","root","lflm.zp,lflm","pos_geral");
    if ($conexao->connect_errno) {
        die ("Erro de conexão com localhost, o seguinte erro ocorreu -> ". $conexao->connect_errno);
    }

    if($login == 'admin'){
		$query = "INSERT INTO `produtos` (`produto`,`descricao`,`valor`,`altura`,`largura`,`comprimento`,`peso`,`quantidade`)
                    VALUES('$produto', '$descricao', $valor, $altura, $largura, $comprimento, $peso, $quantidade )";
		$conexao->query($query);
        
        echo $query;
		echo "Produto adicionado com sucesso.";
    } else {
        echo "Você não tem permissão para adicionar produtos.";
    }
?>

</body>
</html> 