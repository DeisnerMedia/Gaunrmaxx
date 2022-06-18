import React from 'react';

const Registrieren = () => {
    return (
        <>
            <div className="login-register-system">
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
                        <p id='referToOther'><a id='refer' href='/signin'>Schon Registriert?</a></p>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Registrieren;
