<?php
require 'vendor/autoload.php';
require 'connectionDB.php';


getLoginClient();

function getLoginClient()  {

    $login= $_GET ["login"];
    $password= $_GET ["passwd"];
    
	$db = getDB();
	$client = $db->clientes()->where(array('login' => $login, 'senha' => $password));
	echo json_encode($client); 
}

?>