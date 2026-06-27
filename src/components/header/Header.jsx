import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import LogoIcon from '../LogoIcon/LogoIcon';
import '../../components/header/header.css';
import '../../components/botaoCadastro/botao.css';

const navItems = [
  { to: '/', label: 'Início', end: true },
  { to: '/cardapio', label: 'Cardápio' },
  { to: '/nossa-historia', label: 'Nossa História' },
  { to: '/contato', label: 'Contato' },
];

export default function Header({ showLoginButton = true }) {
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen((open) => !open);
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header>
      <nav className="logo">
        <div className="nav-brand">
          <LogoIcon />
          <h1 className="logoNome">Lume</h1>
        </div>

        <button
          className="menu-hamburger"
          id="btn-mobile"
          aria-label="Abrir Menu"
          aria-expanded={menuOpen}
          aria-controls="menu-opcoes"
          onClick={toggleMenu}
          type="button"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#3B2314"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>

        <ul className={`opcoes${menuOpen ? ' active' : ''}`} id="menu-opcoes">
          {navItems.map(({ to, label, end }) => (
            <li className="item" key={to}>
              <NavLink to={to} end={end} className={({ isActive }) => (isActive ? 'active' : undefined)} onClick={closeMenu}>
                {label}
              </NavLink>
            </li>
          ))}
          <li className="item mobile-login">
            <Link to="/login" onClick={closeMenu}>
              Login
            </Link>
          </li>
        </ul>

        {showLoginButton && (
          <Link to="/login" className="btn item-btn">
            Login
          </Link>
        )}
      </nav>
    </header>
  );
}
