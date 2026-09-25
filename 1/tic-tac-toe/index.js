const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Serve static files from the public directory (index.html served by default on /)
app.use(express.static(path.join(__dirname, 'public')));

// API route example: server status
app.get('/api/status', (req, res) => {
  res.json({ status: 'ok', message: 'Tic-Tac-Toe Server is running' });
});

// Catch-all route for SPA behavior compatible with Express 5+
app.get('{*path}', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`🎮 Tic-Tac-Toe server is running on http://localhost:${PORT}`);
});