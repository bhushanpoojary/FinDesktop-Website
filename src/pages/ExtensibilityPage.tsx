import './GettingStartedPage.css';

const ExtensibilityPage = () => {
  return (
    <div className="docs-page">
      <div className="container container--narrow">
        <h1 className="docs-page__title">Extensibility</h1>
        <p className="text-secondary mb-2xl">
          FinDesktop is designed to be extended and customized without modifying core code. 
          Learn how to add your own features while maintaining upgradeability.
        </p>

        {/* Extensions Folder Philosophy */}
        <section className="docs-page__section">
          <h2 className="docs-page__section-title">The /extensions Folder</h2>
          <p>
            The <code>src/extensions</code> folder is your safe space for customization. 
            Code in this folder is designed to survive git pulls and framework updates.
          </p>
          <h3 className="docs-page__subsection-title">Directory Structure</h3>
          <pre><code>{`src/extensions/
├── auth/
│   └── CustomAuthProvider.ts
├── apps/
│   ├── MarketWatchApp/
│   ├── OrderTicketApp/
│   └── PortfolioApp/
├── themes/
│   └── corporateTheme.ts
├── hooks/
│   └── useCustomHook.ts
├── services/
│   └── DataService.ts
└── config.ts  // Main extension configuration`}</code></pre>

          <div className="info-box info-box--success mt-lg">
            <div className="info-box__title">Best Practice</div>
            <p>
              Keep all your custom code in the extensions folder. This makes it easy to 
              track your customizations and merge framework updates without conflicts.
            </p>
          </div>
        </section>

        {/* Git Pull Survival Guide */}
        <section className="docs-page__section">
          <h2 className="docs-page__section-title">How to Survive Git Pulls</h2>
          <p>
            FinDesktop is designed with upgradeability in mind. Follow these guidelines to 
            safely update the framework while preserving your customizations.
          </p>

          <h3 className="docs-page__subsection-title">Safe to Customize</h3>
          <div className="info-box info-box--success">
            <p>These files and folders are safe to modify and won't conflict with updates:</p>
            <ul>
              <li><code>src/extensions/**</code> - All your custom code</li>
              <li><code>public/config/**</code> - Configuration files</li>
              <li><code>public/icons/**</code> - Your custom icons and assets</li>
              <li><code>.env</code> - Environment variables</li>
              <li><code>README.md</code> - Your project documentation</li>
            </ul>
          </div>

          <h3 className="docs-page__subsection-title mt-xl">Stable Interfaces</h3>
          <div className="info-box info-box--info">
            <p>These interfaces are stable and won't break between minor versions:</p>
            <ul>
              <li><code>IAuthProvider</code> - Authentication interface</li>
              <li><code>IProductBranding</code> - Branding configuration</li>
              <li><code>IChannelProvider</code> - Channel management</li>
              <li><code>INotificationService</code> - Notification system</li>
              <li><code>IWorkspaceManager</code> - Workspace handling</li>
            </ul>
          </div>

          <h3 className="docs-page__subsection-title mt-xl">Avoid Modifying</h3>
          <div className="info-box info-box--warning">
            <p>Avoid modifying these core files to prevent merge conflicts:</p>
            <ul>
              <li><code>src/core/**</code> - Core framework code</li>
              <li><code>src/components/**</code> - Built-in UI components</li>
              <li><code>electron/**</code> - Electron main process files</li>
              <li><code>src/types/**</code> - TypeScript type definitions</li>
            </ul>
            <p className="mt-md">
              <strong>Instead:</strong> Create wrapper components or services in 
              your <code>extensions</code> folder that extend or compose the core functionality.
            </p>
          </div>

          <h3 className="docs-page__subsection-title mt-xl">Update Strategy</h3>
          <ol>
            <li><strong>Review changelog:</strong> Check CHANGELOG.md for breaking changes</li>
            <li><strong>Backup extensions:</strong> Commit your extensions folder before updating</li>
            <li><strong>Pull updates:</strong> <code>git pull origin main</code></li>
            <li><strong>Resolve conflicts:</strong> Address any conflicts (should be minimal)</li>
            <li><strong>Update dependencies:</strong> <code>npm install</code></li>
            <li><strong>Test thoroughly:</strong> Run your app and verify everything works</li>
          </ol>
        </section>

        {/* Adding New Apps */}
        <section className="docs-page__section">
          <h2 className="docs-page__section-title">Adding New Apps</h2>
          <p>
            Create custom applications that integrate seamlessly with the FinDesktop framework.
          </p>

          <h3 className="docs-page__subsection-title">Step 1: Create App Component</h3>
          <p>Create your app in the extensions folder:</p>
          <pre><code>{`// src/extensions/apps/MarketWatchApp/MarketWatchApp.tsx
import React, { useState } from 'react';
import { useDesktopBus, useChannel } from '@findesktop/hooks';
import './MarketWatchApp.css';

export const MarketWatchApp = () => {
  const [symbols, setSymbols] = useState(['AAPL', 'GOOGL', 'MSFT']);
  const bus = useDesktopBus();
  const { broadcast } = useChannel();

  const handleSymbolClick = (symbol: string) => {
    // Broadcast to current channel
    broadcast({
      type: 'fdc3.instrument',
      id: { ticker: symbol }
    });
    
    // Also publish to bus for non-channel apps
    bus.publish('instrument.selected', { symbol });
  };

  return (
    <div className="market-watch">
      <h2>Market Watch</h2>
      <ul className="symbol-list">
        {symbols.map(symbol => (
          <li key={symbol} onClick={() => handleSymbolClick(symbol)}>
            {symbol}
          </li>
        ))}
      </ul>
    </div>
  );
};`}</code></pre>

          <h3 className="docs-page__subsection-title mt-xl">Step 2: Register the App</h3>
          <p>Add your app to the configuration:</p>
          <pre><code>{`// public/config/findesktop-config.json
{
  "apps": [
    {
      "id": "market-watch",
      "name": "Market Watch",
      "url": "/market-watch",
      "icon": "/icons/market-watch.svg",
      "category": "Trading",
      "description": "Real-time market data viewer"
    }
  ]
}`}</code></pre>

          <h3 className="docs-page__subsection-title mt-xl">Step 3: Add Routing</h3>
          <p>Register the route in your extensions config:</p>
          <pre><code>{`// src/extensions/config.ts
import { MarketWatchApp } from './apps/MarketWatchApp/MarketWatchApp';

export const extensionRoutes = [
  {
    path: '/market-watch',
    component: MarketWatchApp
  }
];`}</code></pre>

          <h3 className="docs-page__subsection-title mt-xl">Example: Order Ticket App</h3>
          <details className="mt-lg">
            <summary style={{ cursor: 'pointer', fontWeight: 600, padding: 'var(--spacing-md)', backgroundColor: 'var(--color-bg-secondary)', borderRadius: 'var(--radius-md)' }}>
              Click to see full example
            </summary>
            <pre><code>{`// src/extensions/apps/OrderTicketApp/OrderTicketApp.tsx
import React, { useState, useEffect } from 'react';
import { useChannel, useNotifications } from '@findesktop/hooks';

export const OrderTicketApp = () => {
  const [symbol, setSymbol] = useState('');
  const [quantity, setQuantity] = useState(100);
  const [side, setSide] = useState<'BUY' | 'SELL'>('BUY');
  const { context } = useChannel();
  const { notify } = useNotifications();

  // Update symbol when context changes on channel
  useEffect(() => {
    if (context?.type === 'fdc3.instrument') {
      setSymbol(context.id.ticker);
    }
  }, [context]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Submit order logic here
      await submitOrder({ symbol, quantity, side });
      
      notify({
        type: 'success',
        title: 'Order Submitted',
        message: \`\${side} \${quantity} shares of \${symbol}\`
      });
    } catch (error) {
      notify({
        type: 'error',
        title: 'Order Failed',
        message: error.message
      });
    }
  };

  return (
    <div className="order-ticket">
      <h2>Order Entry</h2>
      <form onSubmit={handleSubmit}>
        <input
          value={symbol}
          onChange={e => setSymbol(e.target.value)}
          placeholder="Symbol"
          required
        />
        <input
          type="number"
          value={quantity}
          onChange={e => setQuantity(Number(e.target.value))}
          required
        />
        <select value={side} onChange={e => setSide(e.target.value as any)}>
          <option value="BUY">Buy</option>
          <option value="SELL">Sell</option>
        </select>
        <button type="submit">Submit Order</button>
      </form>
    </div>
  );
};`}</code></pre>
          </details>
        </section>

        {/* Custom Services */}
        <section className="docs-page__section">
          <h2 className="docs-page__section-title">Creating Custom Services</h2>
          <p>
            Encapsulate business logic and data access in reusable services.
          </p>
          <pre><code>{`// src/extensions/services/MarketDataService.ts
export class MarketDataService {
  private ws: WebSocket | null = null;
  private subscribers = new Map<string, Set<(data: any) => void>>();

  connect(url: string) {
    this.ws = new WebSocket(url);
    
    this.ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      const callbacks = this.subscribers.get(data.symbol);
      if (callbacks) {
        callbacks.forEach(cb => cb(data));
      }
    };
  }

  subscribe(symbol: string, callback: (data: any) => void) {
    if (!this.subscribers.has(symbol)) {
      this.subscribers.set(symbol, new Set());
    }
    this.subscribers.get(symbol)!.add(callback);
    
    // Send subscription message
    this.ws?.send(JSON.stringify({ action: 'subscribe', symbol }));
  }

  unsubscribe(symbol: string, callback: (data: any) => void) {
    const callbacks = this.subscribers.get(symbol);
    if (callbacks) {
      callbacks.delete(callback);
      if (callbacks.size === 0) {
        this.subscribers.delete(symbol);
        this.ws?.send(JSON.stringify({ action: 'unsubscribe', symbol }));
      }
    }
  }
}

export const marketDataService = new MarketDataService();`}</code></pre>
        </section>

        <div className="info-box info-box--info mt-3xl">
          <div className="info-box__title">Need Help?</div>
          <p>
            Check the <a href="/how-tos">How-Tos</a> section for step-by-step guides on 
            common extensibility scenarios, or visit our 
            <a href="https://github.com/bhushanpoojary/fin-desktop/discussions" target="_blank" rel="noopener noreferrer"> GitHub Discussions</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExtensibilityPage;
