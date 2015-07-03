<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Cadastro realizado com sucesso!</title>
</head>

<body>

<?php
session_start();
    $loginAdmin = $_SESSION['login']; //admin
    $opcao = $_POST["opcao"];

    $conexao = new mysqli("localhost","root","lflm.zp,lflm","pos_geral");
    if ($conexao->connect_errno) {
    die ("Erro de conexão com localhost, o seguinte erro ocorreu -> ". $conexao->connect_errno);
    }

    if($loginAdmin == 'admin'){
        if($opcao == "add"){
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
            $query = "INSERT INTO `clientes` ( `nome` , `email` , `sexo` , `ddd` , `telefone` , `endereço` , `cidade` , `estado` , `bairro` , `país` , `login` , `senha` , `news` )
            VALUES ('$nome', '$email', '$sexo', '$ddd', '$tel', '$endereco', '$cidade', '$estado', '$bairro', '$pais', '$login', '$senha', '$news')";
            $conexao->query($query);
            echo "Seu cadastro foi realizado com sucesso!";
        }
        else if ($opcao == "alter"){
            $query = "UPDATE `pos_geral`.`clientes` SET
                        `nome` = '$nome',
                        `email` = '$email',
                        `sexo` = '$sexo',
                        `ddd` = '$ddd',
                        `telefone` = '$telefone',
                        `endereço` = '$endereco',
                        `cidade` = '$cidade',
                        `estado` = '$estado',
                        `bairro` = '$bairro',
                        `país` = '$pais',
                        `login` = '$login',
                        `senha` = '$senha',
                        `news` = '$news'
                        WHERE `id` = $id"
                echo "Atualização realizada com sucesso!";
        }
        else if ($opcao == "delete"){
            $query = "DELETE FROM `pos_geral`.`clientes` WHERE `id` = '$id'";
            echo "Usuario excluido com sucesso!"
        }
    }
    
?>

</body>
</html> 