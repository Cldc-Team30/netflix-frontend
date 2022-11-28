import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./views/Login";
import {Home} from "./views/Home";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/signin" element={<Login />} />
        <Route exact path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
