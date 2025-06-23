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
import AdminStudentProfile from './Components/AdminStudentProfile';

const App = () => {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<NewLogin />} />
        <Route path="/admin" element={<AdminLogin />} />
        
      </Routes>
      <StudentLogin />
    </Router>
    

  );
}




export default App;

