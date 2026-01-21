import './App.css'
import "tailwindcss";
import { Routes, Route } from "react-router-dom"
import Layout from "./layout/layout"
import Home from './pages/home';
import HowToPlay from './pages/howtoplay';
import Roles from './pages/roles';
import React from 'react';
import TextPage from './pages/appads';

function App() {

  return (
    <>
      <React.StrictMode>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/howtoplay" element={<HowToPlay />} />
            <Route path="/roles" element={<Roles />} />
            <Route path="/app-ads.txt" element={<TextPage />} />
          </Route>
        </Routes>
      </React.StrictMode>
    </>
  )
}

export default App
