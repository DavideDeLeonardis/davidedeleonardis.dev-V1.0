import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import RepoItem from './ProjectsItem';

import classes from './_projects.module.scss';

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
      <RepoItem key={index} repo={repo} isMain={isMain} />
   ));

   return <ul className={classes['repos-container']}>{reposList}</ul>;
};

export default ProjectsList;
