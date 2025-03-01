<?php

namespace Utils;

class Response
{
    // Función para devolver una respuesta en formato JSON
    public static function send($data, $status = 200)
    {
        // Establecer el código de estado HTTP
        http_response_code($status);
        
        // Establecer las cabeceras para especificar el tipo de contenido
        header('Content-Type: application/json');
        
        // Convertir el array de datos a JSON y enviarlo
        echo json_encode($data);
        exit;
    }

    // Función para enviar una respuesta de error
    public static function sendError($message, $status = 400)
    {
        // Enviar un error en formato JSON
        self::send(['error' => $message], $status);
    }
}
