// src/utils/stripMarkdown.js
import removeMarkdown from 'remove-markdown';

/**
 * Strips markdown syntax from text, leaving plain text
 * Uses the 'remove-markdown' library for robust markdown removal
 * @param {string} markdown - The markdown text to strip
 * @returns {string} - Plain text without markdown syntax
 */
export function stripMarkdown(markdown) {
  if (!markdown || typeof markdown !== 'string') {
    return '';
  }

  return removeMarkdown(markdown, {
    stripListLeaders: true,    // Remove list leaders (1. 2. 3. etc)
    listUnicodeChar: '',       // Remove unicode list characters
    gfm: true,                 // GitHub Flavored Markdown support
    useImgAltText: false       // Don't use alt text from images
  }).trim();
}