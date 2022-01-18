import './main.sass'
import './components/Header.css'
import './components/Personajes.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Header } from "./components/Header";
import { Personajes } from './components/Personajes';
import { Personaje } from './components/Personaje';
import { Footer } from './components/Footer';
import { Index } from './components/Index';
import { About } from './components/About';
import { Episodios } from './components/Episodios';
import { Locaciones } from './components/Locaciones';

function App() {
  return (
    <div className="container">
      <Router>
        <Header
          title="Rick and Morty API"
        />
        <Routes>
          <Route exact path="/" element={<Index />} />
          <Route exact path="/personajes" element={<Personajes />} />
          <Route path="/personaje/:id" element={<Personaje />} />
          <Route path="/about" element={<About />} />
          <Route path="/episodios" element={<Episodios />} />
          <Route path="/locaciones" element={<Locaciones />} />
        </Routes>
      </Router>

      <Footer />

    </div>
  );
}

export default App;
