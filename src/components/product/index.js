import React from 'react';
import {
  Row,
  Col,
  Alert,
  ProgressBar
} from 'react-bootstrap';
import lemon from './images/lemon.png';

const Product = () => (
  <Row>
    <Col md={2}>
      <Row>
        <Col md={12}>
          <img src={lemon} className="bg-info rounded-circle img-fluid" alt="product" />
        </Col>
        <Col md={12}>
          <h2 className="text-center">1$</h2>
        </Col>
      </Row>
    </Col>
    <Col md={4}>
      <Row>
        <Col md={12}>
          <Alert variant="primary">
            <h1 className="display-6">10.0$</h1>
          </Alert>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col md={12}>
          <ProgressBar variant="info" now={20} />
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <Alert variant="warning">
            <h1 className="display-6">Buy X1 : 2.60$</h1>
          </Alert>
        </Col>
      </Row>
    </Col>
  </Row>
);

export default Product;