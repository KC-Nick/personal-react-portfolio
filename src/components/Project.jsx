import React from 'react';
import Project from './Project';

const ProjectsPage = () => {
  return (
    <div>
      <h1>Projects</h1>
      <Project
        title="Blog Poster"
        description="Log in, make posts, edit or delete them! Comment on posts!"
        technologies={['MySQL2', 'Sequelize', 'BCrypt', 'Express']}
        link="https://github.com/KC-Nick/blog-poster"
      />
      <Project
        title="Employee Manager"
        description="A back-end database for managing employees, roles, and departments."
        technologies={['MySQL2', 'Jest', 'Inquirer']}
        link = "https://github.com/KC-Nick/employee-manager"
      />
      {/* add more */}
    </div>
  );
};

export default ProjectsPage;