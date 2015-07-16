<?php
require 'vendor/autoload.php';

function getConnection() {
	$dbhost = 'localhost';
	$dbuser = 'u817180700_dm104';
	$dbpass = 'trabdm104';
	$dbname = 'u817180700_dm104';
	$pdo = new PDO("mysql:host=$dbhost;dbname=$dbname", $dbuser, $dbpass);
	return $pdo;
}

function getDB() {
	$pdo = getConnection();
	$db = new NotORM($pdo);
	return $db;
}

?>