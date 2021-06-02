import path from 'path';
import express from 'express';

const app = express();
const CWD = process.cwd();

app.use(express.json());

// serving frontend
app.use(express.static(path.resolve(CWD, 'dist')));
app.get('*', (req, res) => {
  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>Hello World</title>
    </head>
    <body>
    <div id="app"></div>
    <script src="/client.bundle.js"></script>
    </body>
    </html>
  `;

  res.send(html);
});

app.listen(3000, () => {
  console.log('server start listening on port 3000');
});
