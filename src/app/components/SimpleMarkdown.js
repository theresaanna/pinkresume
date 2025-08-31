import React from 'react';

const SimpleMarkdown = ({ content }) => {
  const renderContent = (text) => {
    const lines = text.split('\n');
    const elements = [];
    let inCodeBlock = false;
    let codeContent = [];
    let inList = false;
    let listItems = [];

    const flushList = () => {
      if (listItems.length > 0) {
        elements.push(
          <ul key={`list-${elements.length}`}>
            {listItems.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        );
        listItems = [];
        inList = false;
      }
    };

    lines.forEach((line, index) => {
      // Handle code blocks
      if (line.startsWith('```')) {
        if (inCodeBlock) {
          // End code block
          elements.push(
            <pre key={`code-${elements.length}`}>
              <code className="language-javascript">
                {codeContent.join('\n')}
              </code>
            </pre>
          );
          codeContent = [];
          inCodeBlock = false;
        } else {
          // Start code block
          flushList();
          inCodeBlock = true;
        }
        return;
      }

      if (inCodeBlock) {
        codeContent.push(line);
        return;
      }

      // Handle headers
      if (line.startsWith('# ')) {
        flushList();
        elements.push(
          <h1 key={`h1-${elements.length}`}>
            {line.substring(2)}
          </h1>
        );
        return;
      }

      if (line.startsWith('## ')) {
        flushList();
        elements.push(
          <h2 key={`h2-${elements.length}`}>
            {line.substring(3)}
          </h2>
        );
        return;
      }

      // Handle list items
      if (line.startsWith('- ')) {
        inList = true;
        listItems.push(line.substring(2));
        return;
      }

      // Handle regular paragraphs
      if (line.trim() === '') {
        flushList();
        return;
      }

      // Regular paragraph
      if (!inList && line.trim() !== '') {
        elements.push(
          <p key={`p-${elements.length}`}>
            {line}
          </p>
        );
      }
    });

    // Flush any remaining list
    flushList();

    return elements;
  };

  return <div className="markdown-content">{renderContent(content)}</div>;
};

export default SimpleMarkdown;