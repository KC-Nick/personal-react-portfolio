import React from 'react';
import Project from '../Project';
import blog from '../../../public/blog.png';
import stock4 from '../../../public/stock4.png';
import kaizen from '../../../public/kaizen.png';
import weather from '../../../public/weather.png';
import githubIcon from '../../../public/github-mark.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import stock1 from '../../../public/stock1.png';
import stock2 from '../../../public/stock2.png';
import stock3 from '../../../public/stock3.png';

const ProjectsPage = () => {
  return (

    <div>
      <h1 style = {{
      margin: '10px',
      marginBottom: '20px',
      backgroundColor: '#5D5D81',
      width: 'fit-content',
      borderRadius: '10px',
      padding: '5px',
    }}>Projects</h1>
      <Container style={{ width: "75%" }}>

        <Row>
          <Project
            title="Blog Poster"
            description="Log in, make posts, edit or delete them! Comment on posts!"
            technologies={['MySQL2', 'Sequelize', 'BCrypt', 'Express']}
            link="https://arcane-hollows-70364-2470ccfb589f.herokuapp.com/"
            backgroundImage={stock1}
            hoverBackgroundImage={blog}
            ariaLabel="An image of a beach with ocean waves. When hovered on, an image with a blog site with a berry theme; the image says Welcome, test to logged in user."
            >
            <a href="https://github.com/KC-Nick/blog-poster" target="_blank" rel="noreferrer">
              <img src={githubIcon} alt="GitHub" style={{ width: '35px', height: '35px' }} />
            </a>
          </Project>

          <Project
            title="Employee Manager"
            description="A back-end database for managing employees, roles, and departments."
            technologies={['MySQL2', 'Jest', 'Inquirer']}
            link="https://github.com/KC-Nick/employee-manager/blob/main/README.md"
            backgroundImage={stock4}
            hoverBackgroundImage={stock4}
            ariaLabel="A placeholder stockphoto depicts a large waterfall flowing over mountains, into a river in the forest below. Same image when hovered."
          >
            <a href="https://github.com/KC-Nick/employee-manager" target="_blank" rel="noreferrer">
              <img src={githubIcon} alt="GitHub" style={{ width: '35px', height: '35px' }} />
            </a>
          </Project>
        </Row>

        <Row>
          <Project
            title="Kaizen App"
            description="A collaboration effort to create a social networking platform."
            technologies={['MySQL2', 'Handlebars', 'Tailwind CSS', 'Heroku']}
            link="https://kaizen-app-41aa736296bb.herokuapp.com/"
            backgroundImage={stock2}
            hoverBackgroundImage={kaizen}
            ariaLabel="Shinjuku's Golden Gai blanketed in heavy snow. When hovered, a web page with the meaning of the Japanese word Kaizen asking user to log in."
            >
            <a href="https://github.com/KC-Nick/kaizen-app" target="_blank" rel="noreferrer">
              <img src={githubIcon} alt="GitHub" style={{ width: '35px', height: '35px' }} />
            </a>
          </Project>

          <Project
            title="Weather Alert"
            description="An app that uses a third party api to pull up the weather forecast."
            technologies={['Third Party API', 'JSON', 'localStorage']}
            link="https://kc-nick.github.io/weather-alert/"
            backgroundImage={stock3}
            hoverBackgroundImage={weather}
            ariaLabel="A skyline at dusk of an urban city. When hovered, a web page of a weather app that depicts a weather forecast for a city."
            >
            <a href="https://github.com/KC-Nick/weather-alert" target="_blank" rel="noreferrer">
              <img src={githubIcon} alt="GitHub" style={{ width: '35px', height: '35px' }} />
            </a>
          </Project>
        </Row>

      </Container>
    </div>
  );
};

export default ProjectsPage;