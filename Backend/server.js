const express = require('express');
const connectDB = require('./dbconnection');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const User = require('./models/user');
const Book = require('./models/book');
const BookIssuing = require('./models/issuedbooks');

const app = express();
const port = 3000;

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




// Example route to add a book
app.post('/books', async (req, res) => {
  try {
    const book = new Book(req.body);
    await book.save();
    res.status(201).send(book);
  } catch (error) {
    res.status(400).send(error);
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
