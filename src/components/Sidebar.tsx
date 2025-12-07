import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Sidebar.css';

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
          <div className="sidebar__logo-icon">📊</div>
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
                `sidebar__link ${isActive && location.pathname === item.path ? 'sidebar__link--active' : ''}`
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
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="sidebar__footer-link"
        >
          <span>View on GitHub</span>
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;
