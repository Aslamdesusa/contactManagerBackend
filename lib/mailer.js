"use strict";
const nodemailer = require("nodemailer");
const config = require('config');
const Config = JSON.parse(JSON.stringify(config));

// async..await is not allowed in global scope, must use a wrapper
async function mail(to_email, subject, html, to_portal) {

  let htmlContant = ''
  if (html == 'invite') {
    htmlContant = `<div>Hey there, <br> <br>Welcome to Zoho ContactManager! <br>Click the button below to accept the invitation and get started. <br> To log in to Zoho ContactManager, use your existing Zoho account password. <br> <br> <a href="http://localhost:8080/#/contactManager?queryEmail=${to_email}&queryPortal=${to_portal}" target="_blank"> <button  style="background-color: rgb(62,158,228); border: 1px solid rgb(58,154,224); color: rgb(255,255,255); padding: 10px; font-weight: bold;">Accept Invitation</button><br> </a> We look forward to helping your organization grow! <br> <br> <span>Cheers,</span> <br> <span>The Zoho Team</span> </div>`
  }else if (html == 'success') {
    htmlContant = `<p>Dear, <br>Here is your new password demo1234</p>`
  } else{
    htmlContant = `<h2>Dear ${to_email.split('@')[0]}</h2><p>We have noticed a new sign-in to your Zoho account associated with ${to_email} <br> on ${new Date()}.</p><p>If this wasn't you, check your account activity <a href="http://localhost:8080/#/">here</a></p>`
  }
  
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

