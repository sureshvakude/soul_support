const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const authRoutes = require('./routes/userRoutes');
const cors = require('cors'); // Import cors
const path = require('path');
const fs = require('fs');

dotenv.config();
connectDB();

const app = express();

// Middleware
app.use(cors()); // Enable CORS
app.use(bodyParser.json());

// Serve static files
const staticPath = path.join(__dirname, 'static');
app.use('/static', express.static(staticPath));

// Middleware to check for token
const verifyToken = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');

  if (!token) {
    return res.status(403).json({ message: 'No token, authorization denied' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.id; // Attach the user ID to the request object
    next(); // Continue to the route handler
  } catch (error) {
    res.status(400).json({ message: 'Token is not valid' });
  }
};

// Endpoint to get all PDFs and music files
app.get('/api/pdfs', (req, res) => {
  const pdfPath = path.join(staticPath, 'pdf');
  try {
    const pdfFiles = fs.readdirSync(pdfPath).filter(file => file.endsWith('.pdf'));
    res.json({
      pdfs: pdfFiles.map(file => `/static/pdf/${file}`),
    });
  } catch (error) {
    console.error('Error reading files:', error);
    res.status(500).json({ message: 'Error retrieving files' });
  }
});

// Endpoint to get all PDFs and music files
app.get('/api/musics', (req, res) => {
  const musicPath = path.join(staticPath, 'musics');
  try {
    const musicFiles = fs.readdirSync(musicPath).filter(file => /\.(mp3|wav|aac)$/.test(file));
    res.json({
      musics: musicFiles.map(file => `/static/musics/${file}`)
    });
  } catch (error) {
    console.error('Error reading files:', error);
    res.status(500).json({ message: 'Error retrieving files' });
  }
});


// Routes
app.use('/api/user', authRoutes);

// Listen
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});