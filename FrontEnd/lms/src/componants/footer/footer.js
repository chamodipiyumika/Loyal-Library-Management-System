import React from "react";
import './footer.css';

function FunctionalComFooter() {
  return (
    <div className="footer">
      <div className="footer-Contact">
        <h3>Contact Us</h3>
        <p>Email: LoyalLMS@gmail.com</p>
        <p>Phone: 0253765498</p>
        <p>Address: 20 Main St, Anuradhapura Town, Sri Lanka.</p>
      </div>

      <div className="footer-About">
        <h3>About Us</h3>
        <p>
          Welcome to the Loyal Library Management System, in this page,
        </p>
        <ul>
          <li>Search for books by title, author, or subject</li>
          <li>Check the availability of books and other resources</li>
        </ul>
      </div>
      <div className="footer-Form">
        <h3>Login</h3>
        <div className="footer-box">
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button type="submit">Submit</button>
        </div>
      </div>
    </div>
  );
}

export default FunctionalComFooter;
