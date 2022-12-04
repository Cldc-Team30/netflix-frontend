import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./views/Login";
import {Home} from "./views/Home";
import { useAuth0 } from '@auth0/auth0-react'

export default function App() {
  const { user, isAuthenticated, isLoading } = useAuth0();

  return (
    <>
      {!isAuthenticated && (<BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>)}
      {isAuthenticated && (<BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>)}
    </>
  );
}
