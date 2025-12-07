import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <h1 className="hero-title">FinDesktop</h1>
        <p className="hero-tagline">
          A powerful, enterprise-grade desktop framework built with Electron. High-performance workspace management, 
          advanced inter-app communication, and modern UI out of the box.
        </p>
        
        <div className="hero-buttons">
          <Link to="/getting-started" className="btn-primary">
            Get Started →
          </Link>
          <a 
            href="https://github.com/bhushanpoojary/fin-desktop" 
            className="btn-secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
        </div>
      </section>

      {/* What is FinDesktop Section - Modern UX Redesign */}
      <section className="section section-what">
        <div className="container">
          <div className="section-what-wrapper">
            {/* Header Section */}
            <div className="section-what-header">
              <div className="section-what-badge">
                <svg className="badge-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 2L10.5 6.5L15.5 7L11.5 10.5L12.5 15.5L8 13L3.5 15.5L4.5 10.5L0.5 7L5.5 6.5L8 2Z" fill="currentColor"/>
                </svg>
                <span>Overview</span>
              </div>
              <h2 className="section-what-title">Build Enterprise Desktop Apps with Confidence</h2>
              <p className="section-what-subtitle">
                FinDesktop is a production-ready framework for creating sophisticated financial desktop applications. 
                Ship faster with pre-built components, powerful APIs, and battle-tested patterns.
              </p>
            </div>

            {/* Features Grid */}
            <div className="feature-grid">
              <div className="feature-card feature-card--primary">
                <div className="feature-card-gradient"></div>
                <div className="feature-icon-wrapper">
                  <svg className="feature-icon" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="feature-title">Powerful Event Bus</h3>
                <p className="feature-description">
                  Connect applications instantly with our pub/sub messaging system. Real-time data sharing across windows.
                </p>
              </div>

              <div className="feature-card">
                <div className="feature-icon-wrapper">
                  <svg className="feature-icon" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <rect x="3" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2"/>
                    <rect x="14" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2"/>
                    <rect x="3" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2"/>
                    <rect x="14" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                <h3 className="feature-title">Workspace Management</h3>
                <p className="feature-description">
                  Save and restore complex layouts. Perfect for traders managing dozens of windows.
                </p>
              </div>

              <div className="feature-card">
                <div className="feature-icon-wrapper">
                  <svg className="feature-icon" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M10 13C10 13.5304 10.2107 14.0391 10.5858 14.4142C10.9609 14.7893 11.4696 15 12 15C12.5304 15 13.0391 14.7893 13.4142 14.4142C13.7893 14.0391 14 13.5304 14 13C14 12.4696 13.7893 11.9609 13.4142 11.5858C13.0391 11.2107 12.5304 11 12 11C11.4696 11 10.9609 11.2107 10.5858 11.5858C10.2107 11.9609 10 12.4696 10 13Z" stroke="currentColor" strokeWidth="2"/>
                    <path d="M21 13C21 13 18 18 12 18C6 18 3 13 3 13C3 13 6 8 12 8C18 8 21 13 21 13Z" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                <h3 className="feature-title">FDC3 Standard</h3>
                <p className="feature-description">
                  Full compliance with FDC3 2.0. Seamless integration with financial ecosystem.
                </p>
              </div>

              <div className="feature-card">
                <div className="feature-icon-wrapper">
                  <svg className="feature-icon" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2Z" stroke="currentColor" strokeWidth="2"/>
                    <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <h3 className="feature-title">Custom Themes</h3>
                <p className="feature-description">
                  Match your brand with CSS variables. Dark mode and custom palettes included.
                </p>
              </div>

              <div className="feature-card">
                <div className="feature-icon-wrapper">
                  <svg className="feature-icon" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <rect x="5" y="11" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="2"/>
                    <path d="M12 11V7C12 5.89543 11.1046 5 10 5C8.89543 5 8 5.89543 8 7V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <h3 className="feature-title">Enterprise Security</h3>
                <p className="feature-description">
                  SSO, OAuth, SAML support. Pluggable authentication for any provider.
                </p>
              </div>

              <div className="feature-card">
                <div className="feature-icon-wrapper">
                  <svg className="feature-icon" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="feature-title">High Performance</h3>
                <p className="feature-description">
                  Handles 1000+ windows efficiently. Built for demanding trading environments.
                </p>
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="section-what-cta">
              <div className="cta-content">
                <div className="cta-stats">
                  <div className="stat-item">
                    <div className="stat-value">100%</div>
                    <div className="stat-label">Open Source</div>
                  </div>
                  <div className="stat-divider"></div>
                  <div className="stat-item">
                    <div className="stat-value">TypeScript</div>
                    <div className="stat-label">Type-Safe</div>
                  </div>
                  <div className="stat-divider"></div>
                  <div className="stat-item">
                    <div className="stat-value">Production</div>
                    <div className="stat-label">Ready</div>
                  </div>
                </div>
              </div>
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
