var nodemailer = require('nodemailer');


var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'kenneboston1@gmail.com',
      pass: 'Nadine1995'
    }
  });

  var mailOptions = {
    from: 'kenneboston1@gmail.com',
    to: 'kenneboston@yahoo.fr',
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