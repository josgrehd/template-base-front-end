import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css';
import injectContext from './app/ContextStore/appContext';
import { Index } from './Pages/Home/Components';
import { Vistalogin } from './Pages/Home/vistas/vistalogin';
import { VistaPersonal } from './Pages/Home/vistas/vistaPersonal';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index/>}/>
        <Route path='/login' element={<Vistalogin/>}/>
        <Route path='/vales' element={<VistaPersonal/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default injectContext(App) ;
