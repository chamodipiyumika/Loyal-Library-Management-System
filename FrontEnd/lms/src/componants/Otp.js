import { useState } from "react";
import FunctionalComHead from './header/header';
import FunctionalComFooter from './footer/footer';
import './css/Otp.css';

function FunctionalComOTP() {
  let history = useHistory();
 
  const handleSearch = (event) => {
    event.preventDefault();
    history.push('/otp')
  }

  return (
    <div className ="card-container">
      <FunctionalComHead />
     
      <div className="loginform" >
     
        <form onSearch={handleSearch} >
           <div className="otpPage">
           <div>
            <h3>Please add your OTP</h3>
           </div>

          <div className="label">
          <label>OTP:
            <input 
              type="text"  name="otp" placeholder="Enter your OTP.."
              value={otp}
              onChange={(e) => setOTP(e.target.value)}
              style={{ display: 'block', margin: '10px 0' }}
            />
          </label>
          </div>
          </div>
          <div class="btn">
          <input className="submit" type="submit"/>
         </div>
        </form>
      </div>
      

      <FunctionalComFooter />
    </div>  
  );
}

export default FunctionalComOTP;