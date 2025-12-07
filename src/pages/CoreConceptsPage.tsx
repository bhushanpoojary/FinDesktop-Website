import './GettingStartedPage.css';

const CoreConceptsPage = () => {
  return (
    <div className="docs-page">
      <div className="container container--narrow">
        <h1 className="docs-page__title">Core Concepts</h1>
        <p className="text-secondary mb-2xl">
          Understanding the fundamental building blocks of FinDesktop will help you build 
          powerful and maintainable financial desktop applications.
        </p>

        {/* Desktop Bus & Apps */}
        <section className="docs-page__section">
          <h2 className="docs-page__section-title">Desktop Bus & Apps</h2>
          <p>
            The Desktop Bus is the central communication backbone of FinDesktop. It enables 
            applications to communicate with each other and with the desktop shell without 
            tight coupling.
          </p>
          <h3 className="docs-page__subsection-title">Key Features</h3>
          <ul>
            <li><strong>Event-based messaging:</strong> Publish and subscribe to events across all apps</li>
            <li><strong>Type-safe API:</strong> TypeScript interfaces ensure message contract compliance</li>
            <li><strong>Decoupled architecture:</strong> Apps don't need to know about each other</li>
            <li><strong>Cross-window communication:</strong> Messages work across Electron windows</li>
          </ul>
          <p>Example usage:</p>
          <pre><code>{`import { useDesktopBus } from '@findesktop/hooks';

const MyApp = () => {
  const bus = useDesktopBus();
  
  const handleClick = () => {
    bus.publish('instrument.selected', {
      symbol: 'AAPL',
      exchange: 'NASDAQ'
    });
  };
  
  return <button onClick={handleClick}>Select AAPL</button>;
};`}</code></pre>
        </section>

        {/* Layout / Workspace */}
        <section className="docs-page__section">
          <h2 className="docs-page__section-title">Layout / Workspace</h2>
          <p>
            Workspaces allow users to save and restore complete desktop layouts, including 
            window positions, sizes, and application states.
          </p>
          <h3 className="docs-page__subsection-title">Workspace Features</h3>
          <ul>
            <li><strong>Save layouts:</strong> Persist window arrangements and app configurations</li>
            <li><strong>Quick switching:</strong> Switch between different workspace configurations</li>
            <li><strong>Share with team:</strong> Export and import workspace definitions</li>
            <li><strong>Auto-restore:</strong> Automatically restore the last used workspace</li>
          </ul>
          <div className="info-box info-box--info mt-lg">
            <div className="info-box__title">Workspace Structure</div>
            <p>
              Workspaces are stored as JSON files containing window positions, app IDs, 
              and custom app state. They can be stored locally or synchronized to a server 
              for team-wide sharing.
            </p>
          </div>
        </section>

        {/* Channels */}
        <section className="docs-page__section">
          <h2 className="docs-page__section-title">Channels</h2>
          <p>
            Channels provide a way to link applications together so they can share context. 
            When one app broadcasts to a channel, all other apps listening to that channel 
            receive the update.
          </p>
          <h3 className="docs-page__subsection-title">Channel Concepts</h3>
          <ul>
            <li><strong>Color-coded channels:</strong> Visual indication of which apps are linked</li>
            <li><strong>Context sharing:</strong> Share instruments, contacts, portfolios, etc.</li>
            <li><strong>FDC3 compatible:</strong> Full support for FDC3 context types</li>
            <li><strong>System & user channels:</strong> Private and shared channel support</li>
          </ul>
          <pre><code>{`import { useChannel } from '@findesktop/hooks';

const ChartApp = () => {
  const { currentChannel, context } = useChannel();
  
  useEffect(() => {
    if (context?.type === 'fdc3.instrument') {
      loadChartData(context.id.ticker);
    }
  }, [context]);
  
  return <div>Listening on {currentChannel?.name} channel</div>;
};`}</code></pre>
        </section>

        {/* Auth */}
        <section className="docs-page__section">
          <h2 className="docs-page__section-title">Authentication</h2>
          <p>
            FinDesktop provides a pluggable authentication system that can integrate with 
            various identity providers and enterprise authentication systems.
          </p>
          <h3 className="docs-page__subsection-title">Authentication Features</h3>
          <ul>
            <li><strong>Pluggable providers:</strong> Implement IAuthProvider for custom auth</li>
            <li><strong>Session management:</strong> Automatic token refresh and session handling</li>
            <li><strong>SSO support:</strong> Compatible with SAML, OAuth, and other SSO protocols</li>
            <li><strong>Role-based access:</strong> Control app and feature visibility by user role</li>
          </ul>
          <div className="info-box info-box--warning mt-lg">
            <div className="info-box__title">Security Best Practice</div>
            <p>
              Always implement authentication in production environments. The demo auth 
              provider is for development only and should never be used in production.
            </p>
          </div>
        </section>

        {/* Theming */}
        <section className="docs-page__section">
          <h2 className="docs-page__section-title">Theming</h2>
          <p>
            FinDesktop includes a comprehensive theming system that allows you to customize 
            the look and feel of the entire desktop and all integrated apps.
          </p>
          <h3 className="docs-page__subsection-title">Theme Capabilities</h3>
          <ul>
            <li><strong>CSS variable-based:</strong> Easy customization with CSS custom properties</li>
            <li><strong>Light & dark modes:</strong> Built-in support for multiple color schemes</li>
            <li><strong>Brand customization:</strong> Apply your company's colors and styling</li>
            <li><strong>Runtime switching:</strong> Users can change themes without restart</li>
          </ul>
          <pre><code>{`// Custom theme definition
export const myTheme = {
  id: 'corporate',
  name: 'Corporate Theme',
  variables: {
    '--primary-color': '#1a2332',
    '--accent-color': '#0066cc',
    '--background': '#ffffff',
    '--text-color': '#333333',
    '--border-color': '#e0e0e0'
  }
};`}</code></pre>
        </section>

        {/* Notifications */}
        <section className="docs-page__section">
          <h2 className="docs-page__section-title">Notifications</h2>
          <p>
            The notification system provides a centralized way to display alerts, messages, 
            and actionable notifications to users across all applications.
          </p>
          <h3 className="docs-page__subsection-title">Notification Features</h3>
          <ul>
            <li><strong>Notification Center:</strong> Central hub for all user notifications</li>
            <li><strong>Custom actions:</strong> Add buttons and actions to notifications</li>
            <li><strong>Persistence:</strong> Notifications can be saved and reviewed later</li>
            <li><strong>Priority levels:</strong> Info, warning, error, and success types</li>
            <li><strong>Rich content:</strong> Support for HTML content and custom styling</li>
          </ul>
          <pre><code>{`import { useNotifications } from '@findesktop/hooks';

const OrderApp = () => {
  const { notify } = useNotifications();
  
  const handleOrderSubmit = async (order) => {
    try {
      await submitOrder(order);
      notify({
        type: 'success',
        title: 'Order Submitted',
        message: \`Order for \${order.quantity} shares submitted\`,
        actions: [
          { label: 'View Order', onClick: () => viewOrder(order.id) }
        ]
      });
    } catch (error) {
      notify({
        type: 'error',
        title: 'Order Failed',
        message: error.message
      });
    }
  };
};`}</code></pre>
        </section>

        {/* Summary */}
        <div className="info-box info-box--success mt-3xl">
          <div className="info-box__title">Next: Configuration</div>
          <p>
            Now that you understand the core concepts, learn how to configure FinDesktop 
            to match your specific requirements in the <a href="/configuration">Configuration</a> section.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CoreConceptsPage;
