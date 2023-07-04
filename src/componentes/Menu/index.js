import { Link } from 'react-router-dom';
import './index.css';

function Menu() {
  return (
    <nav className="menu-container">
      <ul className="menu-list">
        <li className="menu-item">
          <Link to="/" className="menu-link">Início</Link>
        </li>
        <li className="menu-item">
          <Link to="/contato" className="menu-link">Contato</Link>
        </li>
        {/* <li className="menu-item">  */}
          {/* <Link to="/produto/:id" className="menu-link">Produtos</Link> */}
        {/* </li> */}
      </ul>
    </nav>
  );
}

export default Menu; 