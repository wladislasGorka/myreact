import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import Accueil from './components/Accueil';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <nav className='nav'>
        <h1 className='siteTitle'>React</h1>
        <ul>
          <li><Link to="/">Acceuil</Link></li>
          <li><Link to="/About">A propos</Link></li>
          <li><Link to="/Contact">Contact</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Accueil/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/Contact" element={<Contact/>} />
      </Routes>
    </Router>
  );
}

export default App;
