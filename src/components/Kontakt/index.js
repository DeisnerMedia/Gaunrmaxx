import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

import './Kontakt.css';

const Kontakt = () => {
  return (
    <>
        <Navbar />
            <div id='kontaktContent'>
                <h1 id='title'>Kontakt</h1>
                <p class='inhalt'>Bei Fragen, Anregungen oder Kritik wende dich gerne über unser Kontaktformular an uns.</p>
                <p class='inhalt'><b>Schau gern vorher In unsere <a className='refer' to='/faq'>FAQs</a>, ob dein Anliegen dort schon beantwortet wird.</b></p>
                <p class='inhalt'>Bitte beachte, dass die mit einem * gekennzeichneten Felder ausgefüllt sein müssen.</p>
            
                <form id='contactForm' action='' method='POST'>
                    <input type='email' name='email' placeholder='E-Mail*' required />
                    <br></br>
                    <input type='text' name='name' placeholder='Name*' required />
                    <br></br>
                    <input type='tel' name='telefon' placeholder='Telefon' />
                    <br></br>
                    <input type='text' name='kartennummer' placeholder='Kartennummer' />
                    <br></br>
                    <select id='empfaenger' name='Empfänger' placeholder='Empfänger*' required>
                        <option value='Ticketshop'>Ticketshop</option>
                        <option value='Firmen-Service'>Firmen-Service</option>
                        <option value='Marketing'>Marketing</option>
                        <option value='Webmaster'>Webmaster</option>
                        <option value='Jobanfrage'>Jobanfrage</option>
                    </select>

                    <br></br>
                    
                    <input type='text' name='betreff' placeholder='Betreff*' min='10' required />
                    <br></br>
                    <textarea id='betreff' name='betreff' placeholder='Dein Anliegen*' min='20' required></textarea>

                    <br></br>

                    <button id='submit' type='submit'>Absenden</button>
                </form>
            </div>
        <Footer />
    </>
  )
}

export default Kontakt