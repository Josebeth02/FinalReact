import React, { useState } from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from '../pages/Login';
import PaginaPrincipal from '../Pages/PaginaPrincipal'
import Register from '../Pages/Register'
import Test from '../Pages/Test'
import InformacionPag from "../Pages/InformacionPag"
import ContactoPag from '../Pages/ContactoPag'
import Dama from '../Pages/Dama'
import Caballero from '../Pages/Caballero'
import Niños from '../Pages/Niños'
import Accesorios from '../Pages/Accesorios'
import Administrador from '../Pages/Administrador'
import Carro from '../Pages/Carro'
import PrivateRoute from '../Components/Rutas Privadas/PrivateRoute';


function Routing() {


  return (
      <Router>
        <Routes>
      
      

          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/" element={<PaginaPrincipal/>}/>
          <Route path="/test" element={<Test/>}/>
          <Route path="/informacionPag" element={<InformacionPag/>}/> 
          <Route path="/contactoPag" element={<ContactoPag/>}/> 
          <Route path="/dama" element={<Dama/>}/>
          <Route path="/caballero" element={<Caballero/>}/>
          <Route path="/niños" element={<Niños/>}/>
          <Route path="/accesorios" element={<Accesorios/>}/>
          <Route path="/administrador" element={<Administrador/>}/> 
          <Route path="/carro" element={<Carro/>}/> 
          <Route path="/admin" element={ <PrivateRoute element={<Administrador />}/>} />
          
                            
                      
                            
        </Routes>
      </Router>
  );
}

export default Routing