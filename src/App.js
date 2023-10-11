import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Pages/home';
import Restorani from './Pages/restorani';
import Profilna from './Pages/profilna';
import ZaVlasnike from './Pages/zaVlasnike';
import NoPage from './Pages/noPage';
import './app.scss';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/restorani" element={<Restorani />} />
          <Route path="/profilna" element={<Profilna />} />
          <Route path="/ZaVlasnike" element={<ZaVlasnike />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
