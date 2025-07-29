// import { useState } from 'react' // remove if not used
import './App.css'; // or './index.css' if that's where your styles are
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Analytics from './components/Analytics';
import Newsletter from './components/Newsletter';
import Cards from './components/cards';   // ← note the capital C
import Footer from './components/Footer';

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Analytics />
      <Newsletter />
      <Cards />
      <Footer />
    </div>
  );
}
