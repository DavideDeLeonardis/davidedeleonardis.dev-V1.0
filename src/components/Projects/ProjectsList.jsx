import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import RepoItem from './RepoItem';

import classes from '../../assets/scss/partials/_other-projects.module.scss';

const ProjectsList = ({ isLoading, error, repos }) => {
   if (isLoading)
      return (
         <section>
            <FontAwesomeIcon icon="fa-spinner" spin />
            <span>Loading repositories...</span>
         </section>
      );

   if (error)
      return (
         <section>
            <p>{error}</p>
         </section>
      );

   const reposList = repos.map((repo, index) => (
      <RepoItem key={index} repo={repo} />
   ));

   return <ul className={classes['repos-container']}>{reposList}</ul>;
};

export default ProjectsList;
