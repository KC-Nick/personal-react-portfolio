import React from 'react';
import { Container, Row, Col, ListGroup, Button } from 'react-bootstrap';
import '../css/Resume.css';

export default function Resume() {
    return (
        <Container>
            <Row className="justify-content-center">
                <Col xs="auto">
                    <h1 style={{
                        margin: '10px',
                        marginBottom: '20px',
                        backgroundColor: '#5D5D81',
                        borderRadius: '10px',
                        padding: '5px',
                    }} >
                        Resume
                    </h1>
                    <Row>
                        <Col md={6}>
                            <h2 style={{
                                margin: '10px',
                                marginBottom: '20px',
                                backgroundColor: '#5D5D81',
                                borderRadius: '10px',
                                padding: '5px',
                            }}>
                                Skills
                            </h2>
                            <ListGroup className="list-div">
                                <ListGroup.Item className="list-group">lorem ipsum</ListGroup.Item>
                                <ListGroup.Item className="list-group">lorem ipsum</ListGroup.Item>
                            </ListGroup>
                        </Col>

                        <Col md={6}>
                            <h2 style={{
                                margin: '10px',
                                marginBottom: '20px',
                                backgroundColor: '#5D5D81',
                                borderRadius: '10px',
                                padding: '5px',
                                width: 'fit-content',
                            }}>
                                Experience
                            </h2>
                            <ListGroup className="list-div">
                                <ListGroup.Item className="list-group">lorem ipsum</ListGroup.Item>
                                <ListGroup.Item className="list-group">lorem ipsum</ListGroup.Item>
                            </ListGroup>
                        </Col>
                    </Row>

                    <Row>
                        <h2 style={{
                            margin: '10px',
                            marginBottom: '20px',
                            backgroundColor: '#5D5D81',
                            borderRadius: '10px',
                            padding: '5px',
                        }}>Education</h2>
                        <ListGroup className="list-div">
                            <ListGroup.Item className="list-group">lorem ipsum</ListGroup.Item>
                            <ListGroup.Item className="list-group">lorem ipsum</ListGroup.Item>
                        </ListGroup>
                    </Row>

                    <Button variant="primary"
                        href="https://docs.google.com/document/d/e/2PACX-1vQVQDEVcnsIRCWXZO2kWj_Uredw6TVfmtfsr-DXXbV80kDpc53XHHfhiZCa-1ubNgW0XGbWAa0007sh/pub"
                        target="_blank"
                        style={{
                            margin: '10px',
                            marginBottom: '20px',
                            backgroundColor: '#5D5D81',
                            borderRadius: '10px',
                            padding: '5px',
                        }}>
                        View Resume
                    </Button>
                </Col>
            </Row>
        </Container>
    );
}