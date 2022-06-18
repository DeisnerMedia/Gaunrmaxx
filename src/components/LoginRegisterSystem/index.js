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
                    <form action="">
                        <input type="text" placeholder="Benutzername" />
                        <br></br>
                        <input type="password" placeholder="Passwort" />
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
