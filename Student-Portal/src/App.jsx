import React from 'react'
import AdminLogin from './Components/AdminLogin'
import StudentDashboard from './StudentDashboard';
import NewLogin from './Components/New-Admission/NewLogin';
import Subjects from './Components/Subjects/Subjects';

const App = () => {
  return (
    <>
    <NewLogin />
    <AdminLogin />
    <StudentDashboard />
    <Subjects />
    </>
  );
}




export default App;

