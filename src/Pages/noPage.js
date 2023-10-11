import NavBar from '../Components/Nav/nav.jsx';

import Footer from '../Components/Footer/footer.jsx';
import './nopage.scss';
export default function NoPage() {
  return (
    <>
      <NavBar />
      <section id="noPage">
        <h1>Ova Stranica ne postoji</h1>

        <h1 className="emoji">😢</h1>
      </section>

      <Footer />
    </>
  );
}
