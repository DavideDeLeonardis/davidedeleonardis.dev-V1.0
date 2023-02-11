// SCSS
import classes from './index.module.scss';

const ArchiveProjects = ({ project }) => {
   return <li className={classes['archive-p-item']}>{project.name}</li>;
};

export default ArchiveProjects;
