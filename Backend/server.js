const express = require('express');
const connectDB = require('./dbconnection');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const session = require('express-session');
const nodemailer = require('nodemailer');
const User = require('./models/user');
const Book = require('./models/book');
const BookIssuing = require('./models/issuedbooks');

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());
app.use(session({
  secret: 'yourSecretKey',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // Use secure: true in production
}));

// Connect to the database
connectDB();

// Generate OTP
function generateOTP() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

// Send OTP via email using Bravo API
async function sendOTP(email, otp) {
  const transporter = nodemailer.createTransport({
    host: 'smtp.your-email-provider.com',
    port: 587,
    auth: {
      user: 'your-email@example.com',
      pass: 'your-email-password'
    }
  });

  const mailOptions = {
    from: 'your-email@example.com',
    to: email,
    subject: 'Your OTP Code',
    text: `Your OTP code is ${otp}`
  };

  try {
    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error('Error sending email:', error);
  }
}

// User registration route
app.post('/register', async (req, res) => {
  const { username, email, password, mobileNumber } = req.body;

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(400).json({ message: 'User already exists' });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = new User({
    username,
    email,
    password: hashedPassword,
    mobileNumber
  });
  req.session.user=user;
  try {
    

    const otp = generateOTP();
    req.session.otp = otp;
    await sendOTP(email, otp);

    res.status(201).json({ message: 'User registered successfully. OTP sent to your email.' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Verify OTP route
app.post('/verify-otp', async (req, res) => {
  const { otp } = req.body;

  if (req.session.otp === otp) {
    try{
      await req.session.user.save();
      res.status(200).json({ message: 'OTP verified successfully.' });
    }catch (error){
    console.log(error);
    res.status(500).json({ message: 'Server error' });
    }
   
  } else {
    res.status(400).json({ message: 'Invalid OTP.' });
  }
});

// Add book route
app.post('/books', async (req, res) => {
  try {
    const book = new Book(req.body);
    await book.save();
    res.status(201).send(book);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Add book issuing route
app.post('/bookIssuings', async (req, res) => {
  try {
    const bookIssuing = new BookIssuing(req.body);
    await bookIssuing.save();
    res.status(201).send(bookIssuing);
  } catch (error) {
    res.status(400).send(error);
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
