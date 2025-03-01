<?php

require_once '../src/Config/Database.php';
require_once '../src/Controllers/PortfolioController.php';
require_once '../src/Routes/PortfolioRoutes.php';
require_once '../src/Services/PortfolioService.php';

use Routes\PortfolioRoutes;

// Iniciar el enrutamiento
PortfolioRoutes::init();
