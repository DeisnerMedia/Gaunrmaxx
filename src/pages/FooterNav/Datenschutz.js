import Header from '../../components/Navbar';
import DatenschutzRef from '../../components/Datenschutz';
import { homeObjOne, homeObjTwo, homeObjThree } from '../../components/Datenschutz/Data';
import Footer from '../../components/Footer';

const Datenschutz = () => {
  return (
    <>
        <Header />
        <DatenschutzRef {...homeObjOne} />
        <DatenschutzRef {...homeObjTwo} />
        <DatenschutzRef {...homeObjThree} />
        <Footer />
    </>
  )
}

export default Datenschutz