import React from 'react'
import { Navigate, Outlet } from "react-router-dom";

function RutasPrivadas() {
    const PrivateRoute = ({ isAuthenticated }) => {
        return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
      };
    }

export default RutasPrivadas