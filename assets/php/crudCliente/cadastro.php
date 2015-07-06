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
    if (isset($_POST["news"]))
        $news= $_POST ["news"];
    else $news= "";
    $sexo= $_POST ["sexo"];

    include '../php/conn.php';
	
	$rs = mysql_query("SELECT `login` FROM `clientes` WHERE `login` = '$login' ");
	$row = mysql_fetch_row($rs);

    if($row>0){
        echo "Este login já esta em uso";
    } else {
        $sql = "INSERT INTO `clientes` ( `nome` , `email` , `sexo` , `ddd` , `telefone` , `endereco` , `cidade` , `estado` , `bairro` , `pais` , `login` , `senha` , `news` )
		      VALUES ('$nome', '$email', '$sexo', '$ddd', '$tel', '$endereco', '$cidade', '$estado', '$bairro', '$pais', '$login', '$senha', '$news')";
        $result = @mysql_query($sql);
        if ($result){
		  echo "Seu cadastro foi realizado com sucesso!Agradecemos a atenção.";
        }
        else echo "Falha ao cadastrar usuario.";
    }
?>

</body>
</html> 