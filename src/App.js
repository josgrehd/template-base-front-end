import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css';
import injectContext from './app/ContextStore/appContext';
import { Index } from './Pages/Home/Components';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default injectContext(App) ;
