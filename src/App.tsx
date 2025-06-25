import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import TimelinePage from './pages/TimelinePage';
import YearDetailPage from './pages/YearDetailPage';
import GalleryPage from './pages/GalleryPage';
import CampusMapPage from './pages/CampusMapPage';
import TestimonialsPage from './pages/TestimonialsPage';
import ResourcesPage from './pages/ResourcesPage';
import AboutPage from './pages/AboutPage';
import './styles/App.css';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/timeline" element={<TimelinePage />} />
            <Route path="/timeline/:year" element={<YearDetailPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/map" element={<CampusMapPage />} />
            <Route path="/testimonials" element={<TestimonialsPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;