import React from 'react';
import DataVal from './Components/Data.js';
import IbmStock from './Components/IbmStock';
import StockVal from './Components/StockList.js'
import HomePage from './Components/HomePage.js'
import './App.css';
import { BrowserRouter } from 'react-router-dom';


function App() {
    return (
        <BrowserRouter>
            <HomePage />
  </BrowserRouter>
  );
}

export default App;
