<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Cadastro realizado com sucesso!</title>
</head>

<body>

<?php

    $nome= $_POST ["nome"];
    $email= $_POST ["email"];
    $ddd= $_POST ["ddd"];
    $tel= $_POST ["telefone"];
    $endereco= $_POST ["endereco"];
    $cidade= $_POST ["cidade"];
    $estado= $_POST ["estado"];
    $bairro = $_POST ["bairro"];
    $pais= $_POST ["pais"];
    $login= $_POST ["login"];
    $senha= $_POST ["senha"];
    $news= $_POST ["news"];
    $sexo= $_POST ["sexo"];


    $conexao = new mysqli("localhost","root","lflm.zp,lflm","pos_geral");
    if ($conexao->connect_errno) {
    die ("Erro de conexão com localhost, o seguinte erro ocorreu -> ". $conexao->connect_errno);
    }

    $query_ver_sql = $conexao->query("SELECT `login` FROM `clientes` WHERE `login` = '$login'"); 

    $query_ver= @mysqli_num_rows($query_ver_sql); 

    if($query_ver>0){
        echo "Este login já esta em uso";
    } else {
		$query = "INSERT INTO `clientes` ( `nome` , `email` , `sexo` , `ddd` , `telefone` , `endereço` , `cidade` , `estado` , `bairro` , `país` , `login` , `senha` , `news` )
		VALUES ('$nome', '$email', '$sexo', '$ddd', '$tel', '$endereco', '$cidade', '$estado', '$bairro', '$pais', '$login', '$senha', '$news')";
		$conexao->query($query);
		echo "Seu cadastro foi realizado com sucesso!Agradecemos a atenção.";
    }
?>

</body>
</html> 