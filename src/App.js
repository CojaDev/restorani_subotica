import React from 'react';

import NavBar from './Components/Nav/nav.jsx';
import Hero from './Components/Hero/hero.jsx';
import Popularno from './Components/Popularno/popularno.jsx';
import './app.scss';

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <Popularno />
    </>
  );
};

export default App;
