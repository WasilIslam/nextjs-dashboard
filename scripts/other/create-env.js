const fs = require('fs');
const path = require('path');

const file = process.argv[2];
const dir = path.dirname(file);
const content = fs.readFileSync(file, 'utf8');

const config = content.match(/const firebaseConfig = \{([\s\S]*?)\};/)[1];
const vars = config.match(/(\w+): ["']([^"']+)["']/g);

let env = '';
vars.forEach(v => {
  const [key, value] = v.split(': ');
  env += `${key.toUpperCase()}=${value.replace(/["']/g, '')}\n`;
});

fs.writeFileSync(path.join(dir, 'firebase.env'), env);
