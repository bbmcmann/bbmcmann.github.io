import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Contact from './components/Contact';
import About from './components/About';
import Eleven from './components/Eleven';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/about" element={<About />} /> 
          <Route path="/projects" element={<Projects />} /> 
          <Route path="/contact" element={<Contact />} /> 
          <Route path="/11" element={<Eleven />} /> 
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
