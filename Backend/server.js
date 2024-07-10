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
const port = 4000;

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


 // Create the API for login page 
app.post('/Login', async (req, res) => {
  console.log("login ok");
  const { email, password } = req.body;
  console.log("user type password = "+password);


  

 
  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);
  console.log("user type hashed password = "+hashedPassword);

  try {
	 // Check if the user exists
  const existingEmail = await User.findOne({ email });
  

  const isPasswordValid = await bcrypt.compare(password, existingEmail.password);

  if (isPasswordValid) {
    res.status(201).json({ message: 'User exists' });
  }else{
	res.status(401).json({ message: 'User email or password wrong' });  
  }
  
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server error' });
  }
});




// Example route to a book

app.post('/AddBooks', async (req, res) => {
  console.log("dfsdfsdf");
  const { title, author, copies, status } = req.body;
 
  console.log(title);
  // Check if the user already exists
  const existingBook = await Book.findOne({ title });
  if (existingBook) {
    return res.status(400).json({ message: 'Book already added' });
  }

  //add  book
  const book = new Book({
     title,
     author,
     copies,
     status,
  });

  try {
    await book.save();
    res.status(201).json({ message: 'New book adding successfully' });
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
app.get('/books', async (req, res) => {
  try {
    const books = await Book.find({});  
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
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
