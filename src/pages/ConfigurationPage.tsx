import './GettingStartedPage.css';

const ConfigurationPage = () => {
  return (
    <div className="docs-page">
      <div className="container container--narrow">
        <h1 className="docs-page__title">Configuration</h1>
        <p className="text-secondary mb-2xl">
          FinDesktop is designed to be highly configurable. Learn how to customize every 
          aspect of your desktop through configuration files and interfaces.
        </p>

        {/* Config Structure */}
        <section className="docs-page__section">
          <h2 className="docs-page__section-title">FinDesktopConfig Structure</h2>
          <p>
            The main configuration file is located at <code>public/config/findesktop-config.json</code>. 
            This JSON file defines all aspects of your desktop environment.
          </p>
          <div className="info-box info-box--info mt-lg mb-lg">
            <div className="info-box__title">Configuration Loading</div>
            <p>
              FinDesktop loads configuration at startup. Changes to the config file require 
              a restart to take effect. For runtime configuration changes, use the 
              configuration API.
            </p>
          </div>
          <pre><code>{`{
  // Product identification
  "productName": "MyFinDesktop",
  "version": "1.0.0",
  
  // Branding configuration
  "branding": {
    "companyName": "Your Company",
    "logoUrl": "/icons/logo.png",
    "faviconUrl": "/icons/favicon.ico",
    "primaryColor": "#1a2332",
    "accentColor": "#3b82f6"
  },
  
  // Authentication configuration
  "auth": {
    "provider": "demo", // or "saml", "oauth", "custom"
    "loginUrl": "/login",
    "logoutUrl": "/logout",
    "sessionTimeout": 3600000 // milliseconds
  },
  
  // Application registry
  "apps": [],
  
  // Channel definitions
  "channels": [],
  
  // Theme configuration
  "theme": {},
  
  // Feature flags
  "features": {
    "notifications": true,
    "windowDocking": true,
    "workspaces": true,
    "fdc3": true
  }
}`}</code></pre>
        </section>

        {/* Auth Provider */}
        <section className="docs-page__section">
          <h2 className="docs-page__section-title">IAuthProvider</h2>
          <p>
            Implement the <code>IAuthProvider</code> interface to integrate with your 
            organization's authentication system.
          </p>
          <h3 className="docs-page__subsection-title">Interface Definition</h3>
          <pre><code>{`export interface IAuthProvider {
  // Authenticate user and return session
  login(credentials: Credentials): Promise<AuthSession>;
  
  // End user session
  logout(): Promise<void>;
  
  // Refresh authentication token
  refreshToken(token: string): Promise<string>;
  
  // Validate current session
  validateSession(): Promise<boolean>;
  
  // Get current user info
  getCurrentUser(): Promise<User>;
}`}</code></pre>

          <h3 className="docs-page__subsection-title mt-xl">Implementation Example</h3>
          <pre><code>{`// src/extensions/auth/MyAuthProvider.ts
import { IAuthProvider, AuthSession, Credentials } from '@findesktop/types';

export class MyAuthProvider implements IAuthProvider {
  async login(credentials: Credentials): Promise<AuthSession> {
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials)
    });
    
    if (!response.ok) {
      throw new Error('Authentication failed');
    }
    
    const data = await response.json();
    return {
      token: data.token,
      expiresAt: Date.now() + data.expiresIn,
      user: data.user
    };
  }
  
  async logout(): Promise<void> {
    await fetch('/api/auth/logout', { method: 'POST' });
    localStorage.removeItem('auth-token');
  }
  
  async refreshToken(token: string): Promise<string> {
    const response = await fetch('/api/auth/refresh', {
      method: 'POST',
      headers: { 'Authorization': \`Bearer \${token}\` }
    });
    const data = await response.json();
    return data.token;
  }
  
  async validateSession(): Promise<boolean> {
    const token = localStorage.getItem('auth-token');
    if (!token) return false;
    
    const response = await fetch('/api/auth/validate', {
      headers: { 'Authorization': \`Bearer \${token}\` }
    });
    return response.ok;
  }
  
  async getCurrentUser(): Promise<User> {
    const response = await fetch('/api/auth/user');
    return response.json();
  }
}`}</code></pre>

          <h3 className="docs-page__subsection-title mt-xl">Register Your Provider</h3>
          <pre><code>{`// src/extensions/config.ts
import { MyAuthProvider } from './auth/MyAuthProvider';

export const authProvider = new MyAuthProvider();`}</code></pre>
        </section>

        {/* Product Branding */}
        <section className="docs-page__section">
          <h2 className="docs-page__section-title">IProductBranding</h2>
          <p>
            Customize the visual appearance and branding of your desktop application.
          </p>
          <pre><code>{`export interface IProductBranding {
  companyName: string;
  productName: string;
  logoUrl: string;
  faviconUrl?: string;
  primaryColor: string;
  accentColor: string;
  splashScreen?: {
    imageUrl: string;
    backgroundColor: string;
  };
  loginScreen?: {
    backgroundImageUrl?: string;
    logoUrl?: string;
    title?: string;
  };
}`}</code></pre>

          <h3 className="docs-page__subsection-title mt-xl">Example Configuration</h3>
          <pre><code>{`{
  "branding": {
    "companyName": "Acme Trading Corp",
    "productName": "Acme Desktop",
    "logoUrl": "/assets/acme-logo.svg",
    "faviconUrl": "/assets/favicon.ico",
    "primaryColor": "#003366",
    "accentColor": "#00ccff",
    "splashScreen": {
      "imageUrl": "/assets/splash.png",
      "backgroundColor": "#003366"
    },
    "loginScreen": {
      "backgroundImageUrl": "/assets/login-bg.jpg",
      "logoUrl": "/assets/logo-large.svg",
      "title": "Welcome to Acme Desktop"
    }
  }
}`}</code></pre>
        </section>

        {/* Theme Config */}
        <section className="docs-page__section">
          <h2 className="docs-page__section-title">Theme Configuration</h2>
          <p>
            Define custom themes or configure the built-in light and dark themes.
          </p>
          <pre><code>{`{
  "theme": {
    "default": "dark",
    "allowUserSelection": true,
    "themes": [
      {
        "id": "light",
        "name": "Light Theme",
        "variables": {
          "--primary-color": "#1a2332",
          "--background": "#ffffff",
          "--text-color": "#333333",
          "--border-color": "#e0e0e0"
        }
      },
      {
        "id": "dark",
        "name": "Dark Theme",
        "variables": {
          "--primary-color": "#1a2332",
          "--background": "#1e1e1e",
          "--text-color": "#e0e0e0",
          "--border-color": "#3a3a3a"
        }
      },
      {
        "id": "corporate",
        "name": "Corporate Theme",
        "variables": {
          "--primary-color": "#003366",
          "--accent-color": "#00ccff",
          "--background": "#f5f5f5",
          "--text-color": "#222222"
        }
      }
    ]
  }
}`}</code></pre>
        </section>

        {/* Channels Config */}
        <section className="docs-page__section">
          <h2 className="docs-page__section-title">Channels Configuration</h2>
          <p>
            Define the channels available in your desktop for context linking.
          </p>
          <pre><code>{`{
  "channels": [
    {
      "id": "red",
      "name": "Red",
      "color": "#ef4444",
      "type": "user"
    },
    {
      "id": "blue",
      "name": "Blue",
      "color": "#3b82f6",
      "type": "user"
    },
    {
      "id": "green",
      "name": "Green",
      "color": "#10b981",
      "type": "user"
    },
    {
      "id": "yellow",
      "name": "Yellow",
      "color": "#f59e0b",
      "type": "user"
    },
    {
      "id": "system",
      "name": "System",
      "color": "#6b7280",
      "type": "system"
    }
  ]
}`}</code></pre>
        </section>

        {/* Example Configs */}
        <section className="docs-page__section">
          <h2 className="docs-page__section-title">Example Configurations</h2>
          
          <h3 className="docs-page__subsection-title">Trading Bank Example</h3>
          <details className="mb-lg">
            <summary style={{ cursor: 'pointer', fontWeight: 600, padding: 'var(--spacing-md)', backgroundColor: 'var(--color-bg-secondary)', borderRadius: 'var(--radius-md)' }}>
              Click to expand full configuration
            </summary>
            <pre><code>{`{
  "productName": "BankTrader Pro",
  "version": "2.1.0",
  "branding": {
    "companyName": "Global Trading Bank",
    "logoUrl": "/bank-logo.svg",
    "primaryColor": "#004d99",
    "accentColor": "#00cc66"
  },
  "auth": {
    "provider": "saml",
    "loginUrl": "https://sso.bank.com/login",
    "logoutUrl": "https://sso.bank.com/logout",
    "sessionTimeout": 7200000
  },
  "apps": [
    {
      "id": "market-watch",
      "name": "Market Watch",
      "url": "/apps/market-watch",
      "icon": "/icons/market.svg",
      "category": "Trading"
    },
    {
      "id": "order-ticket",
      "name": "Order Entry",
      "url": "/apps/order-ticket",
      "icon": "/icons/order.svg",
      "category": "Trading"
    },
    {
      "id": "portfolio",
      "name": "Portfolio",
      "url": "/apps/portfolio",
      "icon": "/icons/portfolio.svg",
      "category": "Analytics"
    }
  ],
  "features": {
    "notifications": true,
    "windowDocking": true,
    "workspaces": true,
    "fdc3": true,
    "analytics": true
  }
}`}</code></pre>
          </details>

          <h3 className="docs-page__subsection-title mt-xl">Demo/Development Example</h3>
          <details>
            <summary style={{ cursor: 'pointer', fontWeight: 600, padding: 'var(--spacing-md)', backgroundColor: 'var(--color-bg-secondary)', borderRadius: 'var(--radius-md)' }}>
              Click to expand full configuration
            </summary>
            <pre><code>{`{
  "productName": "FinDesktop Demo",
  "version": "1.0.0",
  "branding": {
    "companyName": "FinDesktop",
    "logoUrl": "/logo.svg",
    "primaryColor": "#1a2332",
    "accentColor": "#3b82f6"
  },
  "auth": {
    "provider": "demo",
    "autoLogin": true
  },
  "apps": [
    {
      "id": "fdc3-demo",
      "name": "FDC3 Demo",
      "url": "/fdc3-demo",
      "icon": "/icons/fdc3.svg"
    }
  ],
  "channels": [
    { "id": "red", "name": "Red", "color": "#ef4444" },
    { "id": "blue", "name": "Blue", "color": "#3b82f6" }
  ],
  "theme": {
    "default": "dark",
    "allowUserSelection": true
  },
  "features": {
    "notifications": true,
    "windowDocking": true,
    "workspaces": true,
    "fdc3": true
  }
}`}</code></pre>
          </details>
        </section>

        <div className="info-box info-box--success mt-3xl">
          <div className="info-box__title">Configuration Validation</div>
          <p>
            FinDesktop validates your configuration at startup and will display helpful 
            error messages if there are issues. Check the console logs for validation details.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConfigurationPage;
