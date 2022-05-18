import Header from '../../components/Navbar';
import Jugendschutz from '../../components/FSK&Jugendsschutz';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjfour,homeObjfive, homeObjsix, homeObjseven, homeObjeight } from '../../components/FSK&Jugendsschutz/Data';
import Footer from '../../components/Footer';

const JugendschutzSite = () => {
  return (
    <>
        <Header />
        <Jugendschutz {...homeObjOne} />
        <Jugendschutz {...homeObjTwo} />
        <Jugendschutz {...homeObjThree} />
        <Jugendschutz {...homeObjfour} />
        <Jugendschutz {...homeObjfive} />
        <Jugendschutz {...homeObjsix} />
        <Jugendschutz {...homeObjseven} />
        <Jugendschutz {...homeObjeight} />
        <Footer />
    </>
  )
}

export default JugendschutzSite