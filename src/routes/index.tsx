import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

import Home from '../pages/Home';
import Login from '../pages/Login';
import Consultas from '../pages/Consultas';
import Exames from '../pages/Exames';
import Cadastro from '../pages/Cadastro';
import Contato from '../pages/Contato';
import Faq from '../pages/Faq';
import Sobre from '../pages/Sobre';
import Integrantes from '../pages/Integrantes';

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen bg-slate-50">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/consultas" element={<Consultas />} />
            <Route path="/exames" element={<Exames />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/integrantes" element={<Integrantes />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default AppRoutes;
