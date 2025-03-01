<?php
// archivo backend-php/includes/database.php

$host = 'localhost'; // O el nombre de tu host de base de datos
$dbname = 'nirvana';
$username = 'root';
$password = '';

try {
    // Conexión PDO
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    // Establecer el modo de error de PDO a excepción
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Error de conexión: " . $e->getMessage());
}
?>
