<?php

require_once('config/mysqlConnect.php');

$output = [
    "success" => false
];

$action = $_GET['action'];

switch($action) {
    case 'restaurants':
        require_once('restaurants/getAll.php');
        break;

    case 'clients':
        require_once('clients/getAll.php');
        break;

    case 'restaurant_users':
        require_once('restaurant_users/getAll.php');
        break;

    case 'parties':
        require_once('parties/getAll.php');
        break;
}

$output = json_encode($output);

print $output;

?>