<?php
session_start();
if(isset($_REQUEST['variable'])){
    $variable = $_REQUEST['variable'];
    $_SESSION['login'] = $variable;
}
?>