import React, { useState } from 'react';
import './CodeBlock.css';

interface CodeBlockProps {
  code: string;
  language?: 'json' | 'javascript' | 'typescript' | 'bash' | 'tsx' | 'css' | 'html';
  title?: string;
  showLineNumbers?: boolean;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ 
  code, 
  language = 'javascript',
  title,
  showLineNumbers = false 
}) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const getHighlightedHTML = (): string => {
    let highlighted = code;
    
    // Escape HTML first
    highlighted = highlighted
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
    
    if (language === 'json') {
      // Highlight strings (both keys and values)
      highlighted = highlighted.replace(
        /"([^"]+)"(\s*:)?/g, 
        (_match, content, colon) => {
          if (colon) {
            return `<span class="json-key">"${content}"</span>${colon}`;
          } else {
            return `<span class="json-string">"${content}"</span>`;
          }
        }
      );
      
      // Highlight numbers
      highlighted = highlighted.replace(
        /:\s*(-?\d+\.?\d*)/g,
        ': <span class="json-number">$1</span>'
      );
      
      // Highlight booleans
      highlighted = highlighted.replace(
        /\b(true|false)\b/g,
        '<span class="json-boolean">$1</span>'
      );
      
      // Highlight null
      highlighted = highlighted.replace(
        /\bnull\b/g,
        '<span class="json-null">null</span>'
      );
    } else if (language === 'typescript' || language === 'tsx' || language === 'javascript') {
      // Comments
      highlighted = highlighted.replace(
        /\/\/(.+)$/gm,
        '<span class="comment">// $1</span>'
      );
      
      // Strings (before keywords to avoid conflicts)
      highlighted = highlighted.replace(
        /'([^']*)'|"([^"]*)"|`([^`]*)`/g,
        '<span class="string">$&</span>'
      );
      
      // Keywords
      const keywords = ['import', 'from', 'const', 'let', 'var', 'function', 'return', 'if', 'else', 'for', 'while', 'class', 'interface', 'type', 'export', 'default', 'async', 'await', 'new'];
      keywords.forEach(keyword => {
        const regex = new RegExp(`(?<!<[^>]*)(\\b${keyword}\\b)(?![^<]*>)`, 'g');
        highlighted = highlighted.replace(regex, `<span class="keyword">$1</span>`);
      });
      
      // Function names
      highlighted = highlighted.replace(
        /\b([a-zA-Z_$][a-zA-Z0-9_$]*)\s*(?=\()/g,
        '<span class="function">$1</span>'
      );
    } else if (language === 'css') {
      // Selectors
      highlighted = highlighted.replace(
        /([.#]?[a-zA-Z0-9_-]+)(?=\s*\{)/g,
        '<span class="selector">$1</span>'
      );
      
      // Properties
      highlighted = highlighted.replace(
        /([a-zA-Z-]+)(?=\s*:)/g,
        '<span class="property">$1</span>'
      );
      
      // Values
      highlighted = highlighted.replace(
        /:([^;{]+)/g,
        ':<span class="value">$1</span>'
      );
    } else if (language === 'bash') {
      // Comments
      highlighted = highlighted.replace(
        /#(.+)$/gm,
        '<span class="comment"># $1</span>'
      );
    }
    
    return highlighted;
  };

  const lines = code.split('\n');

  return (
    <div className="code-block">
      {title && (
        <div className="code-block__header">
          <span className="code-block__title">{title}</span>
          <span className="code-block__language">{language}</span>
        </div>
      )}
      <button 
        className={`code-block__copy ${copied ? 'copied' : ''}`}
        onClick={copyToClipboard}
        title={copied ? 'Copied!' : 'Copy to clipboard'}
      >
        {copied ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        ) : (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
          </svg>
        )}
        <span className="code-block__copy-text">{copied ? 'Copied!' : 'Copy'}</span>
      </button>
      <pre className={title ? '' : 'code-block--standalone'}>
        <code className={`language-${language}`}>
          {showLineNumbers ? (
            <div className="code-with-lines">
              {lines.map((line, index) => (
                <div key={index} className="code-line">
                  <span className="line-number">{index + 1}</span>
                  <span className="line-content">{line}</span>
                </div>
              ))}
            </div>
          ) : (
            <div dangerouslySetInnerHTML={{ __html: getHighlightedHTML() }} />
          )}
        </code>
      </pre>
    </div>
  );
};

export default CodeBlock;
