import React from 'react'
import AdminLogin from './Components/Admin-Section/AdminLogin'
import StudentDashboard from './StudentDashboard';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NewLogin from './Components/New-Admission/NewLogin';
import ForgotPassword from './Components/ForgetPassword/ForgetPassword.jsx';

import Subjects from './Components/Subjects/Subjects';
import Bonafied from './Components/Bonafied/Bonafied';


import StudentLogin from './Components/Student-Section/StudentLogin';
import FeePayment from './FeePayment';
import StudentAdmin from './Components/StudentAdmin';
import StudentDoc from './Components/Student-Doc/StudentDoc';

import StudentTable from './Components/Student-Admin Section/StudentTable';

import AdminStudentProfile from './Components/AdminStudentProfile';
import StudentForgotPassword from './Components/ForgetPassword/StudentForgotPassword';


const App = () => {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<NewLogin />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/studentlogin" element={<StudentLogin />} />
        <Route path="/student-forgot-password" element={<StudentForgotPassword />} />
        
        <Route path="/student-dashboard" element={<StudentDashboard />} />

        <Route path="/feepayment" element={<FeePayment/>} />
        <Route path="/subjects" element={<Subjects/>} />
        
      
      {/* <Subjects /> */}
      {/* <Bonafied />
      <AdminStudentProfile /> */}

         <Route path="/student-admin" element={<StudentAdmin />} />
      </Routes>

    </Router>
    

  );
}




export default App;

