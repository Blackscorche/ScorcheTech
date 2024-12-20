import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Hero from "./components/hero";
import Services from './components/services';
import About from './components/About';
import Footer from './components/Footer';
import Signup from './components/signup'; // Add your Signup component

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Define routes */}
        <Route path="/" element={
          <>
            <Hero />
            <Services />
            <About />
            <Footer />
          </>
        } />
        <Route path="/signup" element={<Signup />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </Router>
  );
}

export default App;
