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
      script.setAttribute('data-theme', 'dark'); // Matches your dark theme
      script.setAttribute('data-lang', 'en');
      script.setAttribute('data-loading', 'lazy');
      script.crossOrigin = 'anonymous';
      script.async = true;

      commentsRef.current.appendChild(script);
    }
  }, []);

  return (
    <div className="comments-section">
      <h2>Comments</h2>
      <div ref={commentsRef} />
    </div>
  );
};

export default Comments;