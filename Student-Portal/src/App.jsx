import React from 'react'
import AdminLogin from './Components/Admin-Section/AdminLogin'
import StudentDashboard from './StudentDashboard';
import StudentLogin from './Components/Student-Section/StudentLogin';
import FeePayment from './FeePayment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
const App = () => {
  return (
    <>
    <AdminLogin />
    <StudentDashboard />
    <StudentLogin />
    <FeePayment />
    </>
  );
}




export default App;

