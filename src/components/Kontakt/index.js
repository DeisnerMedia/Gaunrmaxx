import './Kontakt.css';
import emailjs from 'emailjs-com';
import React, {useRef} from 'react';
import {FaCheck} from "react-icons/fa";

function Kontakt() {

    const form = useRef();

    function showNotification(e) {

        e.preventDefault();
        alert("Test");

        const notification = document.querySelector(".notification"),
            progress = document.querySelector(".progress");

        notification.classList.add("active");
        progress.classList.add("active");
    }

    function sendEmail(e) {

        e.preventDefault();

        emailjs.sendForm('service_ucgp9up', 'template_gaunrmaxx', form.current, 'G01cd27xw3PTY-r6j')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        e.target.reset();
    }

  return (
    <>


            <div id='kontaktContent'>

                <div className="notification">
                    <div className="notification-content">
                        <div className='message-success'>
                            <FaCheck className='checkMark'/>
                            <span>Nachricht erfolgreich abgesendet!</span>
                        </div>
                    </div>

                    <div className='progress'></div>
                </div>

                <h1 id='title'>Kontakt</h1>
                <p className='inhalt'>Bei Fragen, Anregungen oder Kritik wende dich gerne über unser Kontaktformular an uns.</p>
                <p className='inhalt'><b>Bitte beachte, dass die mit einem * gekennzeichneten Felder ausgefüllt sein müssen.</b></p>
            
                <form id='contactForm' ref={form} onSubmit={sendEmail}>
                    <input type='email' name='email' placeholder='E-Mail*' required />
                    <br></br>
                    <input type='text' name='name' placeholder='Name*' required />
                    <br></br>
                    <input type='tel' name='telefon' placeholder='Telefon' />
                    <br></br>
                    <input type='text' name='kartennummer' placeholder='Kartennummer' />
                    <br></br>
                    <select id='empfaenger' name='empfaenger' placeholder='Empfänger*' required>
                        <option value='Ticketshop'>Ticketshop</option>
                        <option value='Firmen-Service'>Firmen-Service</option>
                        <option value='Marketing'>Marketing</option>
                        <option value='Webmaster'>Webmaster</option>
                        <option value='Jobanfrage'>Jobanfrage</option>
                    </select>

                    <br></br>
                    
                    <input type='text' name='betreff' placeholder='Betreff*' min='10' required />
                    <br></br>
                    <textarea id='anliegen' name='anliegen' placeholder='Dein Anliegen*' min='20' max='1000' required></textarea>

                    <br></br>

                    <button id='submit' type='submit' onSubmit={showNotification}>Absenden</button>
                </form>
            </div>

    </>
  )
}

export default Kontakt