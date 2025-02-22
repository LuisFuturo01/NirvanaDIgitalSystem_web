<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

$request_uri = $_SERVER["REQUEST_URI"];

if ($request_uri === "/api/test") {
    echo json_encode(["message" => "API funcionando sin Composer"]);
} else {
    http_response_code(404);
    echo json_encode(["error" => "Ruta no encontrada"]);
}
