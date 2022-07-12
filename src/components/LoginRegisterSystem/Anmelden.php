<?php
    if(isset($_POST["submit"]))
    {
        $host = "localhost";
        $name = "gaunrmaxx";
        $user = "root";
        $passwort = "";

        try {
            $mysql = new PDO("mysql:host=$host;dbname=$name", $user, $passwort);
        }

        catch(PDOException $e)
        {
            echo "SQL Error: ".$e->getMessage();
        }

        // Überprüfung von dem Namen
        $stmt = $mysql->prepare("SELECT * FROM accounts where benutzername = :user");
        $stmt->bindParam(":user", $_POST["benutzername"]);

        $stmt->execute();
        $count = $stmt->rowCount();

        if($count == 1)
        {
            $row = $stmt->fetch();

            if(password_verify($_POST["pw"], $row["PASSWORT"]))
            {
                session_start();

                $_SESSION["benutzername"] = $row["benutzername"];
                header("Location: /");
            }
        }

    }
?>