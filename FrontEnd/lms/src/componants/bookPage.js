import React, { useState, useEffect } from 'react';
import './css/bookPage.css';
import searchIcon from './css/search.webp'; // Ensure this path is correct

function FunctionalComBook() {
    const [books, setBooks] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetch('http://localhost:3000/books')
            .then(response => response.json())
            .then(data => setBooks(data))
            .catch(error => console.error('Error fetching books:', error));
    }, []);

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredBooks = books.filter((book) =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="books">
            <h1>All Available Books In Library</h1>
            <div className="search-bar">
                <img src={searchIcon} alt="Search Icon" className="search-icon" />
                <input
                    type="text"
                    placeholder="Search book by name"
                    value={searchTerm}
                    onChange={handleSearch}
                />
            </div>
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
                        <tr key={book._id}>
                            <td>{book._id}</td>
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
