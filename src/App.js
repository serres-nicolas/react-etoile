import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./styles/App.css";
import Leclub from "./pages/Leclub";
import Nav from "./components/Nav";
import Activite from "./pages/Activite";
import Resultat from "./pages/Resultat";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <body>
        <Nav />
        <Routes>
          <Route path="/Leclub" element={<Activite />} />
          <Route path="/Activite" element={<Leclub />} />
          <Route path="/Resultat" element={<Leclub />} />
          <Route path="/Contact" element={<Leclub />} />
        </Routes>
      </body>
    </>
  );
}

export default App;
