const nodemailer = require("nodemailer");
require("dotenv").config();

module.exports = {
  sendWelcomeEmail: async (recipient) => {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: `"Mercury POS 👻" <'${process.env.EMAIL_USER}'>`, // sender address
      to: recipient, // list of receivers
      subject: "Welcome to Mercury POS ✔", // Subject line
      html: "<b>We just wanted to welcome you to the Mercury POS community!  We really hope that you enjoy using our POS system.  If you ever have any questions or issues when using the product, feel free to send your concerns to the email-address this came from.  Thank you for your business, and have a wonderful day!    -Mercury POS </b>", // html body
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
  },
};
