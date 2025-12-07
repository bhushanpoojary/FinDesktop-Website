import '../styles/docs-pages.css';
import './ComponentShowcase.css';

const ComponentShowcase = () => {
  return (
    <div className="docs-page">
      <div className="container container--wide">
        <h1 className="docs-page__title">Component Showcase</h1>
        <p className="text-secondary mb-2xl">
          Visual reference of all available components and design patterns in the FinDesktop design system.
        </p>

        {/* Buttons */}
        <section className="docs-page__section">
          <h2 className="docs-page__section-title">Buttons</h2>
          
          <div className="showcase-grid">
            <div className="showcase-item">
              <button className="btn btn--primary">Primary Button</button>
              <code>.btn.btn--primary</code>
            </div>
            
            <div className="showcase-item">
              <button className="btn btn--secondary">Secondary Button</button>
              <code>.btn.btn--secondary</code>
            </div>
            
            <div className="showcase-item">
              <button className="btn btn--outline">Outline Button</button>
              <code>.btn.btn--outline</code>
            </div>
            
            <div className="showcase-item">
              <button className="btn btn--primary btn--large">Large Button</button>
              <code>.btn.btn--primary.btn--large</code>
            </div>
          </div>
        </section>

        {/* Cards */}
        <section className="docs-page__section">
          <h2 className="docs-page__section-title">Cards</h2>
          
          <div className="showcase-grid showcase-grid--3">
            <div className="card">
              <div className="card__icon">🚀</div>
              <h3 className="card__title">Basic Card</h3>
              <p className="card__description">
                This is a basic card component with icon, title, and description.
              </p>
            </div>

            <div className="card card--primary">
              <div className="card__icon">⚡</div>
              <h3 className="card__title">Primary Card</h3>
              <p className="card__description">
                This is a primary card with gradient background.
              </p>
            </div>

            <div className="card card--bordered">
              <div className="card__icon">🎯</div>
              <h3 className="card__title">Bordered Card</h3>
              <p className="card__description">
                This is a card with prominent border.
              </p>
            </div>
          </div>
        </section>

        {/* Badges */}
        <section className="docs-page__section">
          <h2 className="docs-page__section-title">Badges</h2>
          
          <div className="showcase-grid">
            <div className="showcase-item">
              <span className="badge">Default Badge</span>
              <code>.badge</code>
            </div>
            
            <div className="showcase-item">
              <span className="badge badge--success">Success</span>
              <code>.badge.badge--success</code>
            </div>
            
            <div className="showcase-item">
              <span className="badge badge--warning">Warning</span>
              <code>.badge.badge--warning</code>
            </div>
            
            <div className="showcase-item">
              <span className="badge badge--error">Error</span>
              <code>.badge.badge--error</code>
            </div>
          </div>
        </section>

        {/* Alerts */}
        <section className="docs-page__section">
          <h2 className="docs-page__section-title">Alerts / Info Boxes</h2>
          
          <div className="info-box info-box--info">
            <div className="info-box__title">Information</div>
            <p>This is an informational alert box. Use it to provide helpful information to users.</p>
          </div>

          <div className="info-box info-box--success">
            <div className="info-box__title">Success</div>
            <p>This is a success alert box. Use it to confirm successful operations.</p>
          </div>

          <div className="info-box info-box--warning">
            <div className="info-box__title">Warning</div>
            <p>This is a warning alert box. Use it to alert users of important information.</p>
          </div>

          <div className="info-box info-box--error">
            <div className="info-box__title">Error</div>
            <p>This is an error alert box. Use it to show error messages or critical issues.</p>
          </div>
        </section>

        {/* Typography */}
        <section className="docs-page__section">
          <h2 className="docs-page__section-title">Typography</h2>
          
          <div className="typography-showcase">
            <h1>Heading 1 - 48px</h1>
            <h2>Heading 2 - 36px</h2>
            <h3>Heading 3 - 30px</h3>
            <h4>Heading 4 - 24px</h4>
            <h5>Heading 5 - 20px</h5>
            <h6>Heading 6 - 18px</h6>
            <p className="text-lg">Large paragraph text - 18px</p>
            <p>Regular paragraph text - 16px</p>
            <p className="text-sm">Small text - 14px</p>
            <p className="text-xs">Extra small text - 12px</p>
          </div>
        </section>

        {/* Code Blocks */}
        <section className="docs-page__section">
          <h2 className="docs-page__section-title">Code Display</h2>
          
          <p>Inline code: <code>const example = "Hello World";</code></p>
          
          <pre><code>{`// Code block example
function greet(name) {
  return \`Hello, \${name}!\`;
}

const message = greet("Developer");
console.log(message);`}</code></pre>
        </section>

        {/* Step Indicators */}
        <section className="docs-page__section">
          <h2 className="docs-page__section-title">Step Indicators</h2>
          
          <div className="step-indicator">
            <div className="step-number">1</div>
            <div className="step-content">
              <div className="step-title">First Step</div>
              <div className="step-description">This is the description for the first step</div>
            </div>
          </div>

          <div className="step-indicator">
            <div className="step-number">2</div>
            <div className="step-content">
              <div className="step-title">Second Step</div>
              <div className="step-description">This is the description for the second step</div>
            </div>
          </div>

          <div className="step-indicator">
            <div className="step-number">3</div>
            <div className="step-content">
              <div className="step-title">Third Step</div>
              <div className="step-description">This is the description for the third step</div>
            </div>
          </div>
        </section>

        {/* Colors */}
        <section className="docs-page__section">
          <h2 className="docs-page__section-title">Color Palette</h2>
          
          <div className="docs-page__subsection">
            <h3 className="docs-page__subsection-title">Primary Colors</h3>
            <div className="color-palette">
              <div className="color-swatch" style={{backgroundColor: 'var(--color-primary-50)'}}>
                <span>50</span>
              </div>
              <div className="color-swatch" style={{backgroundColor: 'var(--color-primary-100)'}}>
                <span>100</span>
              </div>
              <div className="color-swatch" style={{backgroundColor: 'var(--color-primary-300)'}}>
                <span>300</span>
              </div>
              <div className="color-swatch" style={{backgroundColor: 'var(--color-primary-500)'}}>
                <span className="text-white">500</span>
              </div>
              <div className="color-swatch" style={{backgroundColor: 'var(--color-primary-700)'}}>
                <span className="text-white">700</span>
              </div>
              <div className="color-swatch" style={{backgroundColor: 'var(--color-primary-900)'}}>
                <span className="text-white">900</span>
              </div>
            </div>
          </div>

          <div className="docs-page__subsection">
            <h3 className="docs-page__subsection-title">Semantic Colors</h3>
            <div className="color-palette">
              <div className="color-swatch" style={{backgroundColor: 'var(--color-success)'}}>
                <span className="text-white">Success</span>
              </div>
              <div className="color-swatch" style={{backgroundColor: 'var(--color-warning)'}}>
                <span className="text-white">Warning</span>
              </div>
              <div className="color-swatch" style={{backgroundColor: 'var(--color-error)'}}>
                <span className="text-white">Error</span>
              </div>
              <div className="color-swatch" style={{backgroundColor: 'var(--color-info)'}}>
                <span className="text-white">Info</span>
              </div>
            </div>
          </div>
        </section>

        {/* Gradients */}
        <section className="docs-page__section">
          <h2 className="docs-page__section-title">Gradient Examples</h2>
          
          <div className="showcase-grid showcase-grid--2">
            <div className="gradient-box gradient-primary">
              <h3>Primary Gradient</h3>
              <code>linear-gradient(135deg, primary-600, accent-600)</code>
            </div>
            
            <div className="gradient-box gradient-light">
              <h3>Light Gradient</h3>
              <code>linear-gradient(135deg, primary-50, accent-50)</code>
            </div>
          </div>
        </section>

        {/* Spacing */}
        <section className="docs-page__section">
          <h2 className="docs-page__section-title">Spacing Scale</h2>
          
          <div className="spacing-showcase">
            <div className="spacing-item">
              <div className="spacing-box" style={{width: 'var(--space-xs)'}}></div>
              <span>xs - 4px</span>
            </div>
            <div className="spacing-item">
              <div className="spacing-box" style={{width: 'var(--space-sm)'}}></div>
              <span>sm - 8px</span>
            </div>
            <div className="spacing-item">
              <div className="spacing-box" style={{width: 'var(--space-md)'}}></div>
              <span>md - 12px</span>
            </div>
            <div className="spacing-item">
              <div className="spacing-box" style={{width: 'var(--space-lg)'}}></div>
              <span>lg - 16px</span>
            </div>
            <div className="spacing-item">
              <div className="spacing-box" style={{width: 'var(--space-xl)'}}></div>
              <span>xl - 24px</span>
            </div>
            <div className="spacing-item">
              <div className="spacing-box" style={{width: 'var(--space-2xl)'}}></div>
              <span>2xl - 32px</span>
            </div>
            <div className="spacing-item">
              <div className="spacing-box" style={{width: 'var(--space-3xl)'}}></div>
              <span>3xl - 48px</span>
            </div>
          </div>
        </section>

        {/* Shadows */}
        <section className="docs-page__section">
          <h2 className="docs-page__section-title">Shadow Levels</h2>
          
          <div className="showcase-grid showcase-grid--3">
            <div className="shadow-box" style={{boxShadow: 'var(--shadow-sm)'}}>
              <span>Small</span>
            </div>
            <div className="shadow-box" style={{boxShadow: 'var(--shadow-md)'}}>
              <span>Medium</span>
            </div>
            <div className="shadow-box" style={{boxShadow: 'var(--shadow-lg)'}}>
              <span>Large</span>
            </div>
            <div className="shadow-box" style={{boxShadow: 'var(--shadow-xl)'}}>
              <span>Extra Large</span>
            </div>
            <div className="shadow-box" style={{boxShadow: 'var(--shadow-2xl)'}}>
              <span>2X Large</span>
            </div>
            <div className="shadow-box" style={{boxShadow: 'var(--shadow-inner)'}}>
              <span>Inner</span>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default ComponentShowcase;
