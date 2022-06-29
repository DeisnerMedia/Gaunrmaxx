import React, {useState} from 'react';
import './Style.css'
import axios from "axios";

function Registrieren() {

    const [data, setData] = useState({
        username: '',
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })

        //console.log(data);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const sendData = {
            username: data.username,
            email: data.email,
            password: data.password
        }

        //console.log(data);
        axios.post('http://localhost:5000/api/users/register', sendData)
            .then(res => {
                if (res.data.Status == 'Invalid') {
                    alert('Invalid User');
                }

                else {
                    alert('User created');
                    // eslint-disable-next-line no-restricted-globals
                    history('/signin');
                }
            })
    }

    return (
        <>
            <div className="login-register-system">
                <div className="login-register-system__register">
                    <h2 className="title">Registrieren</h2>
                    <form onSubmit={handleSubmit}>
                        <input onChange={handleChange} type="text" name="username" placeholder="Benutzername" required/>
                        <br></br>
                        <input onChange={handleChange} type="email" name="email" placeholder="E-Mail" required/>
                        <br></br>
                        <input onChange={handleChange} type="password" name="password" placeholder="Passwort" required/>
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
