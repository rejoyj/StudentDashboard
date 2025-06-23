import React from 'react';

import profilepic from '../../assets/7070fce3-5742-4554-b5a2-2071a4c61fdb.jpg'; // Adjust the path as necessary   
import height from './../../../node_modules/dom-helpers/esm/height';


function ProfileCard() {
  return (
    <div className="p-3 border rounded text-center bg-white shadow-sm">
      <img
        src={profilepic}
        className="rounded-circle mb-3 border"
        alt="Profile" height="130" width="120"
            
        style={{ objectFit: 'cover' }}
      />
      <h5 className="fw-semibold">PREM KUMAR</h5>
      <hr />
      <div className="text-start small">
        <p><strong>Course:</strong> B.Tech</p>
        <p><strong>Batch:</strong> 2020 - 24</p>
        <p><strong>Branch:</strong> CSE</p>
        <p><strong>Roll:</strong> 200XXXXX</p>
        <p><strong>Phone:</strong> +91 XXXXXXXXXX</p>
        <p><strong>Email:</strong> XXXXXXXXXXXXXXXX</p>
        <p><strong>Address:</strong><br /> Village, Block, Lakhisarai<br />Bihar 811315</p>
      </div>
      <button className="btn btn-warning mt-2 w-100">
        <i className="bi bi-pencil-square"></i> Request Edit
      </button>
    </div>
  );
}

export default ProfileCard;
