<?php

namespace Services;

use Models\PortfolioModel;

class PortfolioService
{
    private $portfolioModel;

    public function __construct()
    {
        $this->portfolioModel = new PortfolioModel();
    }

    // Obtener todos los proyectos desde el modelo
    public function getProjects()
    {
        return $this->portfolioModel->getProjects();
    }
}
