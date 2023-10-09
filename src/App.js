import React from 'react';

import NavBar from './Components/Nav/nav.jsx';
import Hero from './Components/Hero/hero.jsx';
import Popularno from './Components/Popularno/popularno.jsx';
import './app.scss';
import Novo from './Components/Novo/novo.jsx';
import Map from './Components/Map/map.jsx';

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <Popularno />
      <Map />
      <Novo />
    </>
  );
};

export default App;
