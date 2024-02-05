import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';

const Project = ({ title, description, technologies, link, backgroundImage, ariaLabel, children }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Col xs={12} md={6} className="mb-4">
      <Card style={{
        width: "100%",
        height: isHovered ? "auto" : "250px",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        margin: "0 auto",
        color: "#BFCDE0",
        borderColor: "#BFCDE0"
      }}

        aria-label={ariaLabel} >

        <Card.Body>

          <Card.Title style={{
            backgroundColor: "#000505",
            width: "fit-content",
            borderRadius: "10px",
            padding: "5px",
            borderStyle: "solid",
            borderColor: "#BFCDE0",
            borderWidth: "1px"
          }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {title}
          </Card.Title>

          <div style={{
            display: "flex",
            justifyContent: "end",
            margin: "1%",
          }}>
            {children}
          </div>

          {isHovered && (
            <>

              <Card.Text style={{
                backgroundColor: "#000505",
                width: "fit-content",
                borderRadius: "10px",
                padding: "5px"
              }}>
                {description}
              </Card.Text>

              <ListGroup variant="flush" style={{
                width: "fit-content",
                borderRadius: "10px",
                marginLeft: "20%",
                marginBottom: "1%",
              }}>
                {technologies.map((tech, index) => (
                  <ListGroup.Item style={{
                    backgroundColor: "#BFCDE0",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }} 
                  key={index}>{tech}
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </>
          )}
          <Button
            href={link}
            target="_blank"
            rel="noreferrer"
            style={{
              color: "#fff",
              backgroundColor: "#5D5D81"
            }}>
            View Project
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Project;