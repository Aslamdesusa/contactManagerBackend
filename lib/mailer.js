"use strict";
const nodemailer = require("nodemailer");
const config = require('config');
const Config = JSON.parse(JSON.stringify(config));

// async..await is not allowed in global scope, must use a wrapper
async function mail(to_email, subject, html) {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  // let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service: "gmail",
    // port: 587,
    // secure: false, // true for 465, false for other ports
    auth: {
      user: Config.email,
      pass: Config.password,
    },
  });

  let d = new Date();

  let htmlContant,

  if (html === 'invite') {
    htmlContant = 'invation'
  }else{
    htmlContant = `<h2>Dear ${to_email.split('@')[0]}</h2><p>We have noticed a new sign-in to your Zoho account associated with ${to_email} <br> on ${d}.</p><p>If this wasn't you, check your account activity <a href="http://localhost:8080/#/">here</a></p>`
  }

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Zoho Team 👻" <noreplay@zohoaccounts.com>', // sender address
    to: to_email, // list of receivers
    subject: `${subject} ✔` , // Subject line
    text: "", // plain text body
    html: htmlContant, // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

module.exports = mail;

