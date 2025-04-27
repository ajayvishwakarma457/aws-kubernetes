const express = require('express');
const app = express();

const PORT = 3000;

// Create a simple route
app.get('/', (req, res) => {
  res.send('Hello World from Express.js!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
