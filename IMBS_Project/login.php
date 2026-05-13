<?php
include("database_connection.php");

$user = $_POST['user'] ?? '';
$psw = $_POST['psw'] ?? '';

if ($user === "admin" && $psw === "123") {
    echo "<script>alert('Login Successful'); window.location='Home.html';</script>";

} else {
    echo "<script>alert('Invalid Username or Password'); window.location='Login.html';</script>";
}
?>
