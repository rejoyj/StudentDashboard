import React from 'react'
import { Form, Button, Row, Col, Card } from 'react-bootstrap';

const SpecificSearch = () => {
  return ( 
   <Card className='p-4 shadow-sm my-3'>
    <h4 className="mb-3">Specific Search</h4>
    <Form>
        <Row className='mb-3'>
            <Col md={4}>
            <Form.Control type='text' placeholder='Enter Roll Number' />
            </Col>

             <Col md={4}>
            <Form.Control type='text' placeholder='Name(Auto)' />
            </Col>
             <Col md={4}>
            <Form.Control type='text' placeholder='Father’s Name' />
            </Col>
        </Row>
          <Button variant="warning" type="submit">
          Apply
        </Button>
    </Form>
   </Card>
  )
}

export default SpecificSearch