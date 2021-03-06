import React from 'react';

import {Routes, Route } from 'react-router-dom';
import '../styles/App.css';

import Country from '../pages/Country'
import TActivity from '../pages/TActivity.jsx'
import Home from '../pages/Home.jsx'
import LandingPage from '../pages/LandingPage.jsx'

function App() {
  return (<> 
    <Routes>
      <Route exact path="/country/:identity" element={<Country/>}/>
      <Route exact path="/tactivity" element={<TActivity/>}/>
      <Route exact path="/home" element={<Home/>}/>
      <Route exact path="/" element={<LandingPage/>}/>
    </Routes>
  
  </>);
}

export default App;