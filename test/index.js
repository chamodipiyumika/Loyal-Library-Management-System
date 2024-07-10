const express = require('express'); 
const connectDB = require('./DBconnection');
const cors = require('cors');
const bcrypt = require('bcryptjs');
//const BookIssue = require('./models2/BookIssue');

const app = express();
//const port = 3000;

app.use(express.json());
app.use(cors());

connectDB();

app.get('/register', async (req, res) => {
  console.log("dfsdfsdf");
  const { username, email, password, mobileNumber } = req.body;
  console.log(username);

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(400).json({ message: 'User already exists' });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

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





app.post('/book', async (req, res) => {
  try {
    const books = new Books(req.body);
    await books.save();
    res.status(201).send(books);
  } catch (error) {
    res.status(400).send(error);
  }
});

/*const books = new Books({
  Title,
  Author,
  Copies,
  Status,
}); */

app.post('/bookIssue', async (req, res) => {
  try {
    const bookIssue = new BookIssue(req.body);
    await bookIssue.save();
    res.status(201).send(bookIssue);
  } catch (error) {
    res.status(400).send(error);
  }
});

/*const bookIssue = new BookIssue({
  bookName,
  IssuedUser,
  IsuuedDate,
  Payment,
}); */

app.listen(3000, () => {
  console.log(`Server is running on http://localhost:${3000}`);
});
