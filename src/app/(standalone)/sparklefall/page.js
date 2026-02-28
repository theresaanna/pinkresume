'use client';

import { useEffect } from 'react';
import Script from 'next/script';

export default function SparkleFallDemo() {
  useEffect(() => {
    // Initialize sparkles after the script loads
    if (typeof window !== 'undefined' && window.SparkleFall) {
      initializeSparkles();
    }
  }, []);

  return (
    <>
      <link rel="stylesheet" href="https://unpkg.com/sparklefall@latest/dist/sparklefall.css" />
      <Script 
        src="https://unpkg.com/sparklefall@latest/dist/sparklefall.min.js"
        strategy="afterInteractive"
        onLoad={() => {
          if (typeof window !== 'undefined') {
            initializeSparkles();
          }
        }}
      />
      
      <div dangerouslySetInnerHTML={{ __html: pageHTML }} />
    </>
  );
}

// Initialize sparkles function
const initializeSparkles = () => {
  if (typeof window === 'undefined' || !window.SparkleFall) return;
  
  let sparkleInstance;
  
  // Make sparkleInstance accessible globally for buttons
  window.sparkleInstance = null;
  
  // Initialize with default settings
  function initSparkles(config = {}) {
    if (sparkleInstance) {
      sparkleInstance.destroy();
    }
    
    sparkleInstance = new window.SparkleFall({
      container: document.querySelector('.sparklefall-demo') || document.body,
      autoStart: true,
      injectStyles: true,
      ...config
    });
    
    // Store globally for button access
    window.sparkleInstance = sparkleInstance;
    
    updateCodeDisplay(config);
  }
  
  // Load presets
  window.loadPreset = function(preset) {
    const presets = {
      default: {
        sparkles: ['✨', '⭐', '💫', '🌟'],
        interval: 800,
        wind: 0,
        maxSparkles: 50
      },
      gold: {
        sparkles: ['⭐', '✨'],
        colors: ['#FFD700', '#FFA500', '#FF8C00'],
        interval: 600,
        wind: 0.2,
        minSize: 15,
        maxSize: 35
      },
      holiday: {
        sparkles: ['❄️', '🎄', '🎅', '🎁', '⭐'],
        interval: 600,
        wind: 0.3,
        spin: true
      },
      minimal: {
        sparkles: ['·'],
        colors: ['rgba(255,255,255,0.8)'],
        minSize: 2,
        maxSize: 4,
        interval: 100,
        minDuration: 1,
        maxDuration: 2,
        maxSparkles: 100
      },
      hearts: {
        sparkles: ['💕', '💖', '💗', '💝', '❤️'],
        interval: 1000,
        wind: -0.2,
        minSize: 20,
        maxSize: 40
      },
      nature: {
        sparkles: ['🍃', '🌸', '🌺', '🌻', '🦋'],
        interval: 900,
        wind: 0.4,
        minDuration: 3,
        maxDuration: 6
      },
      space: {
        sparkles: ['🚀', '🛸', '🌌', '⭐', '☄️', '🪐'],
        interval: 1200,
        wind: 0,
        spin: true,
        minSize: 15,
        maxSize: 30
      },
      party: {
        sparkles: ['🎉', '🎊', '🎈', '🎆', '✨'],
        interval: 500,
        maxSparkles: 70,
        wind: 0.1
      },
      pride: {
        sparkles: ['🏳️‍🌈', '🌈', '💜', '💙', '💚', '💛', '🧡', '❤️', '🏳️‍⚧️', '✨'],
        interval: 600,
        wind: 0.2,
        maxSparkles: 60,
        minSize: 20,
        maxSize: 40,
        spin: true
      }
    };
    
    const config = presets[preset] || presets.default;
    currentPreset = presets[preset] ? preset : 'default';
    initSparkles(config);

    // Update UI controls
    if (config.interval) document.getElementById('interval').value = config.interval;
    if (config.wind !== undefined) document.getElementById('wind').value = config.wind;
    if (config.maxSparkles) document.getElementById('maxSparkles').value = config.maxSparkles;
    if (config.sparkles) document.getElementById('sparkleChars').value = config.sparkles.join(',');
    if (config.colors) document.getElementById('colors').value = config.colors.join(',');

    updateDisplayValues();
    syncToURL();
  };
  
  // Update sparkles with current control values
  window.updateSparkles = function() {
    const sparkleChars = document.getElementById('sparkleChars').value.split(',').map(s => s.trim());
    const colorsInput = document.getElementById('colors').value;
    const colors = colorsInput ? colorsInput.split(',').map(c => c.trim()) : null;
    const size = parseInt(document.getElementById('sparkleSize').value);

    const config = {
      interval: parseInt(document.getElementById('interval').value),
      wind: parseFloat(document.getElementById('wind').value),
      maxSparkles: parseInt(document.getElementById('maxSparkles').value),
      minSize: size - 10,
      maxSize: size + 10,
      sparkles: sparkleChars,
      colors: colors
    };

    currentPreset = null;
    initSparkles(config);
    syncToURL();
  };
  
  // Toggle sparkles
  window.toggleSparkles = function() {
    const btn = document.getElementById('toggleBtn');
    if (window.sparkleInstance) {
      if (window.sparkleInstance.isRunning) {
        window.sparkleInstance.stop();
        btn.textContent = '▶️ Play';
        btn.classList.add('active');
      } else {
        window.sparkleInstance.start();
        btn.textContent = '⏸️ Pause';
        btn.classList.remove('active');
      }
    }
  };
  
  // Sync current settings to URL query string
  let currentPreset = null;
  window.syncToURL = function() {
    const params = new URLSearchParams();
    if (currentPreset) {
      // Preset is active — just store the preset name
      if (currentPreset !== 'default') {
        params.set('preset', currentPreset);
      }
    } else {
      // Custom settings — store individual values (skip defaults)
      const interval = document.getElementById('interval').value;
      const wind = document.getElementById('wind').value;
      const max = document.getElementById('maxSparkles').value;
      const size = document.getElementById('sparkleSize').value;
      const chars = document.getElementById('sparkleChars').value;
      const cols = document.getElementById('colors').value;
      if (interval !== '800') params.set('interval', interval);
      if (wind !== '0') params.set('wind', wind);
      if (max !== '50') params.set('maxSparkles', max);
      if (size !== '20') params.set('size', size);
      if (chars !== '✨,⭐,💫,🌟') params.set('sparkles', chars);
      if (cols) params.set('colors', cols);
    }
    const qs = params.toString();
    history.replaceState(null, '', qs ? '?' + qs : window.location.pathname);
  };

  // Update display values
  window.updateDisplayValues = function() {
    document.getElementById('intervalValue').textContent = document.getElementById('interval').value + 'ms';
    document.getElementById('windValue').textContent = document.getElementById('wind').value;
    document.getElementById('maxSparklesValue').textContent = document.getElementById('maxSparkles').value;
    const size = document.getElementById('sparkleSize').value;
    document.getElementById('sizeValue').textContent = `${size - 10}-${size + 10}px`;
  };
  
  // Update code display
  window.updateCodeDisplay = function(config) {
    const sparkles = config.sparkles || ['✨', '⭐', '💫', '🌟'];
    const code = `// Current configuration
const sparkles = new SparkleFall({
    interval: ${config.interval || 800},
    wind: ${config.wind || 0},
    maxSparkles: ${config.maxSparkles || 50},
    minSize: ${config.minSize || 10},
    maxSize: ${config.maxSize || 30},
    sparkles: ${JSON.stringify(sparkles)},
    colors: ${config.colors ? JSON.stringify(config.colors) : 'null'}
});`;
    const codeDisplay = document.getElementById('codeDisplay');
    if (codeDisplay) {
      codeDisplay.textContent = code;
    }
  };
  
  // Event listeners
  const addEventListeners = () => {
    const interval = document.getElementById('interval');
    const wind = document.getElementById('wind');
    const maxSparkles = document.getElementById('maxSparkles');
    const sparkleSize = document.getElementById('sparkleSize');
    const sparkleChars = document.getElementById('sparkleChars');
    const colors = document.getElementById('colors');
    
    // Update display values and apply changes in real-time for sliders
    const handleSliderChange = () => {
      window.updateDisplayValues();
      window.updateSparkles();
    };
    
    if (interval) interval.addEventListener('input', handleSliderChange);
    if (wind) wind.addEventListener('input', handleSliderChange);
    if (maxSparkles) maxSparkles.addEventListener('input', handleSliderChange);
    if (sparkleSize) sparkleSize.addEventListener('input', handleSliderChange);
    
    // Add enter key support for text inputs
    const handleTextEnter = (e) => {
      if (e.key === 'Enter') {
        window.updateSparkles();
      }
    };
    
    if (sparkleChars) sparkleChars.addEventListener('keydown', handleTextEnter);
    if (colors) colors.addEventListener('keydown', handleTextEnter);
  };
  
  // Initialize on load
  setTimeout(() => {
    addEventListeners();

    // Read settings from URL query params
    const params = new URLSearchParams(window.location.search);
    const preset = params.get('preset');
    window.loadPreset(preset || 'default');

    // Override individual params after preset
    const overrides = {};
    if (params.has('interval')) {
      const v = parseInt(params.get('interval'));
      if (!isNaN(v)) { document.getElementById('interval').value = v; overrides.interval = v; }
    }
    if (params.has('wind')) {
      const v = parseFloat(params.get('wind'));
      if (!isNaN(v)) { document.getElementById('wind').value = v; overrides.wind = v; }
    }
    if (params.has('maxSparkles')) {
      const v = parseInt(params.get('maxSparkles'));
      if (!isNaN(v)) { document.getElementById('maxSparkles').value = v; overrides.maxSparkles = v; }
    }
    if (params.has('size')) {
      const v = parseInt(params.get('size'));
      if (!isNaN(v)) { document.getElementById('sparkleSize').value = v; overrides.minSize = v - 10; overrides.maxSize = v + 10; }
    }
    if (params.has('sparkles')) {
      const v = params.get('sparkles');
      document.getElementById('sparkleChars').value = v;
      overrides.sparkles = v.split(',').map(s => s.trim());
    }
    if (params.has('colors')) {
      const v = params.get('colors');
      document.getElementById('colors').value = v;
      overrides.colors = v.split(',').map(c => c.trim());
    }

    // Apply overrides if any individual params were set
    if (Object.keys(overrides).length > 0) {
      window.updateDisplayValues();
      window.updateSparkles();
    }
  }, 100);
};

const pageHTML = `
<style>
    /* Apply background to html and body for full coverage */
    html, body {
        margin: 0;
        padding: 0;
        background: #0a1929;
        min-height: 100vh;
    }
    
    /* Scoped styles with higher specificity */
    .sparklefall-demo {
        /* Container reset */
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        width: 100%;
        min-height: 100vh;
    }
    
    .sparklefall-demo * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    .sparklefall-demo {
        font-family: 'Fredoka', 'Comic Sans MS', cursive, sans-serif;
        background: #0a1929;
        min-height: 100vh;
        color: #fff;
        overflow-x: hidden;
        position: relative;
        display: block;
    }
    
    /* Create distant stars background */
    .sparklefall-demo::before {
        content: '';
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: 
            radial-gradient(2px 2px at 20% 30%, white, transparent),
            radial-gradient(2px 2px at 60% 70%, white, transparent),
            radial-gradient(1px 1px at 50% 50%, white, transparent),
            radial-gradient(1px 1px at 80% 10%, white, transparent),
            radial-gradient(2px 2px at 90% 60%, white, transparent),
            radial-gradient(1px 1px at 30% 80%, white, transparent),
            radial-gradient(1px 1px at 70% 40%, white, transparent),
            radial-gradient(2px 2px at 40% 90%, white, transparent),
            radial-gradient(1px 1px at 10% 60%, white, transparent),
            radial-gradient(1px 1px at 85% 85%, white, transparent);
        background-size: 200% 200%;
        background-position: 0% 0%;
        animation: twinkle 120s ease-in-out infinite;
        opacity: 0.8;
        z-index: 1;
    }
    
    /* More dense star field */
    .sparklefall-demo::after {
        content: '';
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: 
            radial-gradient(1px 1px at 25% 35%, rgba(255,255,255,0.7), transparent),
            radial-gradient(1px 1px at 55% 75%, rgba(255,255,255,0.6), transparent),
            radial-gradient(1px 1px at 45% 45%, rgba(255,255,255,0.8), transparent),
            radial-gradient(1px 1px at 75% 15%, rgba(255,255,255,0.7), transparent),
            radial-gradient(1px 1px at 95% 55%, rgba(255,255,255,0.6), transparent),
            radial-gradient(1px 1px at 35% 85%, rgba(255,255,255,0.7), transparent),
            radial-gradient(1px 1px at 65% 35%, rgba(255,255,255,0.8), transparent),
            radial-gradient(1px 1px at 15% 25%, rgba(255,255,255,0.6), transparent),
            radial-gradient(1px 1px at 85% 75%, rgba(255,255,255,0.7), transparent),
            radial-gradient(1px 1px at 5% 95%, rgba(255,255,255,0.6), transparent),
            radial-gradient(1px 1px at 50% 20%, rgba(255,255,255,0.5), transparent),
            radial-gradient(1px 1px at 70% 90%, rgba(255,255,255,0.6), transparent),
            radial-gradient(1px 1px at 20% 70%, rgba(255,255,255,0.5), transparent),
            radial-gradient(1px 1px at 80% 50%, rgba(255,255,255,0.6), transparent);
        background-size: 250% 250%;
        background-position: 50% 50%;
        animation: twinkle 200s ease-in-out infinite reverse;
        opacity: 0.6;
        z-index: 1;
    }
    
    @keyframes twinkle {
        0%, 100% {
            background-position: 0% 0%;
            opacity: 0.6;
        }
        50% {
            background-position: 100% 100%;
            opacity: 0.9;
        }
    }

    .sparklefall-demo .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 20px;
        position: relative;
        z-index: 10;
    }

    .sparklefall-demo header {
        text-align: center;
        padding: 40px 0;
        animation: fadeInDown 0.8s ease;
    }

    .sparklefall-demo h1 {
        font-size: 3.5rem;
        margin-bottom: 10px;
        text-shadow: 2px 2px 8px rgba(0,0,0,0.5);
        font-weight: 600;
        letter-spacing: 1px;
        color: #fff;
    }
    
    .sparklefall-demo h2 {
        font-size: 1.8rem;
        color: #fff;
        font-weight: 500;
    }
    
    .sparklefall-demo h3 {
        font-size: 1.3rem;
        color: #fff;
    }

    .sparklefall-demo .subtitle {
        font-size: 1.3rem;
        opacity: 0.9;
        margin-bottom: 30px;
    }

    .sparklefall-demo .demo-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 20px;
        margin-bottom: 40px;
    }

    .sparklefall-demo .demo-card {
        background: rgba(13, 27, 42, 0.8);
        backdrop-filter: blur(10px);
        border-radius: 15px;
        padding: 20px;
        border: 1px solid rgba(255, 255, 255, 0.1);
        transition: transform 0.3s ease;
        animation: fadeInUp 0.8s ease;
        box-shadow: 0 4px 20px rgba(0,0,0,0.3);
    }

    .sparklefall-demo .demo-card:hover {
        transform: translateY(-5px);
    }

    .sparklefall-demo .demo-card h3 {
        margin-bottom: 15px;
        font-size: 1.3rem;
    }

    .sparklefall-demo .demo-card p {
        margin-bottom: 15px;
        opacity: 0.9;
        font-size: 1.1rem;
        color: #fff;
        line-height: 1.6;
    }
    
    .sparklefall-demo ul {
        list-style: none;
        padding-left: 0;
    }
    
    .sparklefall-demo li {
        color: #fff;
        line-height: 1.7;
        font-size: 1.05rem;
    }

    .sparklefall-demo button {
        background: linear-gradient(135deg, #4a69bd 0%, #0c2461 100%);
        color: white;
        border: none;
        padding: 10px 20px;
        border-radius: 25px;
        cursor: pointer;
        font-size: 1rem;
        font-weight: 500;
        transition: all 0.3s ease;
        margin: 5px;
        font-family: 'Fredoka', cursive;
        letter-spacing: 0.5px;
    }

    .sparklefall-demo button:hover {
        transform: translateY(-2px);
        box-shadow: 0 5px 20px rgba(74, 105, 189, 0.5);
        background: linear-gradient(135deg, #5f7fc9 0%, #1e3c72 100%);
    }

    .sparklefall-demo button:active {
        transform: translateY(0);
    }

    .sparklefall-demo button.active {
        background: linear-gradient(135deg, #ffd89b 0%, #ff8a00 100%);
        box-shadow: 0 4px 15px rgba(255, 138, 0, 0.4);
    }

    .sparklefall-demo .controls {
        background: rgba(13, 27, 42, 0.9);
        backdrop-filter: blur(15px);
        border-radius: 15px;
        padding: 30px;
        margin-bottom: 40px;
        animation: fadeIn 0.8s ease;
        border: 1px solid rgba(255, 255, 255, 0.1);
        box-shadow: 0 8px 32px rgba(0,0,0,0.4);
    }

    .sparklefall-demo .control-group {
        margin-bottom: 20px;
    }

    .sparklefall-demo .control-group label {
        display: block;
        margin-bottom: 10px;
        font-weight: 600;
        font-size: 1.1rem;
    }
    .sparklefall-demo .control-group input[type="range"] {
        width: 100%;
        -webkit-appearance: none;
        appearance: none;
        height: 6px;
        background: rgba(255, 255, 255, 0.2);
        border-radius: 3px;
        outline: none;
        cursor: pointer;
    }
    
    .sparklefall-demo .control-group input[type="range"]::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 18px;
        height: 18px;
        background: #4a69bd;
        border-radius: 50%;
        cursor: pointer;
    }
    
    .sparklefall-demo .control-group input[type="range"]::-moz-range-thumb {
        width: 18px;
        height: 18px;
        background: #4a69bd;
        border-radius: 50%;
        cursor: pointer;
        border: none;
    }

    .sparklefall-demo .control-group input[type="text"] {
        width: 100%;
        padding: 8px;
        border-radius: 5px;
        border: 1px solid rgba(255, 255, 255, 0.2);
        background: rgba(10, 25, 41, 0.6);
        color: white;
        font-family: 'Fredoka', cursive;
    }

    .sparklefall-demo .control-group input[type="text"]::placeholder {
        color: rgba(255, 255, 255, 0.6);
    }

    .sparklefall-demo .value-display {
        font-size: 1rem;
        opacity: 0.8;
    }

    .sparklefall-demo .preset-buttons {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        margin-top: 20px;
    }

    .sparklefall-demo .code-block {
        background: rgba(5, 15, 25, 0.8);
        padding: 15px;
        border-radius: 10px;
        font-family: 'Courier New', monospace;
        font-size: 1rem;
        overflow-x: auto;
        margin-top: 20px;
        border: 1px solid rgba(255, 255, 255, 0.1);
    }
    
    .sparklefall-demo .code-block code {
        color: #fff;
        font-family: inherit;
        display: block;
        font-size: 1rem;
    }

    .sparklefall-demo footer {
        text-align: center;
        padding: 40px 0;
        opacity: 0.8;
    }

    .sparklefall-demo footer a {
        color: white;
        text-decoration: none;
        margin: 0 10px;
    }

    .sparklefall-demo footer a:hover {
        text-decoration: underline;
    }

    @keyframes fadeInDown {
        from {
            opacity: 0;
            transform: translateY(-20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }

    @media (max-width: 768px) {
        .sparklefall-demo h1 { font-size: 2rem; }
        .sparklefall-demo .demo-grid { grid-template-columns: 1fr; }
    }
</style>

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@300;400;500;600;700&display=swap" rel="stylesheet">

<div class="sparklefall-demo">
<div class="container">
    <header class="sparklefall-header">
        <h1>✨ Sparklefall ✨</h1>
        <p class="subtitle">Beautiful, fun falling sparkle animation JavaScript library</p>
        <div class="preset-buttons">
            <button onclick="loadPreset('default')">✨ Default</button>
            <button onclick="loadPreset('gold')">🌟 Gold Rush</button>
            <button onclick="loadPreset('holiday')">🎄 Holiday</button>
            <button onclick="loadPreset('minimal')">• Minimal</button>
            <button onclick="loadPreset('hearts')">💕 Hearts</button>
            <button onclick="loadPreset('nature')">🍃 Nature</button>
            <button onclick="loadPreset('space')">🚀 Space</button>
            <button onclick="loadPreset('party')">🎉 Party</button>
            <button onclick="loadPreset('pride')">🏳️‍🌈 Pride</button>
        </div>
    </header>

    <div class="controls">
        <h2 style="margin-bottom: 20px;">🎮 Interactive Controls</h2>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px;">
            <div class="control-group">
                <label for="interval">Spawn Interval: <span class="value-display" id="intervalValue">800ms</span></label>
                <input type="range" id="interval" min="100" max="3000" value="800" step="100">
            </div>

            <div class="control-group">
                <label for="wind">Wind Effect: <span class="value-display" id="windValue">0</span></label>
                <input type="range" id="wind" min="-1" max="1" value="0" step="0.1">
            </div>

            <div class="control-group">
                <label for="maxSparkles">Max Sparkles: <span class="value-display" id="maxSparklesValue">50</span></label>
                <input type="range" id="maxSparkles" min="10" max="200" value="50" step="10">
            </div>

            <div class="control-group">
                <label for="sparkleSize">Size Range: <span class="value-display" id="sizeValue">10-30px</span></label>
                <input type="range" id="sparkleSize" min="5" max="50" value="20" step="5">
            </div>

            <div class="control-group">
                <label for="sparkleChars">Sparkle Characters</label>
                <input type="text" id="sparkleChars" value="✨,⭐,💫,🌟" placeholder="Enter comma-separated emojis">
            </div>

            <div class="control-group">
                <label for="colors">Colors (leave empty for emoji colors)</label>
                <input type="text" id="colors" value="" placeholder="#FFD700,#FFF,#FF69B4">
            </div>
        </div>

        <div style="margin-top: 20px; display: flex; gap: 10px; flex-wrap: wrap; justify-content: space-between;">
            <div style="display: flex; gap: 10px; flex-wrap: wrap;">
                <button onclick="window.sparkleInstance && window.sparkleInstance.burst(30)">💥 Burst!</button>
                <button onclick="toggleSparkles()" id="toggleBtn">⏸️ Pause</button>
                <button onclick="loadPreset('default')">🔄 Reset to Default</button>
            </div>
            <button onclick="updateSparkles()">🔄 Apply Code Changes</button>
        </div>

        <div class="code-block">
            <code id="codeDisplay">
// Current configuration
const sparkles = new SparkleFall({
    interval: 800,
    wind: 0,
    maxSparkles: 50,
    minSize: 10,
    maxSize: 30,
    sparkles: ['✨', '⭐', '💫', '🌟'],
    colors: null
});
            </code>
        </div>
    </div>

    <div class="demo-grid">
        <div class="demo-card">
            <h3>🚀 Getting Started</h3>
            <p>Install SparkleFall with npm:</p>
            <div class="code-block">
                <code>npm install sparklefall</code>
            </div>
            <p style="margin-top: 15px;">Or use CDN:</p>
            <div class="code-block">
                <code>&lt;link rel="stylesheet" href="https://unpkg.com/sparklefall@latest/dist/sparklefall.css"&gt;</code>
                <code>&lt;script src="https://unpkg.com/sparklefall@latest/dist/sparklefall.min.js"&gt;&lt;/script&gt;</code>
            </div>
        </div>

        <div class="demo-card">
            <h3>🧩 Include CSS</h3>
            <p>Include the default CSS (choose one):</p>
            <p style="margin-bottom: 8px;">ESM (Vite/Webpack):</p>
            <div class="code-block">
                <code>import 'sparklefall/styles.css';</code>
                <code>import SparkleFall from 'sparklefall';</code>
                <code>const sparkles = new SparkleFall({ injectStyles: true });</code>
            </div>
            <p style="margin-top: 15px;">CDN:</p>
            <div class="code-block">
                <code>&lt;link rel="stylesheet" href="https://unpkg.com/sparklefall@latest/dist/sparklefall.css"&gt;</code>
                <code>&lt;script src="https://unpkg.com/sparklefall@latest/dist/sparklefall.min.js"&gt;&lt;/script&gt;</code>
                <code>&lt;script&gt;const s = new SparkleFall({ injectStyles: true });&lt;/script&gt;</code>
            </div>
        </div>

        <div class="demo-card">
            <h3>⚛️ Framework Support</h3>
            <p>SparkleFall works with your favorite framework:</p>
            <div class="code-block">
                <code>npm install react-sparklefall</code>
            </div>
            <div class="code-block">
                <code>npm install ngx-sparklefall</code>
            </div>
            <p style="margin-top: 15px;">Full TypeScript support included!</p>
        </div>

        <div class="demo-card">
            <h3>⚛️ React Usage</h3>
            <p>Install and import the CSS once, then use the component:</p>
            <div class="code-block">
                <code>import 'sparklefall/styles.css';</code>
                <code>import { SparkleFall } from 'react-sparklefall';</code>
                <code></code>
                <code>export default function App() {</code>
                <code>  return (</code>
                <code>    &lt;SparkleFall maxSparkles={50}&gt;</code>
                <code>      &lt;h1&gt;✨ Hello!&lt;/h1&gt;</code>
                <code>    &lt;/SparkleFall&gt;</code>
                <code>  );</code>
                <code>}</code>
            </div>
        </div>

        <div class="demo-card">
            <h3>🅰️ Angular Usage</h3>
            <p>Import the CSS in global styles and use the standalone component:</p>
            <div class="code-block">
                <code>/* styles.css */</code>
                <code>@import 'sparklefall/styles.css';</code>
                <code></code>
                <code>/* app.component.ts */</code>
                <code>import { Component } from '@angular/core';</code>
                <code>import { SparkleFallComponent } from 'ngx-sparklefall';</code>
                <code></code>
                <code>@Component({</code>
                <code>  selector: 'app-root',</code>
                <code>  standalone: true,</code>
                <code>  imports: [SparkleFallComponent],</code>
                <code>  template: \`&lt;sparkle-fall [maxSparkles]="50"&gt;&lt;/sparkle-fall&gt;\`</code>
                <code>})</code>
                <code>export class AppComponent {}</code>
            </div>
        </div>

        <div class="demo-card">
            <h3>✨ Features</h3>
            <ul style="list-style: none; padding-left: 0;">
                <li>• Zero dependencies</li>
                <li>• Fully customizable</li>
                <li>• TypeScript support</li>
                <li>• < 3KB gzipped</li>
                <li>• Mobile optimized</li>
                <li>• Performance focused</li>
            </ul>
        </div>
    </div>

    <footer>
        <p style="margin-bottom: 15px;">Made with ✨ by <a href="https://theresasumma.com" target="_blank">Theresa</a></p>
        <div>
            <a href="https://github.com/theresaanna/sparklefall" target="_blank">GitHub</a>
            <a href="https://www.npmjs.com/package/sparklefall" target="_blank">Core NPM</a>
            <a href="https://www.npmjs.com/package/react-sparklefall" target="_blank">React NPM</a>
            <a href="https://www.npmjs.com/package/ngx-sparklefall" target="_blank">Angular NPM</a>
        </div>
    </footer>
</div>
</div>
`;
