import React from 'react';
import { Card, Table, Button, Form, Row, Col } from "react-bootstrap";

const FeeStructure = () => {
  return (
    <Card className="p-4 my-3 shadow-sm">
      <h5 className='fw-bold mb-3'>Fee Structure</h5>

      {/* Year and Semester dropdowns */}
      <Row className='mb-3'>
        <Col md={4}>
          <Form.Select style={{ backgroundColor: 'skyblue' }} className="mb-2">
            <option>3rd Year</option>
            <option>2nd Year</option>
            <option>1st Year</option>
          </Form.Select>
        </Col>
        <Col md={4}>
          <Form.Select style={{ backgroundColor: 'skyblue' }} className="mb-2">
            <option>6th Semester</option>
            <option>5th Semester</option>
            <option>4th Semester</option>
            <option>3rd Semester</option>
            <option>2nd Semester</option>
            <option>1st Semester</option>
          </Form.Select>
        </Col>
        <Col md={4}>
          <Button variant='warning' className='w-100'>Search</Button>
        </Col>
      </Row>

     
      <div className="border border-dark rounded overflow-hidden mb-3">
        <Table bordered hover className="mb-0">
          <tbody>
            <tr><td><strong>Tuition Fee</strong></td><td>₹ 90,000.00</td></tr>
            <tr><td><strong>Other Institute Fee</strong></td><td>₹ 11,250.00</td></tr>
            <tr><td><strong>Admission Related Fee</strong></td><td>N/A</td></tr>
            <tr><td><strong>Other Fee</strong></td><td>N/A</td></tr>
            <tr><td><strong>Total</strong></td><td><strong>₹ 1,01,250.00</strong></td></tr>
          </tbody>
        </Table>
      </div>

     
      <div className="d-flex justify-content-end gap-2">
        <Button variant='warning'>Pay Now</Button>
        <Button variant="outline-warning">Receipt Upload</Button>
      </div>
    </Card>
  );
};

export default FeeStructure;
