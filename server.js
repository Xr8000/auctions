// server.js
const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 8080;

// Statische Dateien aus dem "build"-Ordner ausliefern
app.use(express.static(path.join(__dirname, 'build')));

// Alle Anfragen auf index.html weiterleiten (für React-Routing)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server läuft auf Port ${port}`);
});
