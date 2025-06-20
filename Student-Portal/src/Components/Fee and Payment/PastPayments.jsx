import React from 'react';
import { Card, Table, Button, Form, Row, Col } from "react-bootstrap";
import { CiFileOn } from "react-icons/ci";

const PastPayments = () => {
  return (
    <Card className='p-3 mb-3 shadow-sm'>
      <h5 className='fw-bold'>Past Payments</h5>

      {/* Fixed: Wrap in Row */}
      <Row className="mb-3">
        <Col md={4}>
          <Form.Select style={{ backgroundColor: 'skyblue' }} className="mb-2">
            <option>2025-2026</option>
            <option>2024-2025</option>
            <option>2023-2024</option>
          </Form.Select>
        </Col>
        <Col md={4}>
          <Form.Select style={{ backgroundColor: 'skyblue' }} className="mb-2">
            <option>All Payments</option>
            <option>Due Payments</option>
          </Form.Select>
        </Col>
        <Col md={4}>
          <Button variant='warning' className='w-100'>Search</Button>
        </Col>
      </Row>

      {/* Wrap table in a div for curved borders */}
      <div className="border border-dark rounded overflow-hidden">
        <Table bordered hover responsive className="mb-0">
          <thead style={{ backgroundColor: '#ffc107' }}>
            <tr>
              <th>Date</th>
              <th>Amount</th>
              <th>Type</th>
              <th>Transaction ID</th>
              <th>Verification Status</th>
              <th>Receipt</th>
            </tr>
          </thead>
          <tbody style={{ backgroundColor: '#cceeff' }}>
            <tr>
              <td>08/02/22</td>
              <td>101250.00</td>
              <td>BSCC</td>
              <td>UITX 1003343434</td>
              <td>⏳ Pending</td>
              <td>
                <CiFileOn className="me-2" />
                6-SEM-01.pdf
              </td>
            </tr>
            <tr>
              <td>08/02/22</td>
              <td>101250.00</td>
              <td>BSCC</td>
              <td>UITX 1003343434</td>
              <td>✅ Verified</td>
              <td></td>
            </tr>
            <tr>
              <td>08/02/22</td>
              <td>101250.00</td>
              <td>BSCC</td>
              <td>UITX 1003343434</td>
              <td>✅ Verified</td>
              <td></td>
            </tr>
            <tr>
              <td>08/02/22</td>
              <td>101250.00</td>
              <td>Self</td>
              <td>UPT 1003343434</td>
              <td>✅ Verified</td>
              <td></td>
            </tr>
            <tr>
              <td>08/02/22</td>
              <td>101250.00</td>
              <td>Self</td>
              <td>UPT 1003343434</td>
              <td>✅ Verified</td>
              <td></td>
            </tr>
          </tbody>
        </Table>
      </div>
    </Card>
  );
};

export default PastPayments;
