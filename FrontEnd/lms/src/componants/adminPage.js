import React, { useState } from 'react';
import './css/adminPage.css';



function FunctionalComAdmin() {
   
    //for book details 
   const booksData = [
        { title: 'Harry Potter', author: 'J.K. Rowling', copies: 8, status: 'Available' },
    ];

  const [books, setBooks] = useState(booksData);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

//for user details
const userData = [
    { userid:'AB123', bookname:'Harry Potter', issuedate:'6/6/2024', submitdate:'16/6/2024',payment:40  },
     ];

const [users, setuser] = useState(userData);
const [searchUser, setSearchUser] = useState('');

const handleSearch = (event) => {
setSearchTerm(event.target.value);
};

const filteredUsers = users.filter((user) =>
user.userid.toLowerCase().includes(searchTerm.toLowerCase())
);


  return (
    // Book Data Table
    <div className="booksdata">
      
      <table>
        <h1>Books Details</h1>
        <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Copies</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredBooks.map((book) => (
            <tr key={book.title}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.copies}</td>
              <td>{book.status}</td>
              <td>
                <button1 className ="del">Delete</button1>
                <button2 className ="up">Update</button2>
                <button3 className ="add">Add Book</button3>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </table>
       
      <table>  
        <h1>User Details</h1>
        <table>
        <thead>
          <tr>
            <th>UserId</th>
            <th>Book Name</th>
            <th>Issue Date</th>
            <th>Submit Date</th>
            <th>Payment</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredBooks.map((user) => (
            <tr key={user.userid}>
              <td>{user.userid}</td>
              <td>{user.bookname}</td>
              <td>{user.issuedate}</td>
              <td>{user.submitdate}</td>
              <td>{user.payment}</td>
              <td>
                <button1 className ="del">Delete</button1>
                <button2 className ="up">Update</button2>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </table>
    </div>
     
     
    
  );
}

export default FunctionalComAdmin;