
import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const NavigationLink = () => {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#NavigationLink">Expense Tracker Dashboard</Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
};

export default NavigationLink;
