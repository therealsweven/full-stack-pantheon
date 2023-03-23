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
      from: `"Mercury POS 👻" <'${process.env.EMAIL_USER}'>`,
      to: recipient,
      subject: "Welcome to Mercury POS ✔",
      html: "<b>We just wanted to welcome you to the Mercury POS community!  We really hope that you enjoy using our POS system.  If you ever have any questions or issues when using the product, feel free to send your concerns to the email address this came from.  Thank you for your business, and have a wonderful day!    -Mercury POS </b>",
    });

    console.log("Message sent: %s", info.messageId);
  },
  sendVerifyEmail: async (recipient) => {
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
      from: `"Mercury POS 👻" <'${process.env.EMAIL_USER}'>`,
      to: recipient,
      subject: "Please Verify Your Email",
      html: "<b>Please click the verification link below to activate your account.  Email verification is require to log in to your merchant account.</b>",
    });

    console.log("Message sent: %s", info.messageId);
  },

  //                            {    }   merchant.name
  sendNewEmployeeEmail: async (employee, merchant) => {
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
      from: `"Mercury POS 👻" <'${process.env.EMAIL_USER}'>`,
      to: employee.email,
      subject: `${merchant} Has Added You to Their POS`,
      html: `<b>Welcome ${employee.name} to the Mercury POS.  Your employer, ${merchant}, has added you to their roster.  To access the POS, when prompted, you will enter your employee login ID, ${employee.login_id}.  Please keep this login key handy as you will not be able to access the system without it.  Thanks, and have a great day!  
      
      -Mercury POS
      </b>`,
    });

    console.log("Message sent: %s", info.messageId);
  },
};