<?php
require 'vendor/autoload.php';

function getConnection() {
	$dbhost = 'localhost';
	$dbuser = 'root';
	$dbpass = 'root';
	$dbname = 'trabdm104';
	$pdo = new PDO("mysql:host=$dbhost;dbname=$dbname", $dbuser, $dbpass);
	return $pdo;
}

function getDB() {
	$pdo = getConnection();
	$db = new NotORM($pdo);
	return $db;
}

?>