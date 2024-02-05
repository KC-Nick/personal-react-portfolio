import React from 'react';
import Project from '../Project';
import blog from '../../../public/blog.png';
import stock4 from '../../../public/stock4.png';
import kaizen from '../../../public/kaizen.png';
import weather from '../../../public/weather.png';
import githubIcon from '../../../public/github-mark.svg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const ProjectsPage = () => {
  return (

    <div>
      <h1>Projects</h1>
      <Container style={{ width: "75%" }}>

        <Row>
          <Project
            title="Blog Poster"
            description="Log in, make posts, edit or delete them! Comment on posts!"
            technologies={['MySQL2', 'Sequelize', 'BCrypt', 'Express']}
            link="https://github.com/KC-Nick/blog-poster"
            backgroundImage={blog}
            ariaLabel="An image with a blog site with a berry theme; the image says Welcome, test to logged in user."
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
            ariaLabel="A placeholder stockphoto depicts a large waterfall flowing over mountains, into a river in the forest below."
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
            backgroundImage={kaizen}
            ariaLabel="A web page with the meaning of the Japanese word Kaizen asking user to log in."
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
            backgroundImage={weather}
            ariaLabel="A web page of a weather app that depicts a weather forecast for a city."
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