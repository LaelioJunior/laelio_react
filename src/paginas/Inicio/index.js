import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

function Inicio() {
  const produtos = [
    {
      marca: "Nike",
      modelo: "Air Max 90",
      cor: "Branco",
      tamanho: 42,
      preco: 299.99,
      disponivel: true,
      caracteristicas: {
        material: "Couro e tecido",
        solado: "Borracha",
        amortecimento: "Air Max",
        indicadoPara: ["Corrida", "Caminhada"]
      },
      imagens: [
        "https://imgnike-a.akamaihd.net/1300x1300/00931851.jpg"
      ]
    },
    {
      marca: "Adidas",
      modelo: "Ultraboost",
      cor: "Preto",
      tamanho: 44,
      preco: 349.99,
      disponivel: true,
      caracteristicas: {
        material: "Malha",
        solado: "Borracha Continental",
        amortecimento: "Boost",
        indicadoPara: ["Corrida", "Treino"]
      },
      imagens: [
        "https://assets.adidas.com/images/w_600,f_auto,q_auto/fbaf991a78bc4896a3e9ad7800abcec6_9366/Tenis_Ultraboost_22_Preto_GZ0127_01_standard.jpg"
      ]
    }
  ];

  return (
    <div className="inicio-container">
      {produtos.map((produto, index) => (
        <Link key={index} to={`/produto/${index}`}>
          <div className="card">
            <h2>{produto.marca} - {produto.modelo}</h2>
            <img src={produto.imagens[0]} alt={`${produto.marca} - ${produto.modelo}`} />
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Inicio; 