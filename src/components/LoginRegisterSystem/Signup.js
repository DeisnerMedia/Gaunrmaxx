import React, {useState} from 'react';
import './Style.css'

function Registrieren() {

    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({values, [name]: value}));
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log(inputs);
    }

    return (
        <>
            <div className="login-register-system">
                <div className="login-register-system__register">
                    <h2 className="title">Registrieren</h2>
                    <form onSubmit={handleSubmit}>
                        <input onChange={handleChange} type="text" name="username" placeholder="Benutzername" />
                        <br></br>
                        <input onChange={handleChange} type="email" name="email" placeholder="E-Mail" />
                        <br></br>
                        <input onChange={handleChange} type="password" name="password" placeholder="Passwort" />
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
