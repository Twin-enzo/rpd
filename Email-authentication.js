Email-authentication.js
const nodemailer = require('nodemailer');

async function sendVerificationEmail(userEmail, verificationToken) {
    const transporter = nodemailer.createTransport({
        service: 'gmail', // You can use any SMTP service
        auth: {
            user: 'icpywrite@gmail.com',
            pass: 'Rominarazavi123$'
        }
    });

    const verificationLink = `https://yourwebsite.com/verify-email?token=${verificationToken}`;

    const mailOptions = {
        from: 'icpywrite@gmail.com',
        to: userEmail,
        subject: 'Email Verification',
        text: `Please click on the link below to verify your email:\n\n${verificationLink}`
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log('Verification email sent');
    } catch (error) {
        console.error('Error sending email:', error);
    }
}

// Generate token and call the send function
const verificationToken = 'generated-token-here'; // Use a secure token generation method
sendVerificationEmail('user@example.com', verificationToken);
