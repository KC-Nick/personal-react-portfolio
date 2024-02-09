import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import emailjs from 'emailjs-com';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    emailjs.sendForm(import.meta.env.VITE_SERV_ID, 
      import.meta.env.VITE_TEMP_ID, event.target,
      { publicKey: import.meta.env.VITE_PUB_ID,})
      .then((result) => {
      console.log(result.text);
    }, (error) => {
      console.log(error.text);
    });

    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <Form onSubmit={handleSubmit} style={{
      width: 'fit-content',
      marginLeft: '40%'
    }}>
      <Form.Group controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" name="user_name" placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)} required />
      </Form.Group>

      <Form.Group controlId="formEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name="user_email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </Form.Group>

      <Form.Group controlId="formMessage">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" rows={3} name="message" value={message} onChange={(e) => setMessage(e.target.value)} required />
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