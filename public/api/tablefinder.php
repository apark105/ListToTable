<?php

require_once('config/mysqlConnect.php');

$output = [
    "success" => false
];

$action = $_GET['action'];

switch($action) {
    case 'restaurants':
        require_once('restaurants/getAll.php');
        require_once('restaurants/insert.php');
        break;

    case 'clients':
        require_once('clients/getAll.php');
        require_once('clients/insert.php');
        require_once('clients/update.php');
        break;

    case 'restaurant_users':
        require_once('restaurant_users/getAll.php');
        require_once('restaurant_users/insert.php');
        require_once('restaurant_users/login.php');
        require_once('restaurant_users/logout.php');
        require_once('restaurant_users/data.php');
        break;

    case 'parties':
        require_once('parties/getAll.php');
        require_once('parties/insert.php');
        break;
}


$output = json_encode($output);

print $output;

?>