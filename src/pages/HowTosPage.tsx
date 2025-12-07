import '../styles/docs-pages.css';
import CodeBlock from '../components/CodeBlock';

const HowTosPage = () => {
  return (
    <div className="docs-page">
      <div className="container container--narrow">
        <h1 className="docs-page__title">How-Tos & Recipes</h1>
        <p className="text-secondary mb-2xl">
          Step-by-step guides for common tasks and customizations in FinDesktop.
        </p>

        {/* Recipe Cards Grid */}
        <div className="grid grid--2col mb-3xl">
          <div className="card">
            <h3 className="card__title">🔐 Custom Login Screen</h3>
            <p className="card__description">
              Create a branded login experience with custom authentication flow
            </p>
          </div>
          <div className="card">
            <h3 className="card__title">🎨 New Theme</h3>
            <p className="card__description">
              Design and implement a custom theme for your organization
            </p>
          </div>
          <div className="card">
            <h3 className="card__title">📱 FDC3 App</h3>
            <p className="card__description">
              Build an FDC3-aware application with context sharing
            </p>
          </div>
          <div className="card">
            <h3 className="card__title">🔔 Notification Action</h3>
            <p className="card__description">
              Add custom actions to notifications with callbacks
            </p>
          </div>
        </div>

        {/* Recipe 1: Custom Login Screen */}
        <section className="docs-page__section">
          <h2 className="docs-page__section-title">🔐 Add a Custom Login Screen</h2>
          <p>
            Replace the default login screen with your own branded authentication experience.
          </p>

          <h3 className="docs-page__subsection-title">Step 1: Create Login Component</h3>
          <CodeBlock
            code={`// src/extensions/auth/CustomLoginScreen.tsx
import React, { useState } from 'react';
import { useAuth } from '@findesktop/hooks';
import './CustomLoginScreen.css';

export const CustomLoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login, isLoading } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    try {
      await login({ username, password });
    } catch (err) {
      setError('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className="custom-login">
      <div className="custom-login__container">
        <img src="/logo.svg" alt="Logo" className="custom-login__logo" />
        <h1>Welcome to TradingDesk</h1>
        <p className="custom-login__subtitle">Sign in to continue</p>
        
        <form onSubmit={handleSubmit} className="custom-login__form">
          <input
            type="text"
            value={username}
            onChange={e => setUsername(e.target.value)}
            placeholder="Username"
            required
          />
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
          {error && <div className="error-message">{error}</div>}
          <button type="submit" disabled={isLoading}>
            {isLoading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>
        
        <div className="custom-login__footer">
          <a href="/forgot-password">Forgot password?</a>
          <a href="/help">Need help?</a>
        </div>
      </div>
    </div>
  );
};`}
            language="tsx"
            title="Custom Login Screen Component"
          />

          <h3 className="docs-page__subsection-title mt-lg">Step 2: Register Login Screen</h3>
          <CodeBlock
            code={`// src/extensions/config.ts
import { CustomLoginScreen } from './auth/CustomLoginScreen';

export const customComponents = {
  loginScreen: CustomLoginScreen
};`}
            language="tsx"
            title="Register Custom Login Screen"
          />

          <h3 className="docs-page__subsection-title mt-lg">Step 3: Style Your Login</h3>
          <CodeBlock
            code={`/* src/extensions/auth/CustomLoginScreen.css */
.custom-login {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.custom-login__container {
  background: white;
  padding: 3rem;
  border-radius: 1rem;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  max-width: 400px;
  width: 100%;
}

.custom-login__logo {
  width: 80px;
  margin-bottom: 1rem;
}`}
            language="css"
            title="Custom Login Screen Styles"
          />
        </section>

        {/* Recipe 2: New Theme */}
        <section className="docs-page__section">
          <h2 className="docs-page__section-title">🎨 Add a New Theme</h2>
          <p>
            Create a custom theme to match your corporate branding.
          </p>

          <h3 className="docs-page__subsection-title">Step 1: Define Theme</h3>
          <CodeBlock
            code={`// src/extensions/themes/corporateTheme.ts
export const corporateTheme = {
  id: 'corporate',
  name: 'Corporate Theme',
  description: 'Official company branded theme',
  variables: {
    // Primary colors
    '--primary-color': '#003d82',
    '--primary-light': '#0052ad',
    '--primary-dark': '#002a5c',
    
    // Accent colors
    '--accent-color': '#00b8d4',
    '--accent-hover': '#0097b2',
    
    // Background colors
    '--background': '#f8f9fa',
    '--surface': '#ffffff',
    '--surface-hover': '#f5f6f7',
    
    // Text colors
    '--text-primary': '#1a1a1a',
    '--text-secondary': '#666666',
    '--text-disabled': '#999999',
    
    // Border colors
    '--border-color': '#e0e0e0',
    '--border-focus': '#00b8d4',
    
    // Status colors
    '--success': '#00c851',
    '--warning': '#ffbb33',
    '--error': '#ff4444',
    '--info': '#33b5e5',
    
    // Chart colors
    '--chart-positive': '#00c851',
    '--chart-negative': '#ff4444',
    '--chart-neutral': '#999999'
  }
};`}
            language="tsx"
            title="Corporate Theme Definition"
          />

          <h3 className="docs-page__subsection-title mt-lg">Step 2: Register Theme</h3>
          <CodeBlock
            code={`// src/extensions/config.ts
import { corporateTheme } from './themes/corporateTheme';

export const customThemes = [
  corporateTheme
];`}
            language="tsx"
            title="Register Custom Theme"
          />

          <h3 className="docs-page__subsection-title mt-lg">Step 3: Add to Configuration</h3>
          <CodeBlock
            code={`// public/config/findesktop-config.json
{
  "theme": {
    "default": "corporate",
    "allowUserSelection": true,
    "themes": ["light", "dark", "corporate"]
  }
}`}
            language="json"
            title="Theme Configuration"
          />

          <h3 className="docs-page__subsection-title mt-lg">Step 4: Test Your Theme</h3>
          <ol>
            <li>Restart the application</li>
            <li>Open theme selector (usually in settings)</li>
            <li>Select your new theme</li>
            <li>Verify all components render correctly</li>
            <li>Test dark/light contrasts for accessibility</li>
          </ol>
        </section>

        {/* Recipe 3: FDC3 App */}
        <section className="docs-page__section">
          <h2 className="docs-page__section-title">📱 Add a New FDC3-Aware App</h2>
          <p>
            Build an application that participates in FDC3 context sharing and intents.
          </p>

          <h3 className="docs-page__subsection-title">Step 1: Create FDC3 App</h3>
          <CodeBlock
            code={`// src/extensions/apps/ChartApp/ChartApp.tsx
import React, { useState, useEffect } from 'react';
import { useChannel, useFDC3 } from '@findesktop/hooks';

export const ChartApp = () => {
  const [instrument, setInstrument] = useState(null);
  const [chartData, setChartData] = useState([]);
  const { context, broadcast } = useChannel();
  const { addContextListener, raiseIntent } = useFDC3();

  // Listen for instrument context changes
  useEffect(() => {
    const unsubscribe = addContextListener('fdc3.instrument', (ctx) => {
      setInstrument(ctx.id.ticker);
      loadChartData(ctx.id.ticker);
    });
    
    return unsubscribe;
  }, [addContextListener]);

  const loadChartData = async (symbol: string) => {
    const data = await fetch(\`/api/chart/\${symbol}\`).then(r => r.json());
    setChartData(data);
  };

  const handleOpenOrderTicket = () => {
    // Raise intent to open order ticket for current instrument
    raiseIntent('PlaceOrder', {
      type: 'fdc3.instrument',
      id: { ticker: instrument }
    });
  };

  return (
    <div className="chart-app">
      <div className="chart-header">
        <h2>{instrument || 'Select an instrument'}</h2>
        {instrument && (
          <button onClick={handleOpenOrderTicket}>
            Trade {instrument}
          </button>
        )}
      </div>
      <div className="chart-container">
        {/* Render chart using chartData */}
      </div>
    </div>
  );
};`}
            language="tsx"
            title="Chart App with FDC3 Support"
          />

          <h3 className="docs-page__subsection-title mt-lg">Step 2: Register Intent Handlers</h3>
          <CodeBlock
            code={`// src/extensions/apps/ChartApp/intents.ts
export const chartIntents = {
  'ViewChart': async (context) => {
    if (context.type === 'fdc3.instrument') {
      // Open chart window with instrument
      window.open(\`/chart?symbol=\${context.id.ticker}\`);
    }
  }
};`}
            language="tsx"
            title="Chart Intent Handlers"
          />

          <h3 className="docs-page__subsection-title mt-lg">Step 3: Configure App Metadata</h3>
          <CodeBlock
            code={`// public/config/findesktop-config.json
{
  "apps": [
    {
      "id": "chart-app",
      "name": "Chart Viewer",
      "url": "/chart",
      "icon": "/icons/chart.svg",
      "fdc3": {
        "interop": {
          "intents": {
            "listensFor": ["ViewChart"],
            "raises": ["PlaceOrder"]
          },
          "contexts": ["fdc3.instrument", "fdc3.portfolio"]
        }
      }
    }
  ]
}`}
            language="json"
            title="App Metadata Configuration"
          />
        </section>

        {/* Recipe 4: Notification Actions */}
        <section className="docs-page__section">
          <h2 className="docs-page__section-title">🔔 Wire a New Notification Action</h2>
          <p>
            Add interactive buttons to notifications that trigger custom actions.
          </p>

          <h3 className="docs-page__subsection-title">Step 1: Create Notification with Actions</h3>
          <CodeBlock
            code={`import { useNotifications } from '@findesktop/hooks';

const OrderConfirmation = () => {
  const { notify } = useNotifications();

  const handleOrderFilled = (order) => {
    notify({
      type: 'success',
      title: 'Order Filled',
      message: \`Your order for \${order.quantity} shares of \${order.symbol} has been filled at \${order.price}\`,
      duration: 10000, // Show for 10 seconds
      actions: [
        {
          label: 'View Order',
          onClick: () => {
            // Navigate to order details
            window.open(\`/orders/\${order.id}\`, '_blank');
          },
          primary: true
        },
        {
          label: 'View Position',
          onClick: () => {
            // Open position viewer
            window.open(\`/positions?symbol=\${order.symbol}\`, '_blank');
          }
        },
        {
          label: 'Dismiss',
          onClick: () => {
            // Notification will auto-dismiss
          }
        }
      ],
      persistent: true // Keep in notification center
    });
  };

  return <div>...</div>;
};`}
            language="tsx"
            title="Notification with Actions"
          />

          <h3 className="docs-page__subsection-title mt-lg">Step 2: Add Rich Content</h3>
          <CodeBlock
            code={`const handlePriceAlert = (alert) => {
  notify({
    type: 'warning',
    title: 'Price Alert Triggered',
    message: \`\${alert.symbol} has reached \${alert.targetPrice}\`,
    content: (
      <div className="alert-notification">
        <div className="alert-details">
          <span className="symbol">{alert.symbol}</span>
          <span className="price">{alert.currentPrice}</span>
          <span className="change">
            {alert.change > 0 ? '+' : ''}{alert.change}%
          </span>
        </div>
        <div className="alert-chart">
          <MiniChart data={alert.recentData} />
        </div>
      </div>
    ),
    actions: [
      {
        label: 'View Chart',
        onClick: () => raiseIntent('ViewChart', {
          type: 'fdc3.instrument',
          id: { ticker: alert.symbol }
        })
      },
      {
        label: 'Trade',
        onClick: () => raiseIntent('PlaceOrder', {
          type: 'fdc3.instrument',
          id: { ticker: alert.symbol }
        }),
        primary: true
      }
    ]
  });
};`}
            language="tsx"
            title="Notification with Rich Content"
          />

          <h3 className="docs-page__subsection-title mt-lg">Step 3: Handle Notification Events</h3>
          <CodeBlock
            code={`// Listen for notification interactions
const { onNotificationClick } = useNotifications();

useEffect(() => {
  const unsubscribe = onNotificationClick((notification) => {
    console.log('Notification clicked:', notification);
    // Track analytics, etc.
  });
  
  return unsubscribe;
}, []);`}
            language="tsx"
            title="Handle Notification Events"
          />
        </section>

        {/* More Recipes */}
        <section className="docs-page__section">
          <h2 className="docs-page__section-title">More Recipes Coming Soon</h2>
          <p>We're constantly adding new how-to guides. Check back soon for:</p>
          <ul>
            <li>Creating custom workspace layouts</li>
            <li>Implementing real-time data feeds</li>
            <li>Building drag-and-drop interfaces</li>
            <li>Integrating with external APIs</li>
            <li>Creating reusable component libraries</li>
            <li>Performance optimization techniques</li>
          </ul>
          <p className="mt-lg">
            Have a recipe you'd like to see? 
            <a href="https://github.com/bhushanpoojary/fin-desktop/discussions" target="_blank" rel="noopener noreferrer"> Request it on GitHub</a>!
          </p>
        </section>
      </div>
    </div>
  );
};

export default HowTosPage;
