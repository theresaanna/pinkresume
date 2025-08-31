"use client"
import { useEffect, useRef } from 'react';

const Comments = () => {
  const commentsRef = useRef(null);

  useEffect(() => {
    // Only load if the script hasn't been added yet
    if (commentsRef.current && !commentsRef.current.hasChildNodes()) {
      const script = document.createElement('script');
      script.src = 'https://giscus.app/client.js';
      script.setAttribute('data-repo', 'theresaanna/pinkresume'); // Replace with your repo
      script.setAttribute('data-repo-id', 'R_kgDOL9BBAQ'); // Get from giscus.app
      script.setAttribute('data-category', 'Announcements');
      script.setAttribute('data-category-id', 'DIC_kwDOL9BBAc4Cuz4x'); // Get from giscus.app
      script.setAttribute('data-mapping', 'pathname');
      script.setAttribute('data-strict', '0');
      script.setAttribute('data-reactions-enabled', '1');
      script.setAttribute('data-emit-metadata', '0');
      script.setAttribute('data-input-position', 'bottom');
      script.setAttribute('data-theme', 'noborder_gray');
      script.setAttribute('data-theme-url', `${window.location.origin}/giscus-theme.css`); // Optional: external theme file
      script.setAttribute('data-lang', 'en');
      script.setAttribute('data-loading', 'lazy');
      script.crossOrigin = 'anonymous';
      script.async = true;

      commentsRef.current.appendChild(script);

      // Listen for Giscus load and apply custom theme
      const handleGiscusMessage = (event) => {
        if (event.origin !== 'https://giscus.app') return;
        if (!(typeof event.data === 'object' && event.data.giscus)) return;

        const iframe = document.querySelector('iframe.giscus-frame');
        if (iframe && event.data.giscus.discussion) {
          // Apply custom CSS via postMessage
          iframe.contentWindow.postMessage({
            type: 'set-theme',
            theme: {
              '--color-canvas-default': '#003262',
              '--color-canvas-overlay': '#003262',
              '--color-canvas-inset': '#002147',
              '--color-fg-default': '#ffffff',
              '--color-fg-muted': '#6b7680',
              '--color-border-default': '#00FFBF',
              '--color-border-muted': '#6b7680',
              '--color-accent-fg': '#00FFBF',
              '--color-accent-emphasis': '#00FFBF',
              '--color-btn-text': '#00FFBF',
              '--color-btn-bg': 'transparent',
              '--color-btn-border': '#00FFBF',
              '--color-btn-hover-bg': 'rgba(0, 255, 191, 0.1)',
              '--color-btn-primary-text': '#003262',
              '--color-btn-primary-bg': '#00FFBF',
              '--color-btn-primary-border': '#00FFBF',
              '--color-input-bg': '#002147',
              '--color-input-border': '#00FFBF'
            }
          }, 'https://giscus.app');
        }
      };

      window.addEventListener('message', handleGiscusMessage);

      return () => {
        window.removeEventListener('message', handleGiscusMessage);
      };
    }
  }, []);

  return (
    <div className="comments-section">
      <h2>Comments</h2>
        <div ref={commentsRef} />
      <style jsx>{`
        .comments-section :global(.giscus) {
          color-scheme: dark;
        }
      `}</style>
    </div>
  );
};

export default Comments;