import { useState, type ReactNode } from 'react';
import Sidebar from './Sidebar';
import './MainLayout.css';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="main-layout">
      <button 
        className="mobile-menu-toggle" 
        onClick={toggleMobileMenu}
        aria-label="Toggle navigation menu"
      >
        <span className={`hamburger ${isMobileMenuOpen ? 'hamburger--open' : ''}`}>
          <span></span>
          <span></span>
          <span></span>
        </span>
      </button>
      
      <Sidebar isOpen={isMobileMenuOpen} onClose={closeMobileMenu} />
      
      {isMobileMenuOpen && (
        <div className="mobile-overlay" onClick={closeMobileMenu}></div>
      )}
      
      <div className="main-layout__wrapper">
        <main className="main-layout__content">
          {children}
        </main>
        <footer className="main-layout__footer">
          <p>© 2024 FinDesktop. MIT License.</p>
        </footer>
      </div>
    </div>
  );
};

export default MainLayout;
