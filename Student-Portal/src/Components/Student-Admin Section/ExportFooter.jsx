import React from 'react';
import { Button } from 'react-bootstrap';

const ExportFooter = () => {
  return (
    <div className="d-flex justify-content-between align-items-center px-3 py-2 border-top">
      <div>
        <Button variant="outline-warning"> Prev. Page</Button>
        <Button variant="outline-warning" className="ms-2">Next Page &gt;&gt;</Button>
      </div>
      <div className="text-end">
        <small>Last updated on: 21 June | 12:00</small>
        <Button variant="warning" className="ms-3">Export</Button>
      </div>
    </div>
  );
};

export default ExportFooter;
