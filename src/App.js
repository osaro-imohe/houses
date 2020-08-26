/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import './App.css';
import Navigation from './Components/Navigation';
import Home from './Components/Home';
import { GlobalContextProvider } from './Context/GlobalContext';

function App() {
  return (
    <GlobalContextProvider>
      <div className="App">
        <Navigation />
        <Home />
      </div>
    </GlobalContextProvider>
  );
}

export default App;
