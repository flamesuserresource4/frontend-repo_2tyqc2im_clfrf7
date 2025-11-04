import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import ModulesGrid from './components/ModulesGrid.jsx';
import DashboardHighlights from './components/DashboardHighlights.jsx';
import SiteFooter from './components/SiteFooter.jsx';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <ModulesGrid />
        <DashboardHighlights />
      </main>
      <SiteFooter />
    </div>
  );
}

export default App;
