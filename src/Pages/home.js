import NavBar from '../Components/Nav/nav.jsx';
import Hero from '../Components/Hero/hero.jsx';
import Popularno from '../Components/Popularno/popularno.jsx';

import Novo from '../Components/Novo/novo.jsx';
import Map from '../Components/Map/map.jsx';
import Kategorije from '../Components/Kategorije/kategorije.jsx';
import Footer from '../Components/Footer/footer.jsx';
export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <Kategorije />
      <Popularno />
      <Map />
      <Novo />
      <Footer />
    </>
  );
}
