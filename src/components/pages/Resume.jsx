import React from 'react';
import { Container, Row, Col, ListGroup, Button } from 'react-bootstrap';
import '../../../assets/css/resume.css';

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
                        padding: '10px',
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
                                padding: '10px',
                                width: 'fit-content',
                            }} >
                                Skills
                            </h2>
                            <ListGroup className="list-div">
                                <ListGroup.Item className="list-group">Problem-solving</ListGroup.Item>
                                <ListGroup.Item className="list-group">SQL & NoSQL</ListGroup.Item>
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
                            }} >
                                Experience
                            </h2>
                            <ListGroup className="list-div">
                                <ListGroup.Item className="list-group">Deli/Bakery — Walmart</ListGroup.Item>
                                <ListGroup.Item className="list-group">Food Prep/Cashier — Greene Canteen</ListGroup.Item>
                            </ListGroup>
                        </Col>
                    </Row>

                    <Row>
                        <h2 style={{
                            margin: '10px',
                            marginBottom: '20px',
                            marginLeft: '25%',
                            backgroundColor: '#5D5D81',
                            borderRadius: '10px',
                            padding: '5px',
                            width: 'fit-content',
                        }} >
                            Education</h2>
                        <ListGroup className="list-div">
                            <ListGroup.Item className="list-group">High School Diploma — ECoT</ListGroup.Item>
                            <ListGroup.Item className="list-group">OSU Full-Stack Web Development Bootcamp — To Be Completed.</ListGroup.Item>
                        </ListGroup>
                    </Row>

                    <Button variant="primary"
                        href="https://docs.google.com/document/d/e/2PACX-1vQVQDEVcnsIRCWXZO2kWj_Uredw6TVfmtfsr-DXXbV80kDpc53XHHfhiZCa-1ubNgW0XGbWAa0007sh/pub"
                        target="_blank"
                        style={{
                            margin: '10px',
                            marginBottom: '20px',
                            marginLeft: '35%',
                            backgroundColor: '#5D5D81',
                            borderRadius: '10px',
                            padding: '5px',
                        }} >
                        View Resume
                    </Button>
                </Col>
            </Row>
        </Container>
    );
}
