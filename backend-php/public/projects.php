<?php
// Permitir solicitudes desde cualquier origen
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

// Incluir la conexión a la base de datos
include_once '../src/Config/Database.php'; // Corrección en la ruta

header('Content-Type: application/json');

// Intentar obtener los proyectos desde la base de datos
try {
    $stmt = $pdo->query("SELECT * FROM projects");  // Ejecuta la consulta
    $projects = $stmt->fetchAll(PDO::FETCH_ASSOC);  // Obtiene los resultados como un array asociativo

    // Devuelve los proyectos como JSON
    echo json_encode($projects);
} catch (PDOException $e) {
    // Si ocurre un error, devuelve el mensaje de error en formato JSON
    echo json_encode(['error' => 'Error al obtener los proyectos: ' . $e->getMessage()]);
}
?>
