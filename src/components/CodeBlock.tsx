import React from 'react';

interface CodeBlockProps {
  code: string;
  language?: 'json' | 'javascript' | 'typescript' | 'bash' | 'tsx';
  title?: string;
  showLineNumbers?: boolean;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ 
  code, 
  language = 'javascript',
  title,
  showLineNumbers = false 
}) => {
  const highlightJSON = (jsonString: string): React.ReactNode => {
    // Simple JSON syntax highlighting
    let highlighted = jsonString;
    
    // Escape HTML
    highlighted = highlighted
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
    
    // Highlight strings (both keys and values)
    highlighted = highlighted.replace(
      /"([^"]+)"(\s*:)?/g, 
      (_match, content, colon) => {
        if (colon) {
          // It's a key
          return `<span class="json-key">"${content}"</span>${colon}`;
        } else {
          // It's a string value
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
    
    return <span dangerouslySetInnerHTML={{ __html: highlighted }} />;
  };

  const highlightBash = (bashString: string): React.ReactNode => {
    let highlighted = bashString;
    
    // Comments
    highlighted = highlighted.replace(
      /#(.+)$/gm,
      '<span class="comment"># $1</span>'
    );
    
    return <span dangerouslySetInnerHTML={{ __html: highlighted }} />;
  };

  const getHighlightedCode = (): React.ReactNode => {
    if (language === 'json') {
      return highlightJSON(code);
    } else if (language === 'bash') {
      return highlightBash(code);
    }
    return code;
  };

  const lines = code.split('\n');

  return (
    <div className="code-block">
      {title && (
        <div className="code-block__header">
          <span className="code-block__title">{title}</span>
        </div>
      )}
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
            getHighlightedCode()
          )}
        </code>
      </pre>
    </div>
  );
};

export default CodeBlock;
