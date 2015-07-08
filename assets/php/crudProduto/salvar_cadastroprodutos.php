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

    include '../../php/conn.php';

    $sql = "INSERT INTO `produtos` (`produto`,`descricao`,`valor`,`altura`,`largura`,`comprimento`,`peso`,`quantidade`)
                    VALUES('$produto', '$descricao', $valor, $altura, $largura, $comprimento, $peso, $quantidade )";
    $result = @mysql_query($sql);
    if ($result){
        echo json_encode(array('success'=>true));
    } else {
        echo json_encode(array('msg'=>'Erro ao inserir dados.'));
    }
?>