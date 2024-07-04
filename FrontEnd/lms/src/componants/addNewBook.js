import React, { useState } from 'react';
import './css/addNewBook.css';

function FunctionalComAddBook() {
    const [book, setBook] = useState({
        title: '',
        author: '',
        copies: '',
        status: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBook({ ...book, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add logic to handle book submission, e.g., sending data to a server
        console.log('Book added:', book);
        setBook({ title: '', author: '', copies: '', status: '' }); // Reset form
    };

    return (
        <div className="add-book-page">
            <h1>Add New Book</h1>
            <img src="./src/componants/css/book1.jpg" alt="Book" className="book-image" />
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={book.title}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="author">Author</label>
                    <input
                        type="text"
                        id="author"
                        name="author"
                        value={book.author}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="copies">Copies</label>
                    <input
                        type="number"
                        id="copies"
                        name="copies"
                        value={book.copies}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="status">Status</label>
                    <select
                        id="status"
                        name="status"
                        value={book.status}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select Status</option>
                        <option value="Available">Available</option>
                        <option value="Not Available">Not Available</option>
                    </select>
                </div>
                <button type="submit">Add Book</button>
            </form>
        </div>
    );
}

export default FunctionalComAddBook;