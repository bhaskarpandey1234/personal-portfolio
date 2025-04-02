import { useState } from 'react';
import './App.css';
import { LoadingScreen} from './components/LoadingScreen';
import "./index.css";
import {Navbar} from './components/Navbar';
import {MobileMenu} from './components/MobileMenu';
import {Home} from './components/sections/Home';
import {About} from './components/sections/About';
import {Projects} from './components/sections/Projects';
import { Contact } from './components/sections/Contact';
import DeveloperInfo from './components/DeveloperInfo';

function App() {

  const [isLoaded, setIsLoaded]=useState(false);
  const [menuOpen, setMenuOpen]=useState(false);

  return (
    <>
    {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} /> }
    {" "}
    <div  className={`min-h-screen transition-opacity duration-700
      ${isLoaded ?"opacity-100": "opacity-0"} bg-black text-gray-100`}
      >
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Home/>
        <About/>
        <Projects/>
        <Contact/>
        <DeveloperInfo/>
        <footer className="bg-gray-900 text-white py-8">
  <div className="max-w-4xl mx-auto text-center">
    <p className="text-sm text-gray-400 mt-6">© 2025 <b>Portfolio</b> – All Rights Reserved</p>
  </div>
</footer>
      </div>
    </>
  )
}

export default App;
