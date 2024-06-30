import React from "react";
import './footer.css';

function FunctionalComFooter(){
    return(
        <div className = "footer"> 
          <div className ="footer-Contact">
           <h3>Contact Us</h3>
           <p>Email : LoyalLMS@gmail.com</p>
           <p>Phone : 0253765498</p>
           <p>Address : 20 Main St,Anuradhapura Town,Sri Lanka.</p>
          </div>

          <div className ="footer-About">
           <h3>About Us</h3>
           <p>Welcome to the Loyal Library Management System,<br>you one-stop solution for managing and 
              accessing the school library's</br>vast collection of resources. </p>
           <p>Our system is designed to make it easy for students,<br>teachers and staff to find and borrow books,</br>track
               due dates, and manage library accounts with ease.</p>   
           <ul>
            <li>Search for books by title, author, or subject</li>
            <li>Check the availability of books and other resources</li>
           </ul>
          </div>
        </div>

    );
  
}
export default FunctionalComFooter;