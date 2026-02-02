import React from 'react';
import Hero from './components/Hero';
import Menu from './components/Menu';
import StoreLocations from './components/StoreLocations';
import FadeIn from './components/FadeIn';

function App() {
  return (
    <div className="min-h-screen bg-background text-gray-900 font-sans">
      <nav className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-primary">YANA BAKERY</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">Beranda</a>
              <a href="#menu" className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">Menu</a>
              <a href="#locations" className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">Lokasi</a>
            </div>
          </div>
        </div>
      </nav>

      <FadeIn>
        <Hero />
      </FadeIn>

      <FadeIn delay={0.2} direction="up">
        <Menu />
      </FadeIn>

      <FadeIn delay={0.4} direction="up">
        <StoreLocations />
      </FadeIn>

      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
          <div className="mt-8 md:mt-0 md:order-1">
            <p className="text-center text-base text-gray-500">
              &copy; {new Date().getFullYear()} YANA BAKERY. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
