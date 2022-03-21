import React from 'react';
import './StyleSheets/Public/App.css';
import { NavBar } from "./Components/NavBar";
import { Footer } from "./Components/Footer";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { About } from "./Components/Pages/About"
import { Projects } from "./Components/Pages/Projects"
import { Rutgers } from "./Components/Pages/Rutgers"
import { Learning } from "./Components/Pages/Learning"
import { Contact } from "./Components/Pages/Contact"
import { NoPage } from "./Components/Pages/NoPage"

function App() {
  return (
      <BrowserRouter>
        <div className="layout">
          <a className="skip-nav-link" href="#main">
            Skip Navigation
          </a>
          <header>
            <NavBar/>
          </header>
          <main id="main" className="main-section">
            <Routes>
              <Route path="/">
                <Route path="/" element={<Navigate replace to="/About"/>}/>
                <Route path="About" element={<About />}/>
                <Route path="Projects" element={<Projects />}/>
                <Route path="Rutgers" element={<Rutgers />}/>
                <Route path="Learn" element={<Learning />}/>
                <Route path="Contact" element={<Contact />}/>
                <Route path="*" element={<NoPage />}/>
              </Route>
            </Routes>
          </main>
          <Footer/>
        </div>
      </BrowserRouter>
  );
}

export default App;
