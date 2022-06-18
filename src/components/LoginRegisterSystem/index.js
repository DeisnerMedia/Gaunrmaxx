import React from 'react';
import './Style.css';

const Anmelden = () => {
    return (
        <>
            <div className="login-register-system">
                <div className="login-register-system__login">
                    <h2 className="title">Anmelden</h2>
                    <form action="">
                        <input type="text" placeholder="Benutzername" />
                        <br></br>
                        <input type="password" placeholder="Passwort" />
                        <br></br>
                        <button id="anmelden" type="submit">Anmelden</button>
                        <p id='referToOther'><a id='refer' href='/signup'>Noch nicht Registriert?</a></p>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Anmelden;
