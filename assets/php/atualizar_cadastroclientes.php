<?php

$id = intval($_REQUEST['id']);
$nome= $_REQUEST ["nome"];
$email= $_REQUEST ["email"];
$ddd= intval($_REQUEST ["ddd"]);
$telefone= intval($_REQUEST ["telefone"]);
$endereco= $_REQUEST ["endereco"];
$cidade= $_REQUEST ["cidade"];
$estado= $_REQUEST ["estado"];
$bairro = $_REQUEST ["bairro"];
$pais= $_REQUEST ["pais"];
$login= $_REQUEST ["login"];
$senha= $_REQUEST ["senha"];
if (isset($_REQUEST["news"]))
    $news= $_REQUEST ["news"];
else $news= "";
$sexo= $_REQUEST ["sexo"];

include '../php/conn.php';

$sql = "UPDATE `pos_geral`.`clientes` SET
                        `nome` = '$nome',
                        `email` = '$email',
                        `sexo` = '$sexo',
                        `ddd` = '$ddd',
                        `telefone` = '$telefone',
                        `endereco` = '$endereco',
                        `cidade` = '$cidade',
                        `estado` = '$estado',
                        `bairro` = '$bairro',
                        `pais` = '$pais',
                        `login` = '$login',
                        `senha` = '$senha',
                        `news` = '$news'
                        WHERE `id` = $id";

$result = @mysql_query($sql);

if ($result){
	echo json_encode(array('success'=>true));
} else {
	echo json_encode(array('msg'=>'Erro ao atualizar dados.'));
}
?>