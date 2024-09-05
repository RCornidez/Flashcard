import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs/promises';
import cors from "cors";

// Set up Express
const app = express();
app.use(cors({ origin: "*" }));
const port = 3000;

// Get the directory of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Serve the index.html file for the root route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/test', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'flashcards.html'));
});

app.get('/format', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'format.html'));
});

// Start the server
app.listen(port, '0.0.0.0', () => {
    console.log(`Server is running on http://localhost:${port}`);
});
