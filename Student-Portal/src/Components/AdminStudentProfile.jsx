import React from 'react';
import Header from './Student-Admin Section/Header';
import SpecificSearch from './StudentProfile-Admin View/SpecificSearch';
import { Container, Row, Col } from 'react-bootstrap';
import ContactInfo from './StudentProfile-Admin View/ContactInfo';
import PaymentSummary from './StudentProfile-Admin View/PaymentSummary';
import Bonafide from './Bonafied/Bonafied';
const AdminStudentProfile = () => {
  return (
    <>
      <Container fluid className='mt-4'>
        <Header/>
        <Row>
           <Col md={8}>
            <Bonafide />
           </Col>

           <Col>
             <SpecificSearch />
             <ContactInfo />
             <br />
               <button className="btn btn-warning">Print Registration Slip </button>
           </Col>
        </Row>
      </Container>
      <PaymentSummary  />
    </>
  );
};

export default AdminStudentProfile;
