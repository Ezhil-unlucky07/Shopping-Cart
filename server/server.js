const express = require('express');
const https = require('https');
const fs = require('fs');
const path = require('path');

const app = express();

const options = {
  key: fs.readFileSync(path.join(__dirname, 'localhost-key.pem')),
  cert: fs.readFileSync(path.join(__dirname, 'localhost.pem')),
};


app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

https.createServer(options, app).listen(3000, () => {
  console.log('Secure server running at https://localhost:3000');
});
