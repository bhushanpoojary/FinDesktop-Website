import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Sidebar.css';
import logo from '../assets/findesktop-logo.png';

const Sidebar = () => {
  const [expandedSections, setExpandedSections] = useState<string[]>(['getting-started', 'features']);
  const location = useLocation();

  const toggleSection = (section: string) => {
    setExpandedSections(prev =>
      prev.includes(section)
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  const navItems = [
    {
      icon: '🏠',
      label: 'Home',
      path: '/',
      description: 'Overview and installation'
    },
    {
      section: 'getting-started',
      icon: '🚀',
      label: 'Getting Started',
      items: [
        { path: '/getting-started', label: 'Installation', icon: '📦' },
        { path: '/core-concepts', label: 'Core Concepts', icon: '💡' },
      ]
    },
    {
      section: 'features',
      icon: '⚡',
      label: 'Features',
      items: [
        { path: '/configuration', label: 'Configuration', icon: '⚙️' },
        { path: '/extensibility', label: 'Extensibility', icon: '🔌' },
        { path: '/how-tos', label: 'How-Tos', icon: '📝' },
      ]
    },
    {
      icon: '📚',
      label: 'API Reference',
      path: '/api-reference',
      description: 'Complete API docs'
    },
    {
      icon: '❓',
      label: 'FAQ',
      path: '/faq',
      description: 'Common questions'
    }
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar__header">
        <NavLink to="/" className="sidebar__logo">
          <img src={logo} alt="FinDesktop Logo" className="sidebar__logo-icon" />
          <div className="sidebar__logo-text">
            <div className="sidebar__logo-title">FinDesktop</div>
            <div className="sidebar__logo-subtitle">Enterprise-grade framework</div>
          </div>
        </NavLink>
      </div>

      <div className="sidebar__search">
        <input
          type="text"
          className="sidebar__search-input"
          placeholder="Search features..."
        />
      </div>

      <nav className="sidebar__nav">
        {navItems.map((item, index) => {
          if (item.section) {
            const isExpanded = expandedSections.includes(item.section);
            return (
              <div key={index} className="sidebar__section">
                <button
                  className={`sidebar__section-header ${isExpanded ? 'sidebar__section-header--expanded' : ''}`}
                  onClick={() => toggleSection(item.section!)}
                >
                  <span className="sidebar__section-icon">{item.icon}</span>
                  <span className="sidebar__section-label">{item.label}</span>
                  <span className="sidebar__section-toggle">{isExpanded ? '▼' : '▶'}</span>
                </button>
                {isExpanded && (
                  <div className="sidebar__section-items">
                    {item.items?.map((subItem, subIndex) => (
                      <NavLink
                        key={subIndex}
                        to={subItem.path}
                        className={({ isActive }) =>
                          `sidebar__link sidebar__link--sub ${isActive ? 'sidebar__link--active' : ''}`
                        }
                      >
                        <span className="sidebar__link-icon">{subItem.icon}</span>
                        <span className="sidebar__link-label">{subItem.label}</span>
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            );
          }

          return (
            <NavLink
              key={index}
              to={item.path!}
              className={({ isActive }) =>
                `sidebar__link sidebar__link--root ${isActive && location.pathname === item.path ? 'sidebar__link--active' : ''}`
              }
            >
              <span className="sidebar__link-icon">{item.icon}</span>
              <div className="sidebar__link-content">
                <span className="sidebar__link-label">{item.label}</span>
                {item.description && (
                  <span className="sidebar__link-description">{item.description}</span>
                )}
              </div>
            </NavLink>
          );
        })}
      </nav>

      <div className="sidebar__footer">
        <a
          href="https://github.com/bhushanpoojary/fin-desktop"
          target="_blank"
          rel="noopener noreferrer"
          className="sidebar__footer-link"
          title="View on GitHub"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
          </svg>
          <span>View on GitHub</span>
        </a>
        <a
          href="https://github.com/bhushanpoojary/fin-desktop/issues"
          target="_blank"
          rel="noopener noreferrer"
          className="sidebar__footer-link"
          title="Report Issue / Feature"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8zm9 3a1 1 0 11-2 0 1 1 0 012 0zm-.25-6.25a.75.75 0 00-1.5 0v3.5a.75.75 0 001.5 0v-3.5z"/>
          </svg>
          <span>Report Issue</span>
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;
