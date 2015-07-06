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

    include '../../php/conn.php';

    $sql = "INSERT INTO `clientes` ( `nome` , `email` , `sexo` , `ddd` , `telefone` , `endereco` , `cidade` , `estado` , `bairro` , `pais` , `login` , `senha` , `news` )
            VALUES ('$nome', '$email', '$sexo', '$ddd', '$tel', '$endereco', '$cidade', '$estado', '$bairro', '$pais', '$login', '$senha', '$news')";
    $result = @mysql_query($sql);
    if ($result){
        echo json_encode(array('success'=>true));
    } else {
        //echo json_encode(array('msg'=>'Erro ao inserir dados.'));
        echo json_encode(array('msg'=>$sql));
    }
?>