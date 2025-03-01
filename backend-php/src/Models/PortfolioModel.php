<?php

namespace Models;

use Config\Database;

class PortfolioModel
{
    public function getProjects()
    {
        $db = Database::getConnection();
        $sql = "SELECT * FROM projects"; // Cambia el nombre de la tabla si es necesario
        $stmt = $db->query($sql);
        return $stmt->fetchAll(\PDO::FETCH_ASSOC);
    }
}
