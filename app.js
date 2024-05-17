const express = require('express');
const app = express();
const nodemailer = require('nodemailer');
const cors = require('cors');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.post('/send', async (req, res) => {
    const { names, email, message } = req.body;
    // console.log(req.body);

    if (!names || !email || !message) {
        return res.status(400).send('All fields are required');
    }

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: "aayushadhikari601@gmail.com",
            pass: "kwwxdchuzukrkhys"
        }
    });

    const mailSendingOption = {
        from: email,
        to: 'aayushadhikari601@gmail.com',
        subject: `Contact form submission from ${names}`,
        text: `${names} whose email is ${email} has sent you a message:\n ${message}`
    };

    try {
        await transporter.sendMail(mailSendingOption);
        res.status(200).send('Email sent successfully');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error sending email');
    }
});

app.listen(3000, () => {
    console.log("Backend started on port 3000");
});
