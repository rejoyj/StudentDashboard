import React from 'react';
import { Table, Button } from 'react-bootstrap';

const StudentTable = () => {
  const tableRows = [];

  for (let i = 0; i < 9; i++) {
    tableRows.push(
      <tr key={i}>
        <td>Roll Number</td>
        <td>Name</td>
        <td>Course</td>
        <td>Batch</td>
        <td>Fee Status</td>
        <td>Registration</td>
        <td>Verification</td>
        <td><Button variant="link">Details</Button></td>
      </tr>
    );
  }

  return (
    <div className="my-3">
      <Table striped bordered hover responsive className="text-center">
        <thead className="table-warning">
          <tr>
            <th>Roll Number</th>
            <th>Name</th>
            <th>Course</th>
            <th>Batch</th>
            <th>Fee Status</th>
            <th>Registration</th>
            <th>Verification</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>20XX000X</td>
            <td>Prem Kr.</td>
            <td>B.Tech</td>
            <td>2020-24</td>
            <td>No due</td>
            <td>Provisional</td>
            <td>Pending</td>
            <td><Button variant="link">Open</Button></td>
          </tr>

          {tableRows}
        </tbody>
      </Table>
    </div>
  );
};

export default StudentTable;
