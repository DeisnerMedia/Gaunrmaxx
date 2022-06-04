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
                    </form>
                </div>

                <div className="login-register-system__register">
                    <h2 className="title">Registrieren</h2>
                    <form action="">
                        <input type="text" placeholder="Benutzername" />
                        <br></br>
                        <input type="email" placeholder="E-Mail" />
                        <br></br>
                        <input type="password" placeholder="Passwort" />
                        <br></br>
                        <input type="password" placeholder="Passwort wiederholen" />
                        <br></br>
                        <button id="registrieren" type="submit">Registrieren</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Anmelden;
