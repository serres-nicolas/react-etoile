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
      <Nav />
      <body>
        <Routes>
          <Route path="/Leclub" element={<Leclub />} />
          <Route path="/Activite" element={<Activite />} />
          <Route path="/Resultat" element={<Resultat />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </body>
    </>
  );
}

export default App;
