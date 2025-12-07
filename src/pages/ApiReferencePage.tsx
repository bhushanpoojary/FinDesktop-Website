import './GettingStartedPage.css';

const ApiReferencePage = () => {
  return (
    <div className="docs-page">
      <div className="container container--narrow">
        <h1 className="docs-page__title">API Reference</h1>
        <p className="text-secondary mb-2xl">
          Complete reference documentation for FinDesktop interfaces, types, and hooks.
        </p>

        {/* Interfaces Section */}
        <section className="docs-page__section">
          <h2 className="docs-page__section-title">Interfaces</h2>

          {/* IAuthProvider */}
          <div className="card mb-xl">
            <h3 className="card__title">IAuthProvider</h3>
            <p className="card__description">
              Interface for implementing custom authentication providers.
            </p>
            <pre><code>{`interface IAuthProvider {
  // Authenticate user with credentials
  login(credentials: Credentials): Promise<AuthSession>;
  
  // End current user session
  logout(): Promise<void>;
  
  // Refresh authentication token
  refreshToken(token: string): Promise<string>;
  
  // Validate current session
  validateSession(): Promise<boolean>;
  
  // Get current authenticated user
  getCurrentUser(): Promise<User>;
}

interface Credentials {
  username: string;
  password: string;
  [key: string]: any;
}

interface AuthSession {
  token: string;
  expiresAt: number;
  user: User;
}

interface User {
  id: string;
  username: string;
  displayName: string;
  email?: string;
  roles?: string[];
}`}</code></pre>
          </div>

          {/* IProductBranding */}
          <div className="card mb-xl">
            <h3 className="card__title">IProductBranding</h3>
            <p className="card__description">
              Configuration interface for product branding and visual identity.
            </p>
            <pre><code>{`interface IProductBranding {
  companyName: string;
  productName: string;
  logoUrl: string;
  faviconUrl?: string;
  primaryColor: string;
  accentColor: string;
  splashScreen?: SplashScreenConfig;
  loginScreen?: LoginScreenConfig;
}

interface SplashScreenConfig {
  imageUrl: string;
  backgroundColor: string;
  duration?: number;
}

interface LoginScreenConfig {
  backgroundImageUrl?: string;
  logoUrl?: string;
  title?: string;
  subtitle?: string;
}`}</code></pre>
          </div>

          {/* Theme */}
          <div className="card mb-xl">
            <h3 className="card__title">Theme</h3>
            <p className="card__description">
              Type definition for theme configuration and customization.
            </p>
            <pre><code>{`interface Theme {
  id: string;
  name: string;
  description?: string;
  variables: ThemeVariables;
}

interface ThemeVariables {
  '--primary-color': string;
  '--primary-light': string;
  '--primary-dark': string;
  '--accent-color': string;
  '--background': string;
  '--surface': string;
  '--text-primary': string;
  '--text-secondary': string;
  '--border-color': string;
  '--success': string;
  '--warning': string;
  '--error': string;
  '--info': string;
  [key: string]: string;
}

interface ThemeConfig {
  default: string;
  allowUserSelection: boolean;
  themes: Theme[];
}`}</code></pre>
          </div>

          {/* Channel */}
          <div className="card mb-xl">
            <h3 className="card__title">Channel</h3>
            <p className="card__description">
              Channel definition for context linking and data sharing between apps.
            </p>
            <pre><code>{`interface Channel {
  id: string;
  name: string;
  color: string;
  type: 'user' | 'system' | 'private';
}

interface ChannelContext {
  type: string;
  id?: any;
  name?: string;
  [key: string]: any;
}

interface IChannelProvider {
  // Get all available channels
  getChannels(): Promise<Channel[]>;
  
  // Get current channel
  getCurrentChannel(): Promise<Channel | null>;
  
  // Join a specific channel
  joinChannel(channelId: string): Promise<void>;
  
  // Leave current channel
  leaveChannel(): Promise<void>;
  
  // Broadcast context to current channel
  broadcast(context: ChannelContext): Promise<void>;
  
  // Get current context from channel
  getContext(): Promise<ChannelContext | null>;
  
  // Add listener for context changes
  addContextListener(
    contextType: string,
    handler: (context: ChannelContext) => void
  ): () => void;
}`}</code></pre>
          </div>

          {/* Notification */}
          <div className="card mb-xl">
            <h3 className="card__title">Notification</h3>
            <p className="card__description">
              Type definitions for the notification system.
            </p>
            <pre><code>{`interface Notification {
  id: string;
  type: 'info' | 'success' | 'warning' | 'error';
  title: string;
  message: string;
  content?: React.ReactNode;
  duration?: number; // milliseconds, 0 = no auto-dismiss
  persistent?: boolean; // keep in notification center
  actions?: NotificationAction[];
  timestamp: number;
}

interface NotificationAction {
  label: string;
  onClick: () => void;
  primary?: boolean;
}

interface INotificationService {
  // Show a notification
  notify(notification: Omit<Notification, 'id' | 'timestamp'>): string;
  
  // Dismiss a notification
  dismiss(notificationId: string): void;
  
  // Dismiss all notifications
  dismissAll(): void;
  
  // Get all active notifications
  getNotifications(): Notification[];
  
  // Add listener for notification events
  onNotificationClick(handler: (notification: Notification) => void): () => void;
}`}</code></pre>
          </div>
        </section>

        {/* Hooks Section */}
        <section className="docs-page__section">
          <h2 className="docs-page__section-title">Hooks</h2>

          {/* useDesktopBus */}
          <div className="card mb-xl">
            <h3 className="card__title">useDesktopBus</h3>
            <p className="card__description">
              Hook for accessing the Desktop Bus for inter-app messaging.
            </p>
            <pre><code>{`function useDesktopBus(): DesktopBus

interface DesktopBus {
  // Publish an event to the bus
  publish(eventName: string, data?: any): void;
  
  // Subscribe to events on the bus
  subscribe(
    eventName: string,
    handler: (data: any) => void
  ): () => void;
  
  // Unsubscribe from events
  unsubscribe(eventName: string, handler: (data: any) => void): void;
}

// Usage example
const MyComponent = () => {
  const bus = useDesktopBus();
  
  useEffect(() => {
    const unsubscribe = bus.subscribe('instrument.selected', (data) => {
      console.log('Instrument selected:', data);
    });
    
    return unsubscribe;
  }, [bus]);
  
  const handleClick = () => {
    bus.publish('instrument.selected', { symbol: 'AAPL' });
  };
};`}</code></pre>
          </div>

          {/* useChannel */}
          <div className="card mb-xl">
            <h3 className="card__title">useChannel</h3>
            <p className="card__description">
              Hook for channel operations and context sharing.
            </p>
            <pre><code>{`function useChannel(): ChannelHook

interface ChannelHook {
  // Current active channel
  currentChannel: Channel | null;
  
  // Current context on the channel
  context: ChannelContext | null;
  
  // All available channels
  channels: Channel[];
  
  // Join a channel
  joinChannel: (channelId: string) => Promise<void>;
  
  // Leave current channel
  leaveChannel: () => Promise<void>;
  
  // Broadcast context to channel
  broadcast: (context: ChannelContext) => Promise<void>;
  
  // Add context listener
  addContextListener: (
    contextType: string,
    handler: (context: ChannelContext) => void
  ) => () => void;
}

// Usage example
const ChartApp = () => {
  const { currentChannel, context, broadcast } = useChannel();
  
  useEffect(() => {
    if (context?.type === 'fdc3.instrument') {
      loadChart(context.id.ticker);
    }
  }, [context]);
  
  const handleSymbolClick = (symbol: string) => {
    broadcast({
      type: 'fdc3.instrument',
      id: { ticker: symbol }
    });
  };
};`}</code></pre>
          </div>

          {/* useTheme */}
          <div className="card mb-xl">
            <h3 className="card__title">useTheme</h3>
            <p className="card__description">
              Hook for theme management and customization.
            </p>
            <pre><code>{`function useTheme(): ThemeHook

interface ThemeHook {
  // Current active theme
  currentTheme: Theme;
  
  // All available themes
  themes: Theme[];
  
  // Set theme by ID
  setTheme: (themeId: string) => void;
  
  // Toggle between light/dark
  toggleTheme: () => void;
}

// Usage example
const ThemeSelector = () => {
  const { currentTheme, themes, setTheme } = useTheme();
  
  return (
    <select 
      value={currentTheme.id} 
      onChange={(e) => setTheme(e.target.value)}
    >
      {themes.map(theme => (
        <option key={theme.id} value={theme.id}>
          {theme.name}
        </option>
      ))}
    </select>
  );
};`}</code></pre>
          </div>

          {/* useAuth */}
          <div className="card mb-xl">
            <h3 className="card__title">useAuth</h3>
            <p className="card__description">
              Hook for authentication state and operations.
            </p>
            <pre><code>{`function useAuth(): AuthHook

interface AuthHook {
  // Current user (null if not authenticated)
  user: User | null;
  
  // Authentication loading state
  isLoading: boolean;
  
  // Whether user is authenticated
  isAuthenticated: boolean;
  
  // Login with credentials
  login: (credentials: Credentials) => Promise<void>;
  
  // Logout current user
  logout: () => Promise<void>;
  
  // Refresh session
  refreshSession: () => Promise<void>;
}

// Usage example
const LoginScreen = () => {
  const { login, isLoading } = useAuth();
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(credentials);
  };
};`}</code></pre>
          </div>

          {/* useNotifications */}
          <div className="card mb-xl">
            <h3 className="card__title">useNotifications</h3>
            <p className="card__description">
              Hook for displaying and managing notifications.
            </p>
            <pre><code>{`function useNotifications(): NotificationsHook

interface NotificationsHook {
  // All active notifications
  notifications: Notification[];
  
  // Show a notification
  notify: (notification: Omit<Notification, 'id' | 'timestamp'>) => string;
  
  // Dismiss notification by ID
  dismiss: (notificationId: string) => void;
  
  // Dismiss all notifications
  dismissAll: () => void;
  
  // Listen for notification clicks
  onNotificationClick: (
    handler: (notification: Notification) => void
  ) => () => void;
}

// Usage example
const OrderApp = () => {
  const { notify } = useNotifications();
  
  const handleSubmitOrder = async (order) => {
    try {
      await submitOrder(order);
      notify({
        type: 'success',
        title: 'Order Submitted',
        message: \`Order #\${order.id} submitted successfully\`,
        actions: [
          {
            label: 'View Order',
            onClick: () => viewOrder(order.id),
            primary: true
          }
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
          </div>

          {/* useFDC3 */}
          <div className="card mb-xl">
            <h3 className="card__title">useFDC3</h3>
            <p className="card__description">
              Hook for FDC3 intents and advanced interoperability.
            </p>
            <pre><code>{`function useFDC3(): FDC3Hook

interface FDC3Hook {
  // Raise an intent
  raiseIntent: (
    intent: string,
    context: ChannelContext,
    target?: string
  ) => Promise<IntentResolution>;
  
  // Add intent listener
  addIntentListener: (
    intent: string,
    handler: (context: ChannelContext) => any
  ) => () => void;
  
  // Find intent handlers
  findIntent: (intent: string, context?: ChannelContext) => Promise<AppIntent>;
  
  // Find intents by context
  findIntentsByContext: (context: ChannelContext) => Promise<AppIntent[]>;
}

interface IntentResolution {
  source: string;
  version?: string;
  data?: any;
}

interface AppIntent {
  intent: { name: string; displayName: string };
  apps: AppMetadata[];
}

// Usage example
const MyApp = () => {
  const { raiseIntent, addIntentListener } = useFDC3();
  
  useEffect(() => {
    const unsubscribe = addIntentListener('ViewChart', (context) => {
      if (context.type === 'fdc3.instrument') {
        loadChart(context.id.ticker);
      }
    });
    
    return unsubscribe;
  }, []);
  
  const handleTrade = (symbol) => {
    raiseIntent('PlaceOrder', {
      type: 'fdc3.instrument',
      id: { ticker: symbol }
    });
  };
};`}</code></pre>
          </div>
        </section>

        <div className="info-box info-box--info mt-3xl">
          <div className="info-box__title">TypeScript Definitions</div>
          <p>
            All interfaces and types are available in the <code>@findesktop/types</code> package. 
            Import them directly in your TypeScript files for full type safety and IntelliSense support.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ApiReferencePage;
