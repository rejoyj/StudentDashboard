import React from 'react'
import AdminLogin from './Components/Admin-Section/AdminLogin'
import StudentDashboard from './StudentDashboard';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NewLogin from './Components/New-Admission/NewLogin';
import Subjects from './Components/Subjects/Subjects';


import StudentLogin from './Components/Student-Section/StudentLogin';
import FeePayment from './FeePayment';
import StudentAdmin from './Components/StudentAdmin';
import StudentDoc from './Components/Student-Doc/StudentDoc';
import StudentTable from './Components/Student-Admin Section/StudentTable';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<NewLogin />} />
        <Route path="/studentlogin" element={<StudentLogin />} />
        
        <Route path="/student-dashboard" element={<StudentDashboard />} />
        
      </Routes>
      {/* <StudentTable /> */}
    </Router>
    
  );
}




export default App;

