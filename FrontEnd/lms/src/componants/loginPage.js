import { useState } from "react";
import { Link } from "react-router-dom";
import FunctionalComHead from './header/header';
import FunctionalComFooter from './footer/footer';
import './css/loginpage.css';

function FunctionalComLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The email you entered was: ${email} ${password}`);
  }

  return (
    <div className="lf_card-container1">
      <FunctionalComHead />
      <div className="lf_content-wrap">
        <div className="lf_loginform">
          <form onSubmit={handleSubmit}>
            <div className="lf_formpage">
              <h1 className="lf_h1">Login Page</h1>
              <div className="lf_labels">
                <label>Email:</label>
                <input
                  type="text"
                  name="email"
                  placeholder="Enter your email.."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label>Password:</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password.."
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="p1">
                <Link to="/restore-password">Forgot password</Link>
              </div>
              <div className="p2">
                <p>Don't have an account? <span><Link to="/goto-register">Click here to register</Link></span></p>
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
