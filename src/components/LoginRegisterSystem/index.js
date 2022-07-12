import React from 'react';
import './Style.css';

function Anmelden() {

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.target);
        const username = data.get('username');
        const password = data.get('password');
    }

    return (
        <>
            <div className="login-register-system">
                <div className="login-register-system__login">
                    <h2 className="title">Anmelden</h2>
                    <form action="Anmelden.php" method="post">
                        <input type="text" name="benutzername" placeholder="Benutzername" required/>
                        <br></br>
                        <input type="password" name="pw" placeholder="Passwort" required/>
                        <br></br>
                        <button id="anmelden" type="submit">Anmelden</button>
                    </form>
                    <p id='referToOther'><a id='refer' href='/signup'>Noch nicht Registriert?</a></p>
                </div>
            </div>
        </>
    )
}

export default Anmelden;
