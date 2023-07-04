import React from 'react';
import './index.css';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

function Contato() {
  return (
    <div className="contato-container">
      <h1>Redes Sociais </h1>
      <div className="redes-sociais">
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
      </div>
    </div>
  );
}

export default Contato;
