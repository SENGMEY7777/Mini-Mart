const express = require('express');
const app = express();

app.use(express.json());

// Basic routes or middleware can be added here

const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`Port ${PORT} is already in use. Please use a different port or stop the other process.`);
  } else {
    console.error(err);
  }
});

module.exports = app;
