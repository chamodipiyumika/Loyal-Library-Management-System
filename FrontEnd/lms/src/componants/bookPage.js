import React, { useState } from 'react';
import './css/bookPage.css';



function FunctionalComBook() {

   const booksData = [
        { id: 1, title: 'Will in the World', author: 'Stephen Geenblat', copies: 10, status: 'Available' },
        { id: 2, title: 'Advanced Maths', author: 'Stanly J Farlow', copies: 4, status: 'Available' },
        { id: 3, title: 'The Boat that Won the War', author: 'Charles C Roberts Jr', copies: 6, status: 'Not Available' },
        { id: 4, title: 'Harry Potter', author: 'J.K. Rowling', copies: 8, status: 'Available' },
        { id: 5, title: 'In the Hour of Victory', author: 'Sam Wills', copies: 3, status: 'Available' },
        { id: 6, title: 'The Boat that Won the War', author: 'Charles C Roberts Jr', copies: 6, status: 'Not Available' },
      ];

  const [books, setBooks] = useState(booksData);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="books">
      <h1>All Available Books In Library</h1>
      <input
        type="text"
        placeholder="Search book by name"
        value={searchTerm}
        onChange={handleSearch}

      />
      
      <table>
        <thead>
          <tr>
            <th>Select No</th>
            <th>Title</th>
            <th>Author</th>
            <th>Copies</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredBooks.map((book) => (
            <tr key={book.id}>
              <td>{book.id}</td>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.copies}</td>
              <td>{book.status}</td>
              <td>
                <button>Select</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FunctionalComBook;