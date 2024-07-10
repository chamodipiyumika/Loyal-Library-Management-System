import React from 'react';
import {Link} from "react-router-dom";
import './css/adminPage.css'; // Import your CSS file for styling

function FunctionalComAdmin() {
  return (
    <div className="admin-container">
      <div className="table-container">
        <h2>Books Details</h2>
        <table>
          <thead className="head">
            <tr>
              <th>Book ID</th>
              <th>Title</th>
              <th>Author</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Book Title 1</td>
              <td>Author 1</td>
              <td className="button">
                <button className="btn-success">{ <Link to="/updateBook">Update</Link> }</button>
                <button className="btn-danger">Delete</button>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Book Title 2</td>
              <td>Author 2</td>
              <td className="button">
                <button className="btn-success">{ <Link to="/updateBook">Update</Link> }</button>
                <button className="btn-danger">Delete</button>
              </td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
        <button className="btn-add">{ <Link to="/updateUser">Add Book</Link> }</button>
      </div>

      <div className="table-container">
        <h2>Users Details</h2>
        <table>
          <thead className="head">
            <tr>
              <th>User ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>User 1</td>
              <td>user1@example.com</td>
              <td className="button">
                <button className="btn-success">{ <Link to="/updateUser">Update</Link> }</button>
                <button className="btn-danger">Delete</button>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>User 2</td>
              <td>user2@example.com</td>
              <td className="button">
                <button className="btn-success">{ <Link to="/updateUser">Update</Link> }</button>
                <button className="btn-danger">Delete</button>
              </td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default FunctionalComAdmin;