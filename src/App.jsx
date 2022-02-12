import './style/main.sass'
import './style/Header.css'
import './style/Personajes.css'
import './style/Spinner.css'

import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Spinner } from "./components/Spinner";


// las pages cargamos con lazyLoad
const Index = lazy(() => import('./pages/Index'));
const About = lazy(() => import('./pages/About'));
const Personajes = lazy(() => import('./pages/Personajes'));
const Personaje = lazy(() => import('./pages/Personaje'));
const Episodios = lazy(() => import('./pages/Episodios'));
const Locaciones = lazy(() => import('./pages/Locaciones'));

function App() {
  return (
    <div className="container">
      <Router>
        <Header
          title="Rick and Morty API"
        />
        <Routes>
          <Route
            element={
              <Suspense fallback={<Spinner />}>
                <Index />
              </Suspense>}
            exact path="/"
          />
          <Route
            element={
              <Suspense fallback={<Spinner />}>
                <Personajes />
              </Suspense>}
            exact path="/personajes"
          />
          <Route
            element={
              <Suspense fallback={<Spinner />}>
                <Personaje />
              </Suspense>}
            path="/personaje/:id"
          />
          <Route
            element={
              <Suspense fallback={<Spinner />}>
                <About />
              </Suspense>}
            path="/about"
          />
          <Route
            element={
              <Suspense fallback={<Spinner />}>
                <Episodios />
              </Suspense>}
            path="/episodios"
          />
          <Route
            element={
              <Suspense fallback={<Spinner />}>
                <Locaciones />
              </Suspense>}
            path="/locaciones"
          />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;