import React from 'react';
import './Newsletter.css';

const Newsletter = () => {
    return (
        <>
            <div className="newsletter-container">
                <h1 id='title'>Newsletter</h1>

                <h2 id='title-small'>Angebote und das aktuelle Programm</h2>

                <p className='content'>Gib einfach deine E-Mail-Adresse ein,
                    wähle dein Stammkino aus und klicke auf „REGISTRIEREN“.
                    Du erhältst anschließend eine E-Mail, um deine Adresse zu bestätigen.</p>

                <form className='newsletter-form'>
                    <input className='news-input' type='text' placeholder='E-Mail'/>
                    <br></br>
                    <select>
                        <option value='0'>Stammkino</option>
                        <option value='1'>Stammkino 1</option>
                        <option value='2'>Stammkino 2</option>
                        <option value='3'>Stammkino 3</option>
                    </select>
                    <br></br>
                    <button id='registrieren' type='submit'>Registrieren</button>
                </form>
            </div>
        </>
    )
}

export default Newsletter;
