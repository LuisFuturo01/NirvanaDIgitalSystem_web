<?php

namespace Controllers;

use Services\PortfolioService;
use Utils\Response;

class PortfolioController
{
    private $portfolioService;

    public function __construct()
    {
        $this->portfolioService = new PortfolioService();
    }

    // Obtener todos los proyectos
    public function getAllProjects()
    {
        $projects = $this->portfolioService->getProjects();

        // Si no hay proyectos, enviar un error
        if (empty($projects)) {
            Response::sendError('No se encontraron proyectos', 404);
        }

        // Si hay proyectos, enviarlos en formato JSON
        Response::send($projects);
    }
}
