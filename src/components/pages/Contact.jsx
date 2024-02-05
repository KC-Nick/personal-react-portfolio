import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // replace with api
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
  };

  return (
    <Form onSubmit={handleSubmit} style={{
      width: 'fit-content',
      marginLeft: '40%'
    }}>
      <Form.Group controlId="formName">
        <Form.Label>Name;</Form.Label>
        <Form.Control type="text" placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)} required />
      </Form.Group>

      <Form.Group controlId="formEmail">
        <Form.Label>Email address;</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </Form.Group>

      <Form.Group controlId="formMessage">
        <Form.Label>Message;</Form.Label>
        <Form.Control as="textarea" rows={3} value={message} onChange={(e) => setMessage(e.target.value)} required />
      </Form.Group>

      <Button variant="primary" type="submit" style={{
        margin: '10px',
        marginBottom: '20px',
        marginLeft: '35%',
        backgroundColor: '#5D5D81',
        borderRadius: '10px',
        padding: '10px',
      }} >
        Submit
      </Button>
    </Form>
  );
}