import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import FunctionalComLogin from './componants/loginPage';
import FunctionalComReset from './componants/resetpwPage';
import FunctionalComReg from './componants/registerPage';
import FunctionalComOTP from './componants/Otp';
import FunctionalCombook from './componants/bookPage';
import FunctionalComPassword from "./componants/password";


function App() {
  return (
    <div>
      
      <Router>
      <Routes>
        <Route path="/" element={<FunctionalComLogin />} />
        <Route path="/restore-password" element={<FunctionalComReset />} />
        <Route path="/goto-register" element={<FunctionalComReg />} />
        <Route path="/otp" element={<FunctionalComOTP />} />
        <Route path="/passwordpage" element={<FunctionalComPassword />} />
        <Route path="/bookpage" element={<FunctionalCombook />} />
      </Routes>
    </Router>
      
      
    </div>
  );
}

export default App;
