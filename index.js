const express = require('express'); 
const cors = require('cors'); 
const sgMail = require('@sendgrid/mail');

const app = express();
sgMail.setApiKey("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");
app.use(cors());

app.get('/', (req, res) => {
  res.send("Welcome to the Sendgrid Emailing Server"); 
});

app.get('/send-email', (req,res) => {
  const { sender, name, message } = req.query; 
  console.log(sender, name, message)
  const msg = {
    to: sender,
    from: 'hakimmaaouia7@gmail.com',
    subject: name,
    text: message,
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  };
  
  sgMail.send(msg)
});






app.listen(4000, () => console.log("Running on Port 4000")); 