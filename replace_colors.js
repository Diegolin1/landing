const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'components', 'LuminaRefactored.tsx');
let content = fs.readFileSync(filePath, 'utf8');

// Replace blue with brand
content = content.replace(/blue-/g, 'brand-');

// Replace emerald with gold for success/accents
content = content.replace(/emerald-/g, 'gold-');

// Replace slate background shades with brand shades
content = content.replace(/slate-900/g, 'brand-900');
content = content.replace(/slate-800/g, 'brand-800');
content = content.replace(/slate-950/g, 'brand-950');

// Replace slate text/border shades with stone shades
content = content.replace(/slate-700/g, 'stone-700');
content = content.replace(/slate-600/g, 'stone-600');
content = content.replace(/slate-500/g, 'stone-500');
content = content.replace(/slate-400/g, 'stone-400');
content = content.replace(/slate-300/g, 'stone-300');
content = content.replace(/slate-200/g, 'stone-200');
content = content.replace(/slate-100/g, 'stone-100');
content = content.replace(/slate-50/g, 'stone-50');

// Replace specific indigo nuances if any
content = content.replace(/indigo-700/g, 'brand-600');
content = content.replace(/indigo-600/g, 'brand-500');
content = content.replace(/indigo-500/g, 'brand-400');

// Replace amber with gold
content = content.replace(/amber-/g, 'gold-');

// Replace font-extrabold with font-black for headings
content = content.replace(/font-extrabold/g, 'font-display font-black');

// Fix specific known shadow utilities to map to our shadow-glow and shadow-glass if possible
content = content.replace(/shadow-xl shadow-brand-100 dark:shadow-brand-900\/40/g, 'shadow-glow');
content = content.replace(/shadow-lg shadow-brand-200 dark:shadow-none/g, 'shadow-glow');
content = content.replace(/shadow-2xl/g, 'shadow-glass');

fs.writeFileSync(filePath, content, 'utf8');
console.log('Colors and typography refactored in LuminaRefactored.tsx');
