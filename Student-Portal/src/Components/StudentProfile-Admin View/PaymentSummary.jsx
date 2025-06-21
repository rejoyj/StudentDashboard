import React from "react";
import { Table, Button, Card } from "react-bootstrap";

const PaymentSummary = () => {
  const semesters = Array.from({ length: 8 }, (_, i) => `${i + 1}th`);

  return (
    <Card className="p-4 shadow-sm my-4">
      <h5 className="mb-3 text-primary">
        Overall Payment Summary: <span className="fw-bold text-dark">Prem Kumar</span>
        <br />
        <small className="text-muted">Roll: 20XXXXXX | CSE | 2020-24</small>
      </h5>

      <div className="table-responsive">
        <Table striped bordered hover responsive className="text-center">
          <thead className="table-secondary">
            <tr>
              <th>Semester</th>
              <th>SGPA</th>
              <th>Tuition Fee</th>
              <th>Other Fee</th>
              <th>Fine</th>
              <th>Total</th>
              <th>Paid</th>
              <th>Due</th>
              <th>Over Due</th>
            </tr>
          </thead>
          <tbody>
            {semesters.map((sem, index) => (
              <tr key={index}>
                <td>{sem}</td>
                <td> </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      <div className="text-end">
        <Button variant="warning" className="mt-3 px-4">
          Generate Report
        </Button>
      </div>
    </Card>
  );
};

export default PaymentSummary;
