// src/dataParser.js
const fs = require('fs');
const path = require('path');

function parseData() {
    const filePath = path.join(__dirname, 'data.txt');  // Updated to match the file location
    const data = fs.readFileSync(filePath, 'utf-8');
    
    const regions = data.split('\n').map(line => {
        const [code, name] = line.split(',');
        const parts = code.trim().split('.');
        return {
            code: code.trim(),
            name: name.trim(),
            parts: parts.map(part => part.trim())
        };
    });

    return regions;
}

module.exports = parseData;
