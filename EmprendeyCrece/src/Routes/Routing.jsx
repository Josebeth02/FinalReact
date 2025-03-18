import React, { useState } from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from '../pages/Login';
import PaginaPrincipal from '../Pages/PaginaPrincipal'
import Register from '../Pages/Register'
import Test from "../Pages/test"
import Nav from "../Components/Nav/"
function Routing() {


  return (
      <Router>
        <Routes>
      
                        

                            <Route path="/login" element={<Login/>}/>
                            <Route path="/paginaPrincipal" element={<PaginaPrincipal/>}/>
                            <Route path="/register" element={<Register/>}/>
                            <Route path="/test" element={<Test/>}/>
                            <Route path="/nav" element={<Nav/>}/>

                      
                            
        </Routes>
      </Router>
  );
}

export default Routing