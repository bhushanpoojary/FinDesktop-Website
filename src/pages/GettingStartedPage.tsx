import './GettingStartedPage.css';

const GettingStartedPage = () => {
  return (
    <div className="docs-page">
      <div className="container container--narrow">
        <h1 className="docs-page__title">Getting Started</h1>

        {/* Requirements */}
        <section className="docs-page__section">
          <h2 className="docs-page__section-title">Requirements</h2>
          <p>Before you begin, ensure you have the following installed on your system:</p>
          <ul>
            <li><strong>Node.js</strong> version 18.x or higher</li>
            <li><strong>npm</strong> version 9.x or higher (or <strong>yarn</strong> 1.22+)</li>
            <li><strong>Git</strong> for cloning the repository</li>
            <li>A modern code editor (we recommend VS Code)</li>
          </ul>
          <p>You can verify your installations by running:</p>
          <pre><code>{`node --version
npm --version
git --version`}</code></pre>
        </section>

        {/* Installation */}
        <section className="docs-page__section">
          <h2 className="docs-page__section-title">Installation</h2>
          
          <div className="docs-page__subsection">
            <h3 className="docs-page__subsection-title">1. Clone the Repository</h3>
            <p>Clone the FinDesktop repository to your local machine:</p>
            <pre><code>{`git clone https://github.com/bhushanpoojary/fin-desktop.git
cd findesktop`}</code></pre>
          </div>

          <div className="docs-page__subsection">
            <h3 className="docs-page__subsection-title">2. Install Dependencies</h3>
            <p>Install all required dependencies using npm or yarn:</p>
            <pre><code>{`# Using npm
npm install

# Or using yarn
yarn install`}</code></pre>
          </div>

          <div className="docs-page__subsection">
            <h3 className="docs-page__subsection-title">3. Run the Development Server</h3>
            <p>Start the development server to run FinDesktop locally:</p>
            <pre><code>{`# Using npm
npm run dev

# Or using yarn
yarn dev`}</code></pre>
            <p>The application will be available at <code>http://localhost:5173</code> (or the port shown in your terminal).</p>
          </div>

          <div className="docs-page__subsection">
            <h3 className="docs-page__subsection-title">4. Build for Production</h3>
            <p>When you're ready to build for production:</p>
            <pre><code>{`# Using npm
npm run build

# Or using yarn
yarn build`}</code></pre>
            <p>The production-ready files will be in the <code>dist</code> folder.</p>
          </div>
        </section>

        {/* Quick Start */}
        <section className="docs-page__section">
          <h2 className="docs-page__section-title">Quick Start Guide</h2>
          
          <div className="docs-page__subsection">
            <h3 className="docs-page__subsection-title">Basic Configuration</h3>
            <p>
              FinDesktop is configured through a central configuration file. Create or modify 
              <code>public/config/findesktop-config.json</code> to customize your desktop:
            </p>
            <pre><code>{`{
  "productName": "MyTradingDesk",
  "branding": {
    "companyName": "My Company",
    "logoUrl": "/icons/logo.png",
    "primaryColor": "#1a2332"
  },
  "apps": [
    {
      "id": "market-watch",
      "name": "Market Watch",
      "url": "http://localhost:5173/market-watch",
      "icon": "/icons/market-watch.png"
    }
  ],
  "channels": [
    {
      "id": "red",
      "name": "Red",
      "color": "#ef4444"
    },
    {
      "id": "blue",
      "name": "Blue",
      "color": "#3b82f6"
    }
  ],
  "theme": {
    "default": "dark",
    "themes": ["light", "dark"]
  }
}`}</code></pre>
          </div>

          <div className="docs-page__subsection">
            <h3 className="docs-page__subsection-title">Project Structure</h3>
            <p>Understanding the key directories in FinDesktop:</p>
            <ul>
              <li><code>/electron</code> - Electron main process and window management</li>
              <li><code>/src</code> - React application source code</li>
              <li><code>/src/apps</code> - Individual application components</li>
              <li><code>/src/extensions</code> - Custom extensions and overrides</li>
              <li><code>/public/config</code> - Configuration files</li>
              <li><code>/public/icons</code> - Application icons and assets</li>
            </ul>
          </div>

          <div className="docs-page__subsection">
            <h3 className="docs-page__subsection-title">Adding Your First App</h3>
            <p>To add a new application to your desktop:</p>
            <ol>
              <li>Create a new React component in <code>src/apps/</code></li>
              <li>Register the app in your configuration file</li>
              <li>Add routing in <code>src/App.tsx</code></li>
              <li>Restart the development server</li>
            </ol>
            <p>Example app component:</p>
            <pre><code>{`import React from 'react';

const MyApp = () => {
  return (
    <div className="app-container">
      <h1>My Custom App</h1>
      <p>Your application content here</p>
    </div>
  );
};

export default MyApp;`}</code></pre>
          </div>
        </section>

        {/* Next Steps */}
        <section className="docs-page__section">
          <h2 className="docs-page__section-title">Next Steps</h2>
          <p>Now that you have FinDesktop running, explore these topics:</p>
          <div className="grid grid--2col mt-xl">
            <div className="card">
              <h3 className="card__title">Core Concepts</h3>
              <p className="card__description">
                Learn about the Desktop Bus, Channels, Workspaces, and other fundamental concepts.
              </p>
              <a href="/core-concepts" className="btn btn--primary mt-md">Learn More →</a>
            </div>
            <div className="card">
              <h3 className="card__title">Configuration</h3>
              <p className="card__description">
                Deep dive into configuration options for branding, authentication, and themes.
              </p>
              <a href="/configuration" className="btn btn--primary mt-md">Configure →</a>
            </div>
            <div className="card">
              <h3 className="card__title">Extensibility</h3>
              <p className="card__description">
                Understand how to extend FinDesktop and survive git pulls with custom code.
              </p>
              <a href="/extensibility" className="btn btn--primary mt-md">Extend →</a>
            </div>
            <div className="card">
              <h3 className="card__title">API Reference</h3>
              <p className="card__description">
                Complete API documentation for interfaces, hooks, and TypeScript types.
              </p>
              <a href="/api-reference" className="btn btn--primary mt-md">Reference →</a>
            </div>
          </div>
        </section>

        <div className="info-box info-box--info mt-2xl">
          <div className="info-box__title">Need Help?</div>
          <p>
            If you run into issues, check our <a href="/faq">FAQ & Troubleshooting</a> page 
            or visit our <a href="https://github.com/bhushanpoojary/fin-desktop/discussions" target="_blank" rel="noopener noreferrer">GitHub Discussions</a> 
            to get help from the community.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GettingStartedPage;
