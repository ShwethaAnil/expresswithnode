var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'guptha.shwetha@gmail.com',
    pass: 'babloolakshmi'
  }
});

var mailOptions = {
  from: 'guptha.shwetha@gmail.com',
  to: 'shwetha31ramesh@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});