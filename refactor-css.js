const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, 'app', 'globals.css');
let css = fs.readFileSync(cssPath, 'utf8');

// Add CSS variables
const vars = `
:root {
  --bg-color: #0b0b0b;
  --text-color: white;
  --glass-rgb: 255, 255, 255;
  --bg-pattern: rgba(255, 255, 255, 0.03);
  --contact-btn-text: black;
}

[data-theme='light'] {
  --bg-color: #f8f9fa;
  --text-color: #111111;
  --glass-rgb: 0, 0, 0;
  --bg-pattern: rgba(0, 0, 0, 0.04);
  --contact-btn-text: white;
}

.theme-toggle {
  background: rgba(var(--glass-rgb), 0.1);
  border: 1px solid rgba(var(--glass-rgb), 0.2);
  width: 44px;
  height: 44px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-color);
  cursor: pointer;
  position: relative;
  transition: all 0.3s ease;
}

.theme-toggle:hover {
  background: rgba(var(--glass-rgb), 0.15);
  transform: scale(1.05);
}
`;

if (!css.includes(':root {\\n  --bg-color:')) {
  css = vars + '\\n' + css;
}

// Replace #0b0b0b
css = css.replace(/#0b0b0b/g, 'var(--bg-color)');

// Replace text colors
css = css.replace(/color:\s*white/g, 'color: var(--text-color)');
css = css.replace(/color:\s*rgba\(255,\s*255,\s*255,\s*0\.\d+\)/g, (match) => {
  return match.replace(/255,\s*255,\s*255/g, 'var(--glass-rgb)');
});

// Replace glass colors
css = css.replace(/rgba\(\s*255\s*,\s*255\s*,\s*255\s*,\s*([0-9.]+)\s*\)/g, 'rgba(var(--glass-rgb), $1)');

// Specifically fix the grid background pattern
css = css.replace(/linear-gradient\(rgba\(var\(--glass-rgb\),0.03\) 1px, transparent 1px\)/g, 'linear-gradient(var(--bg-pattern) 1px, transparent 1px)');
css = css.replace(/linear-gradient\(90deg, rgba\(var\(--glass-rgb\),0.03\) 1px, transparent 1px\)/g, 'linear-gradient(90deg, var(--bg-pattern) 1px, transparent 1px)');

fs.writeFileSync(cssPath, css);
console.log('CSS refactored for themes!');
