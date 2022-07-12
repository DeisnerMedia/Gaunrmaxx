<?php
    if(isset($_POST["submit"])) {
        $host = "u927239202_gaunrmaxx";
        $name = "u927239202_gaunrmaxx";
        $user = "u927239202_admin";
        $passwort = "Test123!";

        try {
            $mysql = new PDO("mysql:host=$host;dbname=$name", $user, $passwort);
        } catch (PDOException $e) {
            echo "SQL Error: " . $e->getMessage();
        }

        // Überprüfung von dem Namen
        $stmt = $mysql->prepare("SELECT * FROM accounts where benutzername = :user");

        $stmt->bindParam(":user", $_POST["benutzername"]);
        $stmt->execute();
        $count = $stmt->rowCount();

        // Name ist frei
        if($count == 0)
        {
            // Benutzer Anlegen
            $stmt = $mysql->prepare("INSERT INTO accounts (BENUTZERNAME, EMAIL, PASSWORT) VALUES (:user, :email, :pw)");
            $stmt->bindParam(":user", $_POST["benutzername"]);
            $stmt->bindParam(":email", $_POST["email"]);

            $hash = password_hash($_POST["pw"], PASSWORD_BCRYPT);
            $stmt->bindParam(":pw", $hash);
            $stmt->execute();

            echo '<p>'."Dein Account wurde angelegt".'</p>';
        }
    }
?>