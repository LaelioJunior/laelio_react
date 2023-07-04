import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from './paginas/Inicio';
import Contato from './paginas/Contato';
import ProdutoDetalhes from './paginas/ProdutosDetalhes';
import Menu from './componentes/Menu';
import './App.css';

function App() {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/produto/:id" element={<ProdutoDetalhes />} />
      </Routes>
    </Router>
  );
}

export default App; 