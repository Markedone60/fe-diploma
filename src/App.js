import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import FirstPage from './components/Pages/FirstPage/FirstPage';
import OrderPage from './components/Pages/OrderPage/OrderPage';

function App() {
  return (
    <Router className="App">
      <Routes>
        <Route path='/' Component={FirstPage}/>
        <Route path='/order/*' Component={OrderPage}/>
      </Routes>
    </Router>
  );
}

export default App;

