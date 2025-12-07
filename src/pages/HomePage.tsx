import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <h1 className="hero__title">FinDesktop</h1>
        <p className="hero__subtitle">
          A powerful, enterprise-grade desktop framework built with Electron. High-performance workspace management, 
          advanced inter-app communication, and modern UI out of the box.
        </p>
        
        <div className="hero__cta">
          <Link to="/getting-started" className="btn btn--primary">
            Get Started →
          </Link>
          <a 
            href="https://github.com/bhushanpoojary/fin-desktop" 
            className="btn btn--outline"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
        </div>
      </section>

      {/* What is FinDesktop Section */}
      <section className="section section--primary">
        <div className="container">
          <div className="what-is">
            <div className="what-is__content">
              <h2>What is FinDesktop?</h2>
              <p>
                FinDesktop is an open-source framework that provides the essential building blocks 
                for creating professional desktop applications for financial services. Built with modern 
                web technologies, it offers a robust foundation for trading desktops, workspace management, 
                and inter-app communication.
              </p>
              <p>
                Whether you're building a trading platform, portfolio management system, or any 
                financial application, FinDesktop accelerates your development with pre-built 
                components and patterns.
              </p>
            </div>
            <div className="what-is__features">
              <ul className="what-is__list">
                <li className="what-is__list-item">
                  <strong>Desktop Bus & Messaging</strong>
                  Seamless inter-app communication with a powerful event bus
                </li>
                <li className="what-is__list-item">
                  <strong>Workspace Management</strong>
                  Save, restore, and share complex multi-window layouts
                </li>
                <li className="what-is__list-item">
                  <strong>FDC3 Integration</strong>
                  Full support for FDC3 standards and context channels
                </li>
                <li className="what-is__list-item">
                  <strong>Theming & Branding</strong>
                  Easily customize appearance to match your brand
                </li>
                <li className="what-is__list-item">
                  <strong>Authentication</strong>
                  Pluggable auth providers for enterprise security
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section className="section section--secondary screenshots">
        <div className="container">
          <h2 className="text-center">See It In Action</h2>
          <p className="text-center text-secondary mb-2xl">
            Explore the features and capabilities of FinDesktop
          </p>
          
          <div className="screenshots__grid">
            <div className="screenshot-card">
              <div className="screenshot-card__image">
                [Screenshot: Multi-window workspace]
              </div>
              <div className="screenshot-card__content">
                <h3 className="screenshot-card__title">Multi-Window Workspaces</h3>
                <p className="screenshot-card__description">
                  Create complex layouts with multiple windows, tabs, and dockable panels
                </p>
              </div>
            </div>

            <div className="screenshot-card">
              <div className="screenshot-card__image">
                [Screenshot: Channel linking]
              </div>
              <div className="screenshot-card__content">
                <h3 className="screenshot-card__title">Channel Linking</h3>
                <p className="screenshot-card__description">
                  Link apps together to share context and synchronize data in real-time
                </p>
              </div>
            </div>

            <div className="screenshot-card">
              <div className="screenshot-card__image">
                [Screenshot: Theme customization]
              </div>
              <div className="screenshot-card__content">
                <h3 className="screenshot-card__title">Theme Customization</h3>
                <p className="screenshot-card__description">
                  Switch between light and dark themes or create custom branded themes
                </p>
              </div>
            </div>

            <div className="screenshot-card">
              <div className="screenshot-card__image">
                [Screenshot: Notifications]
              </div>
              <div className="screenshot-card__content">
                <h3 className="screenshot-card__title">Notification Center</h3>
                <p className="screenshot-card__description">
                  Centralized notification system with custom actions and persistence
                </p>
              </div>
            </div>

            <div className="screenshot-card">
              <div className="screenshot-card__image">
                [Screenshot: Window docking]
              </div>
              <div className="screenshot-card__content">
                <h3 className="screenshot-card__title">Window Docking</h3>
                <p className="screenshot-card__description">
                  Snap windows together with intelligent docking and magnetic alignment
                </p>
              </div>
            </div>

            <div className="screenshot-card">
              <div className="screenshot-card__image">
                [Screenshot: FDC3 demo]
              </div>
              <div className="screenshot-card__content">
                <h3 className="screenshot-card__title">FDC3 Compatibility</h3>
                <p className="screenshot-card__description">
                  Full FDC3 2.0 support for standards-based financial desktop interoperability
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="section section--primary">
        <div className="container">
          <div className="comparison__intro">
            <h2>Why Choose FinDesktop?</h2>
            <p>
              Building a financial desktop from scratch is time-consuming and complex. 
              Proprietary solutions are expensive and inflexible. FinDesktop offers the best of both worlds.
            </p>
          </div>

          <div className="comparison__grid">
            <div className="comparison-card">
              <div className="comparison-card__icon">⚡</div>
              <h3 className="comparison-card__title">Faster to Integrate</h3>
              <p className="comparison-card__description">
                Get up and running in hours, not months. Pre-built components and clear APIs 
                mean you can focus on your business logic, not infrastructure.
              </p>
            </div>

            <div className="comparison-card">
              <div className="comparison-card__icon">🔧</div>
              <h3 className="comparison-card__title">Configurable, Not Rigid</h3>
              <p className="comparison-card__description">
                Every aspect is customizable through simple configuration files. Override 
                what you need, use defaults for the rest.
              </p>
            </div>

            <div className="comparison-card">
              <div className="comparison-card__icon">🚀</div>
              <h3 className="comparison-card__title">Open & Extendable</h3>
              <p className="comparison-card__description">
                Open source means no vendor lock-in. Extend the framework with your own 
                components and contribute back to the community.
              </p>
            </div>
          </div>

          <div className="comparison-table">
            <table>
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Build from Scratch</th>
                  <th>Proprietary Solution</th>
                  <th>FinDesktop</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Time to Production</td>
                  <td>6-12 months</td>
                  <td>3-6 months</td>
                  <td>Days to weeks</td>
                </tr>
                <tr>
                  <td>Initial Cost</td>
                  <td>High (dev time)</td>
                  <td>Very High (licensing)</td>
                  <td>Free</td>
                </tr>
                <tr>
                  <td>Customization</td>
                  <td><span className="comparison-table__check">✓</span> Full control</td>
                  <td><span className="comparison-table__cross">✗</span> Limited</td>
                  <td><span className="comparison-table__check">✓</span> Fully extensible</td>
                </tr>
                <tr>
                  <td>FDC3 Support</td>
                  <td><span className="comparison-table__cross">✗</span> Manual implementation</td>
                  <td><span className="comparison-table__check">✓</span> Usually included</td>
                  <td><span className="comparison-table__check">✓</span> Built-in</td>
                </tr>
                <tr>
                  <td>Vendor Lock-in</td>
                  <td><span className="comparison-table__check">✓</span> None</td>
                  <td><span className="comparison-table__cross">✗</span> High</td>
                  <td><span className="comparison-table__check">✓</span> None</td>
                </tr>
                <tr>
                  <td>Community Support</td>
                  <td><span className="comparison-table__cross">✗</span> None</td>
                  <td><span className="comparison-table__cross">✗</span> Vendor only</td>
                  <td><span className="comparison-table__check">✓</span> Active community</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section section--secondary">
        <div className="container text-center">
          <h2>Ready to Get Started?</h2>
          <p className="text-secondary mb-xl">
            Build your next financial desktop application with FinDesktop
          </p>
          <Link to="/getting-started" className="btn btn--primary btn--large">
            View Documentation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
