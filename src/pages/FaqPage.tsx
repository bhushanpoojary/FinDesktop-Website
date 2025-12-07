import { useState } from 'react';
import './FaqPage.css';
import './GettingStartedPage.css';

interface FaqItemProps {
  question: string;
  answer: React.ReactNode;
  defaultOpen?: boolean;
}

const FaqItem = ({ question, answer, defaultOpen = false }: FaqItemProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="faq-item">
      <div className="faq-item__question" onClick={() => setIsOpen(!isOpen)}>
        <span>{question}</span>
        <span className="faq-item__toggle">{isOpen ? '−' : '+'}</span>
      </div>
      {isOpen && <div className="faq-item__answer">{answer}</div>}
    </div>
  );
};

const FaqPage = () => {
  return (
    <div className="docs-page faq-page">
      <div className="container container--narrow">
        <h1 className="docs-page__title">FAQ & Troubleshooting</h1>
        <p className="text-secondary mb-2xl">
          Common questions and solutions for issues you might encounter while using FinDesktop.
        </p>

        {/* General Questions */}
        <section className="faq-category">
          <h2 className="faq-category__title">General Questions</h2>

          <FaqItem
            question="What is FinDesktop?"
            answer={
              <>
                <p>
                  FinDesktop is an open-source framework for building professional desktop applications 
                  for financial services. It provides essential components like inter-app messaging, 
                  workspace management, FDC3 integration, and theming out of the box.
                </p>
                <p>
                  Built with Electron, React, and TypeScript, it's designed to accelerate development 
                  of trading platforms, portfolio managers, and other financial desktop applications.
                </p>
              </>
            }
          />

          <FaqItem
            question="How is FinDesktop different from Finsemble?"
            answer={
              <>
                <p>
                  FinDesktop is an open-source, free alternative to commercial platforms like Finsemble. 
                  Key differences:
                </p>
                <ul>
                  <li><strong>Cost:</strong> FinDesktop is free and open source</li>
                  <li><strong>Customization:</strong> Full access to source code for unlimited customization</li>
                  <li><strong>Community:</strong> Community-driven development and support</li>
                  <li><strong>Modern Stack:</strong> Built with modern web technologies (React, TypeScript, Vite)</li>
                  <li><strong>No Vendor Lock-in:</strong> You own and control your entire stack</li>
                </ul>
              </>
            }
          />

          <FaqItem
            question="What are the system requirements?"
            answer={
              <>
                <p>To develop with FinDesktop:</p>
                <ul>
                  <li>Node.js 18.x or higher</li>
                  <li>npm 9.x or yarn 1.22+</li>
                  <li>Windows 10/11, macOS 10.15+, or modern Linux distribution</li>
                  <li>4GB RAM minimum (8GB recommended)</li>
                  <li>Modern code editor (VS Code recommended)</li>
                </ul>
                <p>For end users running your FinDesktop application:</p>
                <ul>
                  <li>Windows 10/11, macOS 10.15+, or Linux</li>
                  <li>2GB RAM minimum (4GB recommended)</li>
                  <li>200MB disk space</li>
                </ul>
              </>
            }
          />

          <FaqItem
            question="Is FinDesktop production-ready?"
            answer={
              <>
                <p>
                  FinDesktop is actively developed and suitable for production use. However, as with 
                  any framework, you should:
                </p>
                <ul>
                  <li>Thoroughly test your implementation</li>
                  <li>Implement proper authentication (replace demo auth)</li>
                  <li>Follow security best practices</li>
                  <li>Monitor and handle errors appropriately</li>
                  <li>Keep dependencies up to date</li>
                </ul>
                <p>
                  Many organizations are successfully running FinDesktop in production environments.
                </p>
              </>
            }
          />
        </section>

        {/* Installation & Setup */}
        <section className="faq-category">
          <h2 className="faq-category__title">Installation & Setup</h2>

          <FaqItem
            question="Installation fails with npm errors"
            answer={
              <>
                <p>If you encounter npm installation errors:</p>
                <ol>
                  <li>Clear npm cache: <code>npm cache clean --force</code></li>
                  <li>Delete <code>node_modules</code> and <code>package-lock.json</code></li>
                  <li>Update npm: <code>npm install -g npm@latest</code></li>
                  <li>Try installing again: <code>npm install</code></li>
                </ol>
                <p>If using yarn:</p>
                <ol>
                  <li>Clear yarn cache: <code>yarn cache clean</code></li>
                  <li>Delete <code>node_modules</code> and <code>yarn.lock</code></li>
                  <li>Install again: <code>yarn install</code></li>
                </ol>
              </>
            }
          />

          <FaqItem
            question="Dev server won't start"
            answer={
              <>
                <p>Common causes and solutions:</p>
                <ul>
                  <li>
                    <strong>Port already in use:</strong> Check if port 5173 is already in use. 
                    Kill the process or use a different port by setting VITE_PORT in .env
                  </li>
                  <li>
                    <strong>Missing dependencies:</strong> Run <code>npm install</code> to ensure 
                    all dependencies are installed
                  </li>
                  <li>
                    <strong>Node version:</strong> Verify you're using Node 18+ with <code>node --version</code>
                  </li>
                  <li>
                    <strong>Firewall:</strong> Check if your firewall is blocking the port
                  </li>
                </ul>
              </>
            }
          />

          <FaqItem
            question="Electron app won't launch"
            answer={
              <>
                <p>If the Electron desktop app fails to launch:</p>
                <ol>
                  <li>Ensure the dev server is running first: <code>npm run dev</code></li>
                  <li>In a new terminal, start Electron: <code>npm run electron</code></li>
                  <li>Check the Electron developer console for errors (View → Toggle Developer Tools)</li>
                  <li>Verify <code>electron/main.cjs</code> exists and has correct paths</li>
                </ol>
                <pre><code>{`// Typical startup sequence
# Terminal 1
npm run dev

# Terminal 2 (after dev server is running)
npm run electron`}</code></pre>
              </>
            }
          />
        </section>

        {/* Configuration Issues */}
        <section className="faq-category">
          <h2 className="faq-category__title">Configuration Issues</h2>

          <FaqItem
            question="Config changes not picked up?"
            answer={
              <>
                <p>
                  Configuration files are loaded at startup. To apply config changes:
                </p>
                <ol>
                  <li>Stop the development server (Ctrl+C)</li>
                  <li>Make your changes to <code>public/config/findesktop-config.json</code></li>
                  <li>Restart the dev server: <code>npm run dev</code></li>
                  <li>Hard refresh the browser (Ctrl+Shift+R or Cmd+Shift+R)</li>
                </ol>
                <p>
                  If changes still don't appear, check the browser console for configuration 
                  validation errors.
                </p>
              </>
            }
          />

          <FaqItem
            question="Custom theme not applying"
            answer={
              <>
                <p>Troubleshooting theme issues:</p>
                <ol>
                  <li>Verify theme is properly defined in your theme file</li>
                  <li>Ensure theme is registered in <code>src/extensions/config.ts</code></li>
                  <li>Add theme ID to configuration file's themes array</li>
                  <li>Check browser DevTools for CSS variable values</li>
                  <li>Clear browser cache and reload</li>
                </ol>
                <pre><code>{`// Verify theme variables are applied
// In browser console:
getComputedStyle(document.documentElement)
  .getPropertyValue('--primary-color')`}</code></pre>
              </>
            }
          />

          <FaqItem
            question="App not appearing in workspace?"
            answer={
              <>
                <p>If your app doesn't show up:</p>
                <ol>
                  <li>Verify app is registered in <code>findesktop-config.json</code> apps array</li>
                  <li>Check that the URL path matches your route configuration</li>
                  <li>Ensure the app component is properly exported</li>
                  <li>Look for errors in the browser console</li>
                  <li>Verify the app icon path is correct and file exists</li>
                </ol>
                <pre><code>{`// Example app registration
{
  "apps": [
    {
      "id": "my-app",
      "name": "My App",
      "url": "/my-app",  // Must match route
      "icon": "/icons/my-app.svg"  // Must exist
    }
  ]
}`}</code></pre>
              </>
            }
          />
        </section>

        {/* Runtime Issues */}
        <section className="faq-category">
          <h2 className="faq-category__title">Runtime Issues</h2>

          <FaqItem
            question="Layout not saving?"
            answer={
              <>
                <p>If workspace layouts aren't persisting:</p>
                <ul>
                  <li>Check browser localStorage is enabled and not full</li>
                  <li>Verify you have write permissions if saving to file system</li>
                  <li>Look for errors in console when saving workspace</li>
                  <li>Ensure workspace manager is properly initialized</li>
                </ul>
                <pre><code>{`// Check localStorage usage
console.log(localStorage.getItem('findesktop-workspace'));

// Clear if needed
localStorage.removeItem('findesktop-workspace');`}</code></pre>
              </>
            }
          />

          <FaqItem
            question="Channel linking not working"
            answer={
              <>
                <p>Troubleshooting channel issues:</p>
                <ol>
                  <li>Verify both apps are using the <code>useChannel</code> hook</li>
                  <li>Check that both apps are joined to the same channel</li>
                  <li>Ensure context type matches on both sides</li>
                  <li>Look for errors in console</li>
                  <li>Verify FDC3 is enabled in features configuration</li>
                </ol>
                <pre><code>{`// Debug channel state
const { currentChannel, context } = useChannel();
console.log('Current channel:', currentChannel);
console.log('Current context:', context);`}</code></pre>
              </>
            }
          />

          <FaqItem
            question="High memory usage"
            answer={
              <>
                <p>If you're experiencing high memory usage:</p>
                <ul>
                  <li>Check for memory leaks in your custom components</li>
                  <li>Ensure event listeners are properly cleaned up</li>
                  <li>Limit the number of open windows</li>
                  <li>Use Chrome DevTools Memory Profiler to identify leaks</li>
                  <li>Update to latest Electron version</li>
                </ul>
                <pre><code>{`// Proper cleanup example
useEffect(() => {
  const unsubscribe = bus.subscribe('event', handler);
  
  // Cleanup when component unmounts
  return () => unsubscribe();
}, [bus]);`}</code></pre>
              </>
            }
          />

          <FaqItem
            question="Authentication not working"
            answer={
              <>
                <p>Common authentication issues:</p>
                <ul>
                  <li>Verify your auth provider is properly implemented</li>
                  <li>Check that credentials are being passed correctly</li>
                  <li>Look for CORS errors if calling external auth API</li>
                  <li>Ensure token storage and retrieval works</li>
                  <li>Check session timeout configuration</li>
                </ul>
                <p>
                  Remember: The demo auth provider is for development only. 
                  Implement a proper auth provider for production.
                </p>
              </>
            }
          />
        </section>

        {/* Development */}
        <section className="faq-category">
          <h2 className="faq-category__title">Development</h2>

          <FaqItem
            question="How do I debug my app?"
            answer={
              <>
                <p>Debugging tools and techniques:</p>
                <ul>
                  <li><strong>Browser DevTools:</strong> Press F12 to open developer console</li>
                  <li><strong>React DevTools:</strong> Install React DevTools browser extension</li>
                  <li><strong>Electron DevTools:</strong> View → Toggle Developer Tools in Electron app</li>
                  <li><strong>Console logging:</strong> Use <code>console.log</code>, <code>console.error</code>, etc.</li>
                  <li><strong>React Error Boundaries:</strong> Wrap components to catch rendering errors</li>
                </ul>
                <pre><code>{`// Add debugging to your components
const MyApp = () => {
  useEffect(() => {
    console.log('Component mounted');
    return () => console.log('Component unmounted');
  }, []);
  
  console.log('Component rendering');
  return <div>My App</div>;
};`}</code></pre>
              </>
            }
          />

          <FaqItem
            question="How do I add TypeScript type checking?"
            answer={
              <>
                <p>FinDesktop uses TypeScript by default. To improve type safety:</p>
                <ol>
                  <li>Import types from <code>@findesktop/types</code></li>
                  <li>Define interfaces for your props and state</li>
                  <li>Run <code>npm run type-check</code> to check for errors</li>
                  <li>Enable strict mode in <code>tsconfig.json</code></li>
                </ol>
                <pre><code>{`import { Channel, ChannelContext } from '@findesktop/types';

interface MyAppProps {
  initialSymbol?: string;
}

const MyApp: React.FC<MyAppProps> = ({ initialSymbol }) => {
  const [symbol, setSymbol] = useState<string>(initialSymbol || '');
  // ...
};`}</code></pre>
              </>
            }
          />
        </section>

        {/* Support */}
        <div className="info-box info-box--info mt-3xl">
          <div className="info-box__title">Still Need Help?</div>
          <p>
            If you couldn't find an answer to your question:
          </p>
          <ul>
            <li>
              Check <a href="https://github.com/yourusername/findesktop/issues" target="_blank" rel="noopener noreferrer">GitHub Issues</a> for known problems
            </li>
            <li>
              Ask the community in <a href="https://github.com/yourusername/findesktop/discussions" target="_blank" rel="noopener noreferrer">GitHub Discussions</a>
            </li>
            <li>
              Review the <a href="/api-reference">API Reference</a> for detailed documentation
            </li>
            <li>
              Follow <a href="/how-tos">How-To guides</a> for step-by-step instructions
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FaqPage;
