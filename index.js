// Express kütüphanesini içeri aktar1yoruz
const express = require('express');

// Bir Express uygulamas1 olu_turuyoruz
const app = express();

// Sunucunun çal1_aca1 port numaras1n1 belirliyoruz
const port = 3000;

// Ana sayfa ('/') için bir GET endpoint'i olu_turuyoruz
app.get('/', (req, res) => {
  // JSON format1nda bir obje gönderiyoruz
  res.json({
    message: 'Merhaba! Bu bir JSON yan1t1.',
    timestamp: new Date().toISOString(),
    data: {
      name: 'Node.js',
      framework: 'Express',
      version: '1.0'
    }
  });
});

// Sunucuyu belirtilen portta ba_lat1yoruz
app.listen(port, () => {
  console.log(`Uygulama http://localhost:${port} adresinde Ã§alÅŸÄ±yor.`);
});

