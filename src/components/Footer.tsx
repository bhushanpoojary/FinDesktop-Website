import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__content">
          <div>
            <div className="footer__logo">FinDesktop</div>
            <p className="footer__tagline">Built for modern trading desktops</p>
          </div>
          
          <div className="footer__links">
            <a 
              href="https://github.com/yourusername/findesktop" 
              className="footer__link"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a 
              href="https://github.com/yourusername/findesktop/issues" 
              className="footer__link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Issues
            </a>
            <a 
              href="https://github.com/yourusername/findesktop/discussions" 
              className="footer__link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Discussions
            </a>
          </div>
        </div>

        <div className="footer__bottom">
          <p>&copy; {currentYear} FinDesktop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
