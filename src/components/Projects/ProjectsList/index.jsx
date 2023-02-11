// Components
import Project from '../ProjectItem';

// SCSS
import classes from '../index.module.scss';

const ProjectsList = ({ projects, hasMainStyle }) => {
   const projectsList = projects.map((project, index) => (
      <Project key={index} project={project} hasMainStyle={hasMainStyle} />
   ));

   return <ul className={classes['repos-container']}>{projectsList}</ul>;
};

export default ProjectsList;
