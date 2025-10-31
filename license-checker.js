// license-checker.js
const fs = require('fs');
const exists = fs.existsSync('LICENSE') || fs.existsSync('LICENSE.md');
console.log(exists ? 'LICENSE present' : 'LICENSE missing');
