import './Besuchsbedingungen.css';
import { FaAngleDown } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import { useRef } from 'react';

const Besuchsbedingungen = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    const scrollTo = (element) => {
        scroll.scrollTo(element);
    }


  return (
    <>
        <section className='ContentContainer'>
            <h1 id='headTitle'>Besuchsbedingungen</h1>
            <div className='content'>
                <p className='einfuehrung'>Wir freuen uns, Sie zu einem Kinobesuch bei uns begrüßen zu können. Für Ihren Besuch und den Erwerb von Kinotickets oder Gutscheinen in den GaunrmaXX-Filmtheatern gelten einige Regeln, die Sie der nachstehenden Darstellung entnehmen könne</p>
            </div>

        </section>

        <section className='CContainerWhite' id='section2'>

        <div id='backHome' onClick={toggleHome}>
            <FaAngleDown id='goBack' className='bounce-5' />
        </div>

            <h2 className='paragraph'>§ 1 WOFÜR GELTEN DIE BESUCHSBEDINGUNGEN?</h2>
            <div className='paragraphContent'>
                <p className='textarea'>(1) Diese Allgemeinen Bedingungen für Ihren Kinobesuch (kurz „Besuchsbedingungen“) gelten für den Kauf, den Erwerb sowie für die Verwendung von Tickets und Gutscheinen für die unter § 10 näher bezeichneten GaunrmaXX-Filmtheater</p>
                <p className='textarea'>(2) Diese Besuchsbedingungen gelten ergänzend, wenn Sie Ihr Kinoticket über das Internet, für die außerdem die jeweiligen bei Bestellung akzeptierten Allgemeinen Geschäftsbedingungen gelten, gekauft haben. </p>
            </div>

            <h2 className='paragraph'>§ 2 MIT WEM UND WIE SCHLIESSEN SIE EINEN VERTRAG</h2>
            <div className='paragraphContent'>
                <p className='textarea'>(1) Verträge über den Erwerb von Kinotickets oder Gutscheinen für ein GaunrmaXX-Filmtheater kommen mit der Gesellschaft zustande, die das jeweilige GaunrmaXX-Filmtheater betreibt. Die einzelnen Betreibergesellschaften der GaunrmaXX-Filmtheater sind in § 10 dieser Besuchsbedingungen aufgeführt</p>
                <p className='textarea'>(2) Bei Erwerb der Tickets oder Gutscheine an einer Kartenkasse kommt der Kinoeintrittsvertrag bzw. der Gutscheinkaufvertrag durch Entgegennahme der Tickets bzw. des Gutscheins an der Kinokasse zustande, bei Erwerb eines Tickets an den GaunrmaXX Ticketautomaten durch Auswurf der Tickets aus dem Automaten, wenn der Vertragsschluss nicht bereits vorher elektronisch erfolgt ist. Dies gilt gleichermaßen für Ticketerwerbe gegen Bezahlung, gegen Aushändigung von Gutscheinen oder Freikarten, gegen Vorlage anderweitiger Erwerbsberechtigungen wie etwa Jahreskarten, Gold- und SilverCards, Betriebsausweisen sowie für Ticketerwerbe mit freiem Eintritt.</p>
            </div>

            <h2 className='paragraph'>§ 3 IN WELCHEN FÄLLEN UND WIE KÖNNEN TICKETS ZURÜCKGEGEBEN WERDEN?</h2>
            <div className='paragraphContent'>
                <p className='textarea'>(1) Mit Erwerb der Kinotickets entsteht zwischen Ihnen und GaunrmaXX ein verbindlicher Vertrag. GaunrmaXX ist berechtigt, aus Kulanz und im eigenen Ermessen Kinotickets bis zum Beginn der jeweiligen Vorstellung zurückzunehmen und den Kaufpreis zu erstatten. Ein Anspruch auf Rückgabe des Kinotickets besteht nur dann, wenn die Vorführung nicht stattfindet, vor dem Abspann abgebrochen wird oder soweit der nachfolgende Absatz ein Rückgaberecht vorsieht. </p>
                <p className='textarea'>(2) GaunrmaXX behält sich geringfügige Verschiebungen der Anfangszeiten und Änderungen des Kinosaals vor. Änderungen des Kinosaals sind ausgeschlossen, wenn die saalgebundenen Sonderleistungen Gaunrr Motion, Premium Seats, First Class oder vergleichbare Sonderleistungen vereinbart sind, soweit nicht die jeweilige Sonderleistung in einem anderen Saal angeboten und die Vorstellung in diesen Saal verlegt wird. Im Fall von Verschiebungen und Änderungen behalten Tickets ihre Gültigkeit, gegebenenfalls werden neue Plätze zugewiesen. Eine Rückgabe von Tickets gegen Erstattung des Kaufpreises ist bei Verschiebungen von mehr als 30 Minuten möglich.</p>
                <p className='textarea'>(3) Liegen die Voraussetzungen eines Rückgaberechts vor, erfolgen Rückerstattungen nur gegen Vorlage des Originalkinotickets und – soweit kein Rückgaberecht wegen eines vorzeitigen Abbruchs der Vorführung vorliegt – nur vor Vorstellungsbeginn. Bei Verlust wird kein Ersatz geleistet. Eine Erstattung des gezahlten Kaufpreises erfolgt ausschließlich in der Form der vorherigen Bezahlung. GaunrmaXX ist berechtigt, soweit infolge Kartenzahlung möglich, die Identität von ursprünglichem Ticketerwerber und Rückgebendem anhand von amtlichen Ausweisdokumenten zu prüfen. Die Rückerstattung ist bei fehlendem Nachweis der Identität, den der Kinobesucher durch amtliche Ausweispapiere oder andere geeignete Mittel zu erbringen berechtigt ist, aus Gründen der Missbrauchsprävention ausgeschlossen.</p>
            </div>

            <h2 className='paragraph'>§ 4 WELCHE ALLGEMEINEN RECHTE UND PFLICHTEN GELTEN IM KINO?</h2>
            <div className='paragraphContent'>
                <p className='textarea'>(1) Zum Besuch einer Vorstellung müssen Sie für die gesamte Dauer des Besuchs im Besitz eines gültigen Kinotickets sein. Bei Zutritt zu einer Vorstellung in einen GaunrmaXX-Filmtheater ohne gültiges Kinoticket wird ein erhöhtes Eintrittsgeld in Höhe von 80,00 EUR erhoben.</p>
                <p className='textarea'>(2) <b><i>Zum Schutz der Kinder ist Personen unter drei Jahren der Zutritt zu Kino-Vorstellungen nicht gestattet.</i></b> Kindern bis zum vollendeten zehnten Lebensjahr ist der Zutritt nur in Begleitung einer geeigneten Begleitperson gestattet. Die Begleitperson ist zur ständigen Beaufsichtigung des Kindes verpflichtet. Die Gaunrrex-Rutsche, die Gaunrrex-Kinderkiste und vergleichbare Einrichtungen werden auf eigene Gefahr benutzt. Die an den Geräten aushängenden Gebrauchsanweisungen sind unbedingt zu beachten. Eltern und Begleitpersonen haben hierauf für die von ihnen beaufsichtigten Kinder Acht zu geben. GaunrmaXX verantwortet nicht die Beaufsichtigung spielender Kinder.</p>
                <p className='textarea'>(3) Kinder und Jugendliche erhalten nur Zutritt zu Filmvorführungen, die für ihr jeweiliges Alter von der Freiwilligen Selbstkontrolle der Filmwirtschaft (FSK) freigegeben wurden und zu den rechtlich vorgesehenen Zeiten beendet sind. Es ist nicht erlaubt, Kinder in Filme mit einer ungeeigneten FSK-Freigabe mitzunehmen. Auszüge aus dem geltenden Jugendschutzgesetz und die Altersfreigabe unserer Filme sind im Foyer des jeweiligen GaunrmaXX-Filmtheaters ausgehängt. Bestehen Zweifel über das Alter, ist GaunrmaXX verpflichtet und berechtigt, das Alter des Kinobesuchers zu überprüfen. Bei fehlendem Altersnachweis ist der Zutritt ausgeschlossen.  </p>
                <p className='textarea'>(4) Die Theaterleitung und die Mitarbeiter üben das Hausrecht im jeweiligen GaunrmaXX-Filmtheater aus. Im Interesse der Sicherheit sind Sie verpflichtet, bei Gefahr den Anweisungen der Mitarbeiter Folge zu leisten. Fluchtwege sind frei zu halten.</p>
                <p className='textarea'>(5) Stark alkoholisierte oder anderweitig berauschte Besucher sind nicht berechtigt, GaunrmaXX-Filmtheater zu betreten oder sich darin aufzuhalten und können des Hauses verwiesen werden. Eine Erstattung des Eintrittspreises erfolgt in diesem Fall nicht.</p>
                <p className='textarea'>(6) Jedes Ticket berechtigt ausschließlich zum Besuch der auf dem Ticket aufgeführten Vorstellung(en). </p>
                <p className='textarea'>(7) Kommerzielle, künstlerische oder sportliche Aktivitäten sind im und am Kinosaal sowie in allen GaunrmaXX-Filmtheatern nur nach Zustimmung von GaunrmaXX gestattet. Die Nutzung von Skateboards, Inlineskates, Tretrollern und sonstigen Spiel- und Sportgeräten ist in allen GaunrmaXX-Filmtheatern untersagt. Ab Vorstellungsbeginn sind Mobiltelefone auszuschalten. Störungen sind ebenso zu unterlassen wie die Belästigung oder Diskriminierung anderer Gäste oder des Personals. </p>
                <p className='textarea'>(8) Erhebliche und schuldhafte Verstöße gegen gesetzliche Bestimmungen sowie §§ 4, 5 oder 6 dieser Besuchsbedingungen können mit einem Verweis aus dem jeweiligen GaunrmaXX-Filmtheater ohne Erstattung des Eintrittspreises und mit Hausverbot geahndet werden.</p>
                <p className='textarea'>(9) GaunrmaXX kann den Zutritt insbesondere dann verweigern, wenn der Aufdruck auf den Karten manipuliert oder beschädigt wurde, soweit dies nicht von GaunrmaXX zu vertreten ist.</p>
                <p className='textarea'>(10) In allen GaunrmaXX-Filmtheatern herrscht Rauchverbot. Auch der Konsum elektronischer Zigaretten und ähnlicher Ersatzstoffe ist untersagt.</p>
            </div>

            <h2 className='paragraph'>§ 5 WAS DÜRFEN SIE NICHT MIT INS KINO NEHMEN?</h2>
            <div className='paragraphContent'>
                <p className='textarea'>(1) Taschen, Koffer, Rucksäcke und ähnliche Behältnisse dürfen aus Sicherheitsgründen nicht mit in den Kinosaal genommen werden und können gegebenenfalls in die dafür vorgesehenen Schließfächer eingeschlossen werden. Eine Ausnahme gilt für Handtaschen und kleine Umhänge- oder Handgelenktaschen.</p>
                <p className='textarea'>(2) Die Mitnahme von selbst mitgebrachten Speisen und Getränken ist nicht gestattet. </p>
                <p className='textarea'>(3) Die Mitnahme von sperrigen oder gefährlichen Gegenständen, Feuerwerkskörpern oder sonstigen pyrotechnischen Gegenständen, Waffen und gefährlichen Werkzeugen, Sprühdosen, Lärminstrumenten, Laserstiften, Flaschen, Dosen, Rauschmitteln und Tieren – mit Ausnahme solcher, die zur Unterstützung bei körperlicher oder geistiger Behinderung erforderlich sind – ist nicht gestattet. </p>
                <p className='textarea'>(4) Die Mitnahme von Bild-, Film- und Tonaufnahmegeräten ist mit Ausnahme von Mobiltelefonen nicht gestattet.</p>
            </div>

            <h2 className='paragraph'>§ 6 SIND TON- UND/ODER BILDAUFNAHMEN IM KINO VERBOTEN?</h2>
            <div className='paragraphContent'>
                <p className='textarea'>(1) Es ist nicht gestattet, Ton-, Bild-, oder Filmaufnahmen der Filmvorführungen oder der Kinoräumlichkeiten zu erstellen oder solche Aufnahmen ganz oder teilweise über das Internet oder andere Medien (einschließlich Mobilfunk) zu übertragen oder zu verbreiten oder andere Personen bei derartigen Aktivitäten zu unterstützen. Zuwiderhandlungen werden zivil- und strafrechtlich verfolgt.  </p>
                <p className='textarea'>(2) Für jeden schuldhaften Verstoß gegen das vorgenannte Verbot im Hinblick auf Filmvorführungen kann GaunrmaXX die Zahlung einer Vertragsstrafe von bis zu 12.000,00 EUR verlangen. Die konkrete Höhe der Vertragsstrafe richtet sich nach dem Gewicht des Verstoßes. Bei der Bestimmung des Gewichts werden die Art des Verstoßes (insbesondere, ob Aufnahmen hergestellt oder diese auch übertragen oder verbreitet wurden oder lediglich ein Dritter bei diesen Handlung unterstützt wurde) und der Umfang (insbesondere die Länge der hergestellten und/oder verbreiteten Aufnahmen und das Medium, über das die Aufnahmen verbreitet wurden) berücksichtigt. </p>
            </div>

            <h2 className='paragraph'>§ 7 WELCHE HAFTUNGSBESCHRÄNKUNGEN GELTEN?</h2>
            <div className='paragraphContent'>
                <p className='textarea'>(1) Schadensersatzansprüche im Zusammenhang mit dem Ticketkauf und/oder Kinobesuch sind - gleich aus welchem Rechtsgrund - ausgeschlossen, soweit GaunrmaXX oder seine Erfüllungsgehilfen nicht vorsätzlich oder grob fahrlässig gehandelt haben. </p>
                <p className='textarea'>(2) Die vorstehenden Beschränkungen gelten nicht für Schäden aus der Verletzung des Lebens, des Körpers oder der Gesundheit sowie in Fällen schuldhafter Verletzung wesentlicher Vertragspflichten. Wesentliche Vertragspflichten sind solche, deren Erfüllung für die Erreichung des Ziels des Vertrages erforderlich ist oder die eine Durchführung des Vertrages erst ermöglichen.</p>
            </div>

            <h2 className='paragraph'>§ 8 WELCHE BEDINGUNGEN GELTEN FÜR DIE INANSPRUCHNAHME VON ERMÄSSIGUNGEN</h2>
            <div className='paragraphContent'>
                <p className='textarea'>Der Erwerb von ermäßigten Kinotickets und der Zutritt mit ermäßigten Tickets sind nur unter Vorlage des die Ermäßigung begründenden Nachweises gestattet. Nachträgliche Erstattungen sind ausgeschlossen.  </p>
            </div>

            <h2 className='paragraph'>§ 9 SCHLUSSBESTIMMUNGEN</h2>
            <div className='paragraphContent'>
                <p className='textarea'>(1) Unternehmer im Sinne von § 14 BGB sind zur Aufrechnung nur dann berechtigt, wenn die Forderung rechtskräftig festgestellt oder unbestritten ist, soweit es sich nicht um gegenseitig voneinander abhängige Forderungen handelt. Für Verbraucher gelten diese Beschränkungen nicht.</p>
                <p className='textarea'>(2) Die Vertragssprache ist ausschließlich deutsch. Andere Sprachen stehen für den Vertragsschluss nicht zur Verfügung.</p>
                <p className='textarea'>(3) Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts.</p>
                <p className='textarea'>(4) Ist der Kunde Kaufmann, ist ausschließlicher Gerichtsstand für alle Streitigkeiten im Zusammenhang mit diesem Vertrag Musterstadt.</p>
                <p className='textarea'>(5) GaunrmaXX ist grundsätzlich nicht bereit und verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle nach dem Verbraucherstreitbeilegungsgesetz (VSGB) teilzunehmen.</p>
                <p className='textarea'>(6) Soweit einzelne Bestimmungen der Besuchsbedingungen unwirksam sein sollten, wird dadurch die Geltung der übrigen Bestimmungen nicht berührt.</p>
            </div>
        </section>
    </>
  )
}

export default Besuchsbedingungen