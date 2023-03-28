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
      to: recipient.email,
      subject: "Welcome to Mercury POS ✔",
      html: `<!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Document</title>
        </head>
        <body
          style="font-size: larger"
          style="
            font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
              'Lucida Sans', Arial, sans-serif;
          "
        >
          <h2>Dear <b>${recipient.business_name},</b></h2>
          <p>
            We would like to welcome you to the Mercury POS community! We really hope
            that you enjoy using our POS system. You can now login with your user name, ${recipient.username}, and password. When setting up your business in the
            POS, use the user login id <b>'admin'</b> to log in. This will give you access
            to all admin settings. We strongly recommend changing or deleting the
            admin profile after you have added at least one other employee with
            manager privileges.
            <br /><br />
            If you ever have any questions or issues when using the product, feel free
            to send your concerns to this email address. Thank you for your business,
            and have a wonderful day!
            <br /><br />
            -Mercury POS
          </p>
        </body>
      </html>
      `,
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
  sendPWResetEmail: async (merchant, tempPW) => {
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
      to: merchant.email,
      subject: `Password Reset`,
      html: `<p>Here is a temporary password to get you into your merchant account. We recommend changing this ASAP.</p></br></br>
      <b>${tempPW}</b>`,
    });

    console.log("Message sent: %s", info.messageId);
  },
  sendUsernameEmail: async (merchant) => {
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
      to: merchant.email,
      subject: `Password Reset`,
      html: `<p>Your username is:</p></br></br>
      <b>${merchant.username}</b>`,
    });

    console.log("Message sent: %s", info.messageId);
  },
};
