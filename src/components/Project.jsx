import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css';

const Project = ({ title, description, technologies, link }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card>
      <Card.Body>
        <Card.Title
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {title}
        </Card.Title>
        {isHovered && (
          <>
            <Card.Text>
              {description}
            </Card.Text>
            <ListGroup variant="flush">
              {technologies.map((tech, index) => (
                <ListGroup.Item key={index}>{tech}</ListGroup.Item>
              ))}
            </ListGroup>
          </>
        )}
        <Card.Link href={link} target="_blank" rel="noreferrer">View Project</Card.Link>
      </Card.Body>
    </Card>
  );
};

export default Project;