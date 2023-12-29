const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const path = require('path');


const app = express();
const PORT = process.env.PORT || 3000; 

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve static files (HTML, CSS, images)
app.use(express.static(path.join(__dirname, 'public')));
app.use('/css', express.static(path.join(__dirname, 'public', 'css')));
app.use('/js', express.static(path.join(__dirname, 'public', 'js')));
app.use('/img', express.static(path.join(__dirname, 'public', 'img')));

  

// html pages
app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'main.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'about.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'contact.html'));
});

app.get('/projects', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'projects.html'));
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'anim.html'));
});
// POST route for handling form submissions
app.post('/send-email', (req, res) => {
    const { fullName, email, phone, subject, message } = req.body;

    // Configure nodemailer to send emails
    const transporter = nodemailer.createTransport({
        service: 'Gmail', 
        auth: {
            user: 'vikander.work@gmail.com',
            pass: '009606549155', 
        },
    });

    const mailOptions = {
        from: 'vikander.games@gmail.com',
        to: 'vikander.work@gmail.com', 
        subject: subject,
        html: `<p>Full Name: ${fullName}</p>
               <p>Email: ${email}</p>
               <p>Phone Number: ${phone}</p>
               <p>Message: ${message}</p>`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
            res.status(500).send('Error sending email');
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).send('Email sent successfully');
        }
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
