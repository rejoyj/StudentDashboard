import React, { useState } from 'react';
import profilepic from '../../assets/7070fce3-5742-4554-b5a2-2071a4c61fdb.jpg';

function ProfileCard() {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: 'PREM KUMAR',
    course: 'B.Tech',
    batch: '2020 - 24',
    branch: 'CSE',
    roll: '200XXXXX',
    phone: '+91 XXXXXXXXXX',
    email: 'XXXXXXXXXXXXXX',
    address: 'Village, Block, Lakhisarai\nBihar 811315'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile(prev => ({ ...prev, [name]: value }));
  };

  const handleToggleEdit = () => {
    setIsEditing(prev => !prev);
  };

  return (
    <div className="p-3 border rounded text-center bg-white shadow-sm">
      <img
        src={profilepic}
        className="rounded-circle mb-3 border"
        alt="Profile"
        height="130"
        width="120"
        style={{ objectFit: 'cover' }}
      />
      {isEditing ? (
        <input
          type="text"
          name="name"
          value={profile.name}
          onChange={handleChange}
          className="form-control text-center fw-semibold mb-2"
        />
      ) : (
        <h5 className="fw-semibold">{profile.name}</h5>
      )}
      <hr />
      <div className="text-start small">
        {['course', 'batch', 'branch', 'roll', 'phone', 'email'].map(field => (
          <p key={field}>
            <strong>{field.charAt(0).toUpperCase() + field.slice(1)}:</strong>{' '}
            {isEditing ? (
              <input
                type="text"
                name={field}
                value={profile[field]}
                onChange={handleChange}
                className="form-control form-control-sm mb-2"
              />
            ) : (
              profile[field]
            )}
          </p>
        ))}
        <p><strong>Address:</strong><br />
          {isEditing ? (
            <textarea
              name="address"
              value={profile.address}
              onChange={handleChange}
              className="form-control"
              rows="2"
            />
          ) : (
            profile.address.split('\n').map((line, idx) => (
              <span key={idx}>{line}<br /></span>
            ))
          )}
        </p>
      </div>
      <button className="btn btn-warning mt-2 w-100" onClick={handleToggleEdit}>
        <i className={`bi ${isEditing ? 'bi-check-circle-fill' : 'bi-pencil-square'}`}></i>
        {isEditing ? ' Save' : ' Request Edit'}
      </button>
    </div>
  );
}

export default ProfileCard;
