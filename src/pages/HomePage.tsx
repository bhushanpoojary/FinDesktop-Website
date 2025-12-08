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

      {/* Screenshots Section - Enhanced UX */}
      <section className="section section-action">
        <div className="container">
          {/* Header with Badge */}
          <div className="action-header">
            <div className="action-badge">
              <svg className="action-badge-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 2L10 6L14 6.5L11 9.5L11.5 14L8 12L4.5 14L5 9.5L2 6.5L6 6L8 2Z" fill="currentColor"/>
              </svg>
              <span>Live Demo</span>
            </div>
            <h2 className="action-title">See It In Action</h2>
            <p className="action-subtitle">
              Experience the power of FinDesktop with real-world examples and interactive demonstrations
            </p>
          </div>
          
          {/* Feature Showcase Grid */}
          <div className="action-grid">
            <div className="action-card action-card--featured">
              <div className="action-card-badge">Most Popular</div>
              <div className="action-card-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2"/>
                  <rect x="14" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2"/>
                  <rect x="3" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2"/>
                  <rect x="14" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <div className="action-card-image">
                <div className="action-card-placeholder">
                  <div className="placeholder-grid">
                    <div className="placeholder-window"></div>
                    <div className="placeholder-window"></div>
                    <div className="placeholder-window"></div>
                    <div className="placeholder-window"></div>
                  </div>
                  <div className="placeholder-label">Multi-window workspace</div>
                </div>
              </div>
              <div className="action-card-content">
                <h3 className="action-card-title">Multi-Window Workspaces</h3>
                <p className="action-card-description">
                  Create complex layouts with multiple windows, tabs, and dockable panels. Perfect for traders managing dozens of applications simultaneously.
                </p>
                <div className="action-card-tags">
                  <span className="tag">Layouts</span>
                  <span className="tag">Windows</span>
                  <span className="tag">Panels</span>
                </div>
              </div>
              <div className="action-card-footer">
                <a href="https://bhushanpoojary.github.io/fin-desktop/" target="_blank" rel="noopener noreferrer" className="action-card-btn">
                  <span>Try Demo</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>

            <div className="action-card">
              <div className="action-card-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  <path d="M17 8L21 12M21 12L17 16M21 12H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="7" cy="12" r="2" fill="currentColor"/>
                </svg>
              </div>
              <div className="action-card-image">
                <div className="action-card-placeholder">
                  <div className="placeholder-channels">
                    <div className="channel-indicator channel-red"></div>
                    <div className="channel-indicator channel-blue"></div>
                    <div className="channel-indicator channel-green"></div>
                  </div>
                  <div className="placeholder-label">Channel linking</div>
                </div>
              </div>
              <div className="action-card-content">
                <h3 className="action-card-title">Channel Linking</h3>
                <p className="action-card-description">
                  Link apps together to share context and synchronize data in real-time across your workspace.
                </p>
                <div className="action-card-tags">
                  <span className="tag">Real-time</span>
                  <span className="tag">Sync</span>
                </div>
              </div>
              <div className="action-card-footer">
                <a href="https://bhushanpoojary.github.io/fin-desktop/" target="_blank" rel="noopener noreferrer" className="action-card-btn">
                  <span>Try Demo</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>

            <div className="action-card">
              <div className="action-card-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
                  <path d="M12 3C12 3 15 6 15 12C15 18 12 21 12 21" stroke="currentColor" strokeWidth="2"/>
                  <path d="M12 3C12 3 9 6 9 12C9 18 12 21 12 21" stroke="currentColor" strokeWidth="2"/>
                  <path d="M3 12H21" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <div className="action-card-image">
                <div className="action-card-placeholder">
                  <div className="placeholder-theme">
                    <div className="theme-swatch theme-light"></div>
                    <div className="theme-swatch theme-dark"></div>
                  </div>
                  <div className="placeholder-label">Theme customization</div>
                </div>
              </div>
              <div className="action-card-content">
                <h3 className="action-card-title">Theme Customization</h3>
                <p className="action-card-description">
                  Switch between light and dark themes or create custom branded themes for your organization.
                </p>
                <div className="action-card-tags">
                  <span className="tag">Branding</span>
                  <span className="tag">Themes</span>
                </div>
              </div>
              <div className="action-card-footer">
                <a href="https://bhushanpoojary.github.io/fin-desktop/" target="_blank" rel="noopener noreferrer" className="action-card-btn">
                  <span>Try Demo</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>

            <div className="action-card">
              <div className="action-card-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  <path d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="action-card-image">
                <div className="action-card-placeholder">
                  <div className="placeholder-notifications">
                    <div className="notification-item"></div>
                    <div className="notification-item"></div>
                    <div className="notification-item"></div>
                  </div>
                  <div className="placeholder-label">Notifications</div>
                </div>
              </div>
              <div className="action-card-content">
                <h3 className="action-card-title">Notification Center</h3>
                <p className="action-card-description">
                  Centralized notification system with custom actions, persistence, and priority management.
                </p>
                <div className="action-card-tags">
                  <span className="tag">Alerts</span>
                  <span className="tag">Actions</span>
                </div>
              </div>
              <div className="action-card-footer">
                <a href="https://bhushanpoojary.github.io/fin-desktop/" target="_blank" rel="noopener noreferrer" className="action-card-btn">
                  <span>Try Demo</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>

            <div className="action-card">
              <div className="action-card-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  <path d="M4 8H8V12H4V8Z" stroke="currentColor" strokeWidth="2"/>
                  <path d="M10 8H14V12H10V8Z" stroke="currentColor" strokeWidth="2"/>
                  <path d="M16 8H20V12H16V8Z" stroke="currentColor" strokeWidth="2"/>
                  <path d="M8 8V4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M12 8V4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M16 8V4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="action-card-image">
                <div className="action-card-placeholder">
                  <div className="placeholder-docking">
                    <div className="dock-window"></div>
                    <div className="dock-window dock-window-snap"></div>
                  </div>
                  <div className="placeholder-label">Window docking</div>
                </div>
              </div>
              <div className="action-card-content">
                <h3 className="action-card-title">Window Docking</h3>
                <p className="action-card-description">
                  Snap windows together with intelligent docking, magnetic alignment, and visual feedback.
                </p>
                <div className="action-card-tags">
                  <span className="tag">Docking</span>
                  <span className="tag">Snap</span>
                </div>
              </div>
              <div className="action-card-footer">
                <a href="https://bhushanpoojary.github.io/fin-desktop/" target="_blank" rel="noopener noreferrer" className="action-card-btn">
                  <span>Try Demo</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>

            <div className="action-card">
              <div className="action-card-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  <path d="M19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H9L11 6H19C19.5304 6 20.0391 6.21071 20.4142 6.58579C20.7893 6.96086 21 7.46957 21 8V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 14L10 16L14 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="action-card-image">
                <div className="action-card-placeholder">
                  <div className="placeholder-persistence">
                    <div className="persistence-layout">
                      <div className="layout-save-icon"></div>
                      <div className="layout-windows"></div>
                    </div>
                  </div>
                  <div className="placeholder-label">Workspace Persistence</div>
                </div>
              </div>
              <div className="action-card-content">
                <h3 className="action-card-title">Multi-Window Workspace Persistence</h3>
                <p className="action-card-description">
                  Save & restore fully customized multi-window layouts. Users can rearrange apps, snap windows, create multi-monitor layouts, and instantly restore the entire workspace at any time.
                </p>
                <div className="action-card-tags">
                  <span className="tag">Layouts</span>
                  <span className="tag">Persistence</span>
                  <span className="tag">Productivity</span>
                </div>
              </div>
              <div className="action-card-footer">
                <a href="https://bhushanpoojary.github.io/fin-desktop/" target="_blank" rel="noopener noreferrer" className="action-card-btn">
                  <span>Try Demo</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>

            <div className="action-card">
              <div className="action-card-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="action-card-image">
                <div className="action-card-placeholder">
                  <div className="placeholder-fdc3">
                    <div className="fdc3-logo">FDC3</div>
                    <div className="fdc3-badge">2.0</div>
                  </div>
                  <div className="placeholder-label">FDC3 demo</div>
                </div>
              </div>
              <div className="action-card-content">
                <h3 className="action-card-title">FDC3 Compatibility</h3>
                <p className="action-card-description">
                  Full FDC3 2.0 support for standards-based financial desktop interoperability and app communication.
                </p>
                <div className="action-card-tags">
                  <span className="tag">FDC3 2.0</span>
                  <span className="tag">Standard</span>
                </div>
              </div>
              <div className="action-card-footer">
                <a href="https://bhushanpoojary.github.io/fin-desktop/" target="_blank" rel="noopener noreferrer" className="action-card-btn">
                  <span>Try Demo</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
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
