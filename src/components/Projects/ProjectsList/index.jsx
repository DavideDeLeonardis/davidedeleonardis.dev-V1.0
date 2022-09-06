import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Project from '../ProjectItem';

import classes from '../index.module.scss';

const ProjectsList = ({ isLoading, error, repos, isMain }) => {
   if (isLoading)
      return (
         <section>
            <FontAwesomeIcon
               className={classes.loader}
               icon="fa-spinner"
               spin
            />
				<br />
            <span className={classes['loader-text']}>
               Loading repositories...
            </span>
         </section>
      );

   if (error)
      return (
         <section>
            <p>{error}</p>
         </section>
      );

   const reposList = repos.map((repo, index) => (
      <Project key={index} repo={repo} isMain={isMain} />
   ));

   return <ul className={classes['repos-container']}>{reposList}</ul>;
};

export default ProjectsList;
