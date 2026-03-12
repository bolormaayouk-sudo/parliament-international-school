const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:5173',
  credentials: true
}));
app.use(express.json());

app.use('/api/auth', require('./routes/auth'));
app.use('/api/dashboard', require('./routes/dashboard'));
app.get('/api/health', (req, res) => res.json({ status: 'OK', message: 'Parliament International School API running' }));

const PORT = process.env.PORT || 8000;

// Try MongoDB — but start server regardless
const startServer = () => {
  app.listen(PORT, () => {
    console.log(`🚀 Parliament International School Server running on port ${PORT}`);
  });
};

if (process.env.MONGO_URI) {
  mongoose.connect(process.env.MONGO_URI)
    .then(() => {
      console.log('✅ MongoDB Connected — using database');
      startServer();
    })
    .catch(err => {
      console.warn('⚠️  MongoDB unavailable — running in DEMO MODE (no database)');
      console.warn('   Login will use hardcoded demo credentials.');
      startServer();
    });
} else {
  console.warn('⚠️  No MONGO_URI — running in DEMO MODE');
  startServer();
}
