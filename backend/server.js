const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const PORT = 3000;


app.use(cors());
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
  service: 'gmail', 
  auth: {
    user: 'dennisdfry@gmail.com',
    pass: 'Jasonjolanda2021', 
  },
});


const rateLimit = {};
const RATE_LIMIT_WINDOW = 60000; 
const MAX_REQUESTS_PER_WINDOW = 2; 

app.post('/send-email', (req, res) => {
  const { name, email, message } = req.body;
  const clientIp = req.ip;

  if (rateLimit[clientIp] && rateLimit[clientIp] >= MAX_REQUESTS_PER_WINDOW) {
    return res.status(429).json({ message: 'Zu viele Anfragen. Bitte versuche es später erneut.' });
  }
  const mailOptions = {
    from: 'dennis.dfry@gmail.com',
    to: 'dennis.dfry@gmail.com', 
    subject: 'Neue Kontaktanfrage',
    text: `Name: ${name}\nE-Mail: ${email}\nNachricht: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      return res.status(500).json({ message: 'Fehler beim Versenden der E-Mail.' });
    }

    rateLimit[clientIp] = (rateLimit[clientIp] || 0) + 1;
    setTimeout(() => {
      rateLimit[clientIp] = 0;
    }, RATE_LIMIT_WINDOW);

    res.status(200).json({ message: 'E-Mail erfolgreich versendet.' });
  });
});

app.listen(PORT, () => {
  console.log(`Server läuft auf http://localhost:${PORT}`);
});