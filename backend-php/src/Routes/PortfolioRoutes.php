<?php

namespace Routes;

use Controllers\PortfolioController;

class PortfolioRoutes
{
    public static function init()
    {
        $controller = new PortfolioController();
        $uri = $_SERVER['REQUEST_URI'];
        $method = $_SERVER['REQUEST_METHOD'];

        // Ruta para obtener todos los proyectos
        if ($uri === '/projects' && $method === 'GET') {
            $controller->getAllProjects();
        } else {
            // Agregar manejo de errores si no se encuentra la ruta
            http_response_code(404);
            echo json_encode(["message" => "Ruta no encontrada"]);
        }
    }
}
