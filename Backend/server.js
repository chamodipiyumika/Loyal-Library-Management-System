const express = require('express');
const connectDB = require('./dbconnection');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const User = require('./models/user');
const Book = require('./models/book');
const BookIssuing = require('./models/issuedbooks');

const app = express();
const port = 4000;

app.use(express.json());
app.use(cors());
// Connect to the database
connectDB();





// Example route to add a user
app.post('/register', async (req, res) => {
  console.log("dfsdfsdf");
  const { username, email, password, mobileNumber } = req.body;
  console.log(username);
  // Check if the user already exists
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(400).json({ message: 'User already exists' });
  }

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create a new user
  const user = new User({
    username,
    email,
    password: hashedPassword,
    mobileNumber,
  });

  try {
    await user.save();
    res.status(201).json({ message: 'User registered successfully' });
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
app.post('/books', async (req, res) => {
  try {
    const book = new Book(req.body);
    await book.save();
    res.status(201).send(book);
  } catch (error) {
    res.status(400).send(error);
  }
});



//Add a new book
app.post('/AddBooks', async (req, res) => {
  console.log("dfsdfsdf");
  const { title, author, copies, bookStatus } = req.body;
 
  console.log(bookStatus);
  // Check if the user already exists
  const existingBook = await Book.findOne({ title });
  if (existingBook) {
    return res.status(400).json({ message: 'Book already added' });
  }

  // Create a new userc
  const book = new Book({
     title,
     author,
     copies,
     bookStatus,
  });

  try {
    await book.save();
    res.status(201).json({ message: 'New book adding successfully' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server error' });
  }
});
	

// Example route to add a book issuing
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
