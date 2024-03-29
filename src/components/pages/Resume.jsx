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
                        width: 'fit-content',
                    }} >
                        Find Resume Doc and GitHub below.
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
                                Technical Skills
                            </h2>
                            <ListGroup className="list-div">
                                <ListGroup.Item className="list-group">SQL; Sequelize; Responsive Web Design </ListGroup.Item>
                                <ListGroup.Item className="list-group">NoSQL; MongoDB; Mongoose; jQuery </ListGroup.Item>
                                <ListGroup.Item className="list-group">Express; Node; Bootstrap</ListGroup.Item>
                                <ListGroup.Item className="list-group">Tailwind; GraphQL; Jest; Inquirer</ListGroup.Item>
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
                                Job Skills
                            </h2>
                            <ListGroup className="list-div">
                                <ListGroup.Item className="list-group">Problem Solving; Team Work; Independence</ListGroup.Item>
                                <ListGroup.Item className="list-group">Punctuality; Cleanliness; Organization </ListGroup.Item>
                                <ListGroup.Item className="list-group">Initiative; Reliable; Friendly</ListGroup.Item>
                            </ListGroup>
                        </Col>
                    </Row>

                    <Row>
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
                                <ListGroup.Item className="list-group">Home Health Aide — Customer Support Services</ListGroup.Item>
                            </ListGroup>
                        </Col>
                        <Col>
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
                                <ListGroup.Item className="list-group">OSU Full-Stack Web Development Bootcamp — To Be Completed, 2/13.</ListGroup.Item>
                            </ListGroup>
                        </Col>
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
                    <Button variant="primary"
                        href="https://github.com/KC-Nick/"
                        target="_blank"
                        style={{
                            margin: '10px',
                            marginBottom: '20px',
                            marginLeft: '1%',
                            backgroundColor: '#5D5D81',
                            borderRadius: '10px',
                            padding: '5px',
                        }} >
                        View GitHub
                    </Button>
                </Col>
            </Row>
        </Container>
    );
}
