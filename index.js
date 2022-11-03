const express = require('express');

const app = express();
const http = require('http').Server(app);
const cors = require('cors');

app.use(cors());

const io = require('socket.io')(http, {
  cors: {
    origin: 'http://localhost:3000',
  },
});

io.on('connection', socket => {
  console.log(`🟢: ${socket.id} online`);
  io.on('disconnect', () => {
    console.log(`🔴: ${socket.id} offline`);
  });
});

app.get('/api', (req, res) => {
  res.json({
    message: 'Welcome to the API',
  });
});

const port = 5000;
http.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
