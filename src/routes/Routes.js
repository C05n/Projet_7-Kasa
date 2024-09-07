import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Logement from '../pages/Logement/Logement';
import NotFound from '../pages/NotFound/NotFound';

import Banner from '../components/Banner/Banner';



const AppRoutes = () => {
  const location = useLocation();

  return (
    <Routes>
      <Route path="/" element={
        <>
          <Banner routeData={location} /> 
          <Home /> 
        </>
      }/>

      <Route path="/about" element={
        <>
          <Banner routeData={location} /> 
          <About /> 
        </>
      }/>

      <Route path="/logement/:id" element={<Logement/>} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;