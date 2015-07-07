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
    $id = intval($_REQUEST['id']);

    if($login == 'admin'){
        include '../../php/conn.php';

        $sql = "UPDATE `produtos` SET
                                `produto` = '$produto',
                                `descricao` = '$descricao',
                                `valor` = '$valor',
                                `altura` = $altura,
                                `largura` = '$largura',
                                `comprimento` = '$comprimento',
                                `peso` = '$peso',
                                `quantidade` = '$quantidade'
                                WHERE `id` = $id";

        $result = @mysql_query($sql);

        if ($result){
            echo json_encode(array('success'=>true));
        } else {
            echo json_encode(array('msg'=>'Erro ao atualizar dados.'));
        }
    }
else
    echo "Você não esta autorizado a alterar produtos.";
?>