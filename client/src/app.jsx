import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const App = () => {
  console.log('app');
  return (
    <Container fluid>
      <Row>
        <Col>Beginning of App</Col>
      </Row>
    </Container>
  );
};

export default App;
