import React from 'react'
import AdminLogin from './Components/Admin-Section/AdminLogin'
import StudentDashboard from './StudentDashboard';

import NewLogin from './Components/New-Admission/NewLogin';
import Subjects from './Components/Subjects/Subjects';


import StudentLogin from './Components/Student-Section/StudentLogin';
import FeePayment from './FeePayment';
import StudentAdmin from './Components/StudentAdmin';
import StudentDoc from './Components/Student-Doc/StudentDoc';

const App = () => {
  return (
    <>
    <NewLogin />
    <AdminLogin />
    <StudentDashboard />

    <Subjects />

    <StudentLogin />
    <FeePayment />
    <StudentAdmin />
    <StudentDoc />

    </>
  );
}




export default App;

