import React from 'react'
import AdminLogin from './Components/Admin-Section/AdminLogin'
import StudentDashboard from './StudentDashboard';
import StudentLogin from './Components/Student-Section/StudentLogin';
const App = () => {
  return (
    <>
    <AdminLogin />
    <StudentDashboard />
    <StudentLogin />
    </>
  );
}




export default App;

