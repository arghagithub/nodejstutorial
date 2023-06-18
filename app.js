require('dotenv').config();
const nodemailer = require("nodemailer");

const sendmail = async (req,res) => {
    // Create a transporter using your SMTP settings
    let transporter = await nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        }
    });

    const mailOptions = {
        from: process.env.EMAIL,
        to: process.env.TOEMAIL,
        subject: 'Sign in notification',
        text: 'Dear user, you have successfully signed in to our application.'
    }

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
        } else {
            res.send('Email is sent to: ' + mailOptions.to);
            console.log('Email is sent to: ' + mailOptions.to);
        }
    });

}

module.exports = sendmail;