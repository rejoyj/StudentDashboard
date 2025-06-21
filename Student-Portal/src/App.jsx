import React from 'react'
import AdminLogin from './Components/Admin-Section/AdminLogin'
import StudentDashboard from './StudentDashboard';
import StudentLogin from './Components/Student-Section/StudentLogin';
import FeePayment from './FeePayment';
import StudentAdmin from './Components/StudentAdmin';
const App = () => {
  return (
    <>
    <AdminLogin />
    <StudentDashboard />
    <StudentLogin />
    <FeePayment />
    <StudentAdmin />
    </>
  );
}




export default App;

