<?php
$restaurant_ID = $_POST['restaurant_ID'];
$username = $_POST['username'];
$email = $_POST['email'];
$password = $_POST['password'];
$status = $_POST['status'];
$last_accessed = $_POST['last_accessed'];
$created = $_POST['created'];

$query = "INSERT INTO restaurant_users (restaurant_ID, username, email, password, status, last_accessed, created) VALUES ('$restaurant_ID', '$username', '$email', '$password', '$status', '$last_accessed','$created')";

if (mysqli_query($conn, $query)){
    $output['success'] = true;
} else {
    $output['message'] = 'No Error';
}

?>