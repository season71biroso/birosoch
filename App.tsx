import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Ministry from './pages/Ministry';
import News from './pages/News';
import Contact from './pages/Contact';
import Pilgrimage from './pages/Pilgrimage';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="ministry" element={<Ministry />} />
          <Route path="news" element={<News />} />
          <Route path="contact" element={<Contact />} />
          <Route path="pilgrimage" element={<Pilgrimage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;