import React from 'react';
import { useParams } from 'react-router-dom';
import './index.css';

function ProdutoDetalhes() {
  const {Tênis} = useParams();

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
    <div className="produto-container">
      <h2 className="produto-titulo">{Tênis}</h2>
      {produtos.map((produto, index) => (
        <div key={index} className="produto-item">
          <h3>{produto.marca} - {produto.modelo}</h3>
          <div className="produto-info">
            <p>Cor: {produto.cor}</p>
            <p>Tamanho: {produto.tamanho}</p>
            <p>Preço: R${produto.preco.toFixed(2)}</p>
            <p>Disponível: {produto.disponivel ? 'Sim' : 'Não'}</p>
          </div>
          <div className="produto-caracteristicas">
            <h4>Características:</h4>
            <ul>
              <li>Material: {produto.caracteristicas.material}</li>
              <li>Solado: {produto.caracteristicas.solado}</li>
              <li>Amortecimento: {produto.caracteristicas.amortecimento}</li>
              <li>Indicado para: {produto.caracteristicas.indicadoPara.join(', ')}</li>
            </ul>
          </div>
          <h4>Imagens:</h4>
          <div className="produto-imagens">
            {produto.imagens.map((imagem, index) => (
              <img
                key={index}
                src={imagem}
                alt={`Imagem ${index + 1}`}
                className="produto-imagem"
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProdutoDetalhes;
