const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const authRoutes = require('./routes/userRoutes');

dotenv.config();
connectDB();

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/user', authRoutes);

// Listen
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});