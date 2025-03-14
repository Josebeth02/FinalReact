import React, { useState } from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from '../pages/Login';
import PaginaPrincipal from '../pages/PaginaPrincipal';
import Register from '../pages/Register';

function Routing() {


  return (
      <Router>
        <Routes>
      
                        

                            <Route path="/login" element={<Login/>}/>
                            <Route path="/paginaPrincipal" element={<PaginaPrincipal/>}/>
                            <Route path="/register" element={<Register/>}/>

                      
                            
        </Routes>
      </Router>
  );
}

export default Routing