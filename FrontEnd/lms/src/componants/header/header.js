import React from "react";
import './header.css';
import logo from './logo.png';

function FunctionalComHead(){
    return(
        <div className = "header">
           <div className ="headerlogo">
             <img src={logo} alt="logo" />
           </div>
        </div>
    );
}
export default FunctionalComHead;