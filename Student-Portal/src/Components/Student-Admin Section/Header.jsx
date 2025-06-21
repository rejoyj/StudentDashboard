import React from 'react'
import logo from '../../assets/icons8-student-96 (1).png';
import { Button } from 'react-bootstrap';
const Header = () => {
  return (
   <div className="d-flex justify-content-between align-items-center border-bottom pb-3 mb-4">
         <div className="d-flex align-items-center gap-3">
           <img
             src={logo}
             alt="IIIT Bhagalpur Logo"
             width="40"
           />
           <div>
             <h6 className="mb-0 fw-bold">Admin Panel</h6>
             <small className="text-muted">IIIT Bhagalpur</small>
           </div>
         </div>
         <div className="d-flex align-items-center gap-3">
            <Button variant='primary' className='me-2' style={{ opacity:0.6}}>Global Admin</Button>
           <a href="#support" className="text-decoration-none text-dark fw-semibold">Help & Support</a>
           <button className="btn btn-warning text-white">Log out</button>
         </div>
       </div>
  )
}

export default Header