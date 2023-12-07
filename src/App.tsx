import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./home";
import SupportPage from "./supportPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Home/>}/>
        <Route path='/support' element={ <SupportPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
