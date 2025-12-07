import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header__container">
        <Link to="/" className="header__logo">
          FinDesktop
        </Link>

        <button 
          className="header__menu-toggle" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>

        <nav className={`header__nav ${isMenuOpen ? 'header__nav--open' : ''}`}>
          <ul className="header__nav-list">
            <li className="header__nav-item">
              <NavLink 
                to="/" 
                className={({ isActive }) => 
                  `header__nav-link ${isActive ? 'header__nav-link--active' : ''}`
                }
                onClick={closeMenu}
              >
                Home
              </NavLink>
            </li>
            <li className="header__nav-item">
              <NavLink 
                to="/getting-started" 
                className={({ isActive }) => 
                  `header__nav-link ${isActive ? 'header__nav-link--active' : ''}`
                }
                onClick={closeMenu}
              >
                Getting Started
              </NavLink>
            </li>
            <li className="header__nav-item">
              <NavLink 
                to="/core-concepts" 
                className={({ isActive }) => 
                  `header__nav-link ${isActive ? 'header__nav-link--active' : ''}`
                }
                onClick={closeMenu}
              >
                Core Concepts
              </NavLink>
            </li>
            <li className="header__nav-item">
              <NavLink 
                to="/configuration" 
                className={({ isActive }) => 
                  `header__nav-link ${isActive ? 'header__nav-link--active' : ''}`
                }
                onClick={closeMenu}
              >
                Configuration
              </NavLink>
            </li>
            <li className="header__nav-item">
              <NavLink 
                to="/extensibility" 
                className={({ isActive }) => 
                  `header__nav-link ${isActive ? 'header__nav-link--active' : ''}`
                }
                onClick={closeMenu}
              >
                Extensibility
              </NavLink>
            </li>
            <li className="header__nav-item">
              <NavLink 
                to="/how-tos" 
                className={({ isActive }) => 
                  `header__nav-link ${isActive ? 'header__nav-link--active' : ''}`
                }
                onClick={closeMenu}
              >
                How-Tos
              </NavLink>
            </li>
            <li className="header__nav-item">
              <NavLink 
                to="/api-reference" 
                className={({ isActive }) => 
                  `header__nav-link ${isActive ? 'header__nav-link--active' : ''}`
                }
                onClick={closeMenu}
              >
                API Reference
              </NavLink>
            </li>
            <li className="header__nav-item">
              <NavLink 
                to="/faq" 
                className={({ isActive }) => 
                  `header__nav-link ${isActive ? 'header__nav-link--active' : ''}`
                }
                onClick={closeMenu}
              >
                FAQ
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
