/**
 * Electric Vehicle Market Performance & Insights
 * Local Development Server (Zero-Dependency Node.js runner)
 * Author: Priyanshu Vara
 * 
 * Auto-detects available port if 5000 is occupied.
 */

const http = require('http');
const fs = require('fs');
const path = require('path');

const INITIAL_PORT = parseInt(process.argv[2] || process.env.PORT || '5000', 10);
const HOST = '127.0.0.1';

const MIME_TYPES = {
  '.html': 'text/html; charset=UTF-8',
  '.css': 'text/css; charset=UTF-8',
  '.js': 'application/javascript; charset=UTF-8',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon'
};

const server = http.createServer((req, res) => {
  // Normalize URL
  let parsedUrl = req.url.split('?')[0].split('#')[0];
  if (parsedUrl === '/' || parsedUrl === '') {
    parsedUrl = '/index.html';
  }

  const filePath = path.join(__dirname, parsedUrl);
  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';

  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === 'ENOENT') {
        res.writeHead(404, { 'Content-Type': 'text/plain; charset=UTF-8' });
        res.end('404 Not Found');
      } else {
        res.writeHead(500, { 'Content-Type': 'text/plain; charset=UTF-8' });
        res.end(`Server Error: ${err.code}`);
      }
    } else {
      res.writeHead(200, { 
        'Content-Type': contentType,
        'Cache-Control': 'no-cache'
      });
      res.end(content);
    }
  });
});

function listen(port) {
  server.listen(port, HOST, () => {
    console.log(`\n======================================================`);
    console.log(` ⚡ EV Insights Webpage is LIVE!`);
    console.log(` 🔗 Open in browser: http://${HOST}:${port}/`);
    console.log(` Author: Priyanshu Vara`);
    console.log(` Press Ctrl + C to stop`);
    console.log(`======================================================\n`);
  });

  server.once('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.log(`⚠️  Port ${port} is currently in use. Trying port ${port + 1}...`);
      listen(port + 1);
    } else {
      console.error('Server error:', err);
    }
  });
}

listen(INITIAL_PORT);
