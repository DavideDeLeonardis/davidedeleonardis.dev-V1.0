import Project from '../ProjectItem';

import classes from '../index.module.scss';

const ProjectsList = ({ projects, isMain }) => {
   const projectsList = projects.map((project, index) => (
      <Project key={index} project={project} isMain={isMain} />
   ));

   return <ul className={classes['repos-container']}>{projectsList}</ul>;
};

export default ProjectsList;
