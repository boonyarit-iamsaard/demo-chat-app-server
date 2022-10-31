const express = require('express');

const app = express();
const http = require('http').Server(app);
const cors = require('cors');

app.use(cors());

app.get('/api', (req, res) => {
  res.json({
    message: 'Welcome to the API',
  });
});

const port = 3000;
http.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
