var nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      // TODO: replace `user` and `pass` values from <https://forwardemail.net>
      
    user: 'ahmed.test.ndjs@gmail.com',
    pass: 'xsmn qxdc xrer wytk'
  }
});

var mailOptions = {
  from: 'ahmed.test.ndjs@gmail.com',
  to: 'ahmed.amina.douiri@gmail.com',
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