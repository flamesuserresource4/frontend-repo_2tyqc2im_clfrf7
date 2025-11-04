import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import ModulesGrid from './components/ModulesGrid.jsx';
import SiteFooter from './components/SiteFooter.jsx';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-sky-50 text-slate-900 antialiased">
      <Navbar />
      <main>
        <Hero />
        <ModulesGrid />
      </main>
      <SiteFooter />
    </div>
  );
}

export default App;
