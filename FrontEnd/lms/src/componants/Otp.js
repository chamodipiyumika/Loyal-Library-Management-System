import { useState } from "react";
import { Link } from "react-router-dom";
import FunctionalComHead from './header/header';
import FunctionalComFooter from './footer/footer';
import './css/Otp.css';

function FunctionalComLogin() {
  const [otp, setOtp] = useState("");


  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The otp you entered was: ${otp} `);
  }

  return (
    <div className="otp_card-container1">
      <FunctionalComHead />
      <div className="otp_content-wrap">
        <div className="otp_loginform">
          <form onSubmit={handleSubmit}>
            <div className="otp_formpage">
              <p class="otp_p1">To reset password enter your otp check you regiserd email</p>
              <h1 className="otp_h1">Otp verification </h1>
              
              <div className="otp_labels">
                <label>Otp:</label>
                <input
                  type="text"
                  name="otp"
                  placeholder="Enter your user otp.."
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                />
                
              </div>
             
              
              <div className="btn">
                <input className="submit" type="submit" />
              </div>
            </div>
          </form>
        </div>
      </div>
      <FunctionalComFooter />
    </div>
  );
}

export default FunctionalComLogin;
