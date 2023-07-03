import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

import FirstPage from './components/Pages/FirstPage/FirstPage';
import OrderPage from './components/Pages/OrderPage/OrderPage';
import SuccessPage from './components/Pages/SuccessPage/SuccessPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' Component={FirstPage}/>
        <Route path='/order/*' Component={OrderPage}/>
        <Route path='/success/*' Component={SuccessPage}/>
      </Routes>
    </div>
  );
}

export default App;

