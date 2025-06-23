import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import './NewLogin.css';

function NewLogin() {
  const navigate = useNavigate();

  const ADMIN_ID = 'admin@iiitb.com';
  const ADMIN_PASS = 'admin123';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === ADMIN_ID && password === ADMIN_PASS) {
      navigate('/student-dashboard');
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="background-section">
      <Container fluid className="vh-100 d-flex align-items-center">
        <Row className="w-100">
          <Col sm={7} className="d-flex justify-content-center text-white">
            <div className="p-5">
              <h1>Congratulations 🎉</h1>
              <h2>Welcome to IIIT Bhagalpur!</h2>
              <h5>
                To finish your enrolment, please complete your registration with your personal, academic details and fee payment.
                This will help us to create your student profile, please enter accurate and complete information, as this will be used for official purposes.
                <br /> Thank you for choosing our university and see you soon!
              </h5>
            </div>
          </Col>

          <Col sm={5} className="d-flex align-items-center justify-content-center">
            <div className="login-form p-4 shadow w-100">
              <h3 className="text-center mb-3">Login</h3>
              <p className="text-center text-muted mb-3">Welcome onboard with us!</p>

              {error && <p className="text-danger text-center">{error}</p>}

              <form onSubmit={handleLogin}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Admin Email ID</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter your username"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>

                <div className="text-end mb-3">
                  <a href="#" className="text-decoration-none small text-muted">Forgot Password?</a>
                </div>

                <button type="submit" className="btn btn-warning w-100 mb-3 fw-semibold">
                  Login as Admin
                </button>
              </form>

              <div className="text-center">
                <small className="text-muted">
                  Are you a student?{' '}
                  <Link to="/studentlogin" className="fw-bold text-decoration-none">Login as a student</Link>
                </small>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default NewLogin;
