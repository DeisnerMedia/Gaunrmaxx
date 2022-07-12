import React, {useState} from 'react';
import './Style.css'

function Registrieren() {
    return (
        <>
            <div className="login-register-system">
                <div className="login-register-system__register">
                    <h2 className="title">Registrieren</h2>
                    <form action="Registrieren.php" method="post">
                        <input type="text" name="benutzername" placeholder="Benutzername" required/>
                        <br></br>
                        <input type="email" name="email" placeholder="E-Mail" required/>
                        <br></br>
                        <input type="password" name="passwort" placeholder="Passwort" required/>
                        <br></br>
                        <button id="registrieren" type="submit">Registrieren</button>
                    </form>
                    <p id='referToOther'><a id='refer' href='/signin'>Schon Registriert?</a></p>
                </div>
            </div>
        </>
    );
};

export default Registrieren;
