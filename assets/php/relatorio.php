<!DOCTYPE html>
<html dir="ltr" lang="pt-BR">
<head>

<?php session_start(); $_SESSION['idpedido'] = $_POST["pedido"];?>

<meta charset="UTF-8" /> 
    <title>Relatório compra</title>
    <link rel="stylesheet" type="text/css" href="../css/easyui.css">
    <link rel="stylesheet" type="text/css" href="../css/icon.css">
    <link rel="stylesheet" type="text/css" href="../css/demo.css">
    <style type="text/css">
        #fm{
            margin:0;
            padding:10px 30px;
        }
        .ftitle{
            font-size:14px;
            font-weight:bold;
            color:#666;
            padding:5px 0;
            margin-bottom:10px;
            border-bottom:1px solid #ccc;
        }
        .fitem{
            margin-bottom:5px;
        }
        .fitem label{
            display:inline-block;
            width:80px;
        }
    </style>
    <script type="text/javascript" src="../js/jquery-1.6.min.js"></script>
    <script type="text/javascript" src="../js/jquery.easyui.min.js"></script>
</head>
<body>
    <div class="demo-info" style="margin-bottom:10px">
        <div class="demo-tip icon-tip">&nbsp;</div>
        <div>Clique na opção desejada na barra de ferramentas.</div>
    </div>

    <table id="dg" title="Relatório compra" class="easyui-datagrid" style="width:700px;height:250px"
            url="../php/pegar_relatoriocliente.php"
            toolbar="#toolbar" pagination="true"
            rownumbers="true" fitColumns="true" singleSelect="true">
        <thead>
            <tr>
                <th field="produto" width="50">Produto</th>
                <th field="quantidade" width="50">Quantidade</th>
                <th field="valor_total" width="50">Valor total</th>
                <th field="data_pedido" width="50">Data</th>
            </tr>
        </thead>
    </table>
</body>
</html>