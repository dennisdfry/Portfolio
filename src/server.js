const express = require('express');
const path = require('path');
const app = express();

// Serviere statische Dateien aus dem Angular-Build-Ordner
app.use(express.static(path.join(__dirname, 'dist/portfolio-website')));

// Alle Routen an index.html weiterleiten
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/portfolio-website/index.html'));
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server läuft auf Port ${PORT}`);
});