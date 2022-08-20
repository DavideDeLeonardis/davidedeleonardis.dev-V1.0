import { useState } from 'react';

import ProjectsList from '../ProjectsList';
import useFetch from '../../../hooks/useFetch';
import * as ignoredRepos from '../../../assets/config/ignoredRepos';

import classes from '../../../assets/scss/partials/_projects.module.scss';

const MainProjects = () => {
   const [repos, setRepos] = useState([]);
   const { isLoading, error } = useFetch(
      setRepos,
      'https://api.github.com/user/repos?type=public',
      `Bearer ${process.env.REACT_APP_TOKEN_GH}`
   );

	// Filter for showing only main projects
   const filterRepos = () => {
      let filteredRepos = [];

      repos.forEach((repo) => {
         if (repo.owner.login !== process.env.REACT_APP_GITHUB_NAME) return;

         if (
            repo.name === ignoredRepos.PROJECT_1 ||
            repo.name === ignoredRepos.PROJECT_2 ||
            repo.name === ignoredRepos.PROJECT_3
         )
            filteredRepos.push(repo);
      });

      return filteredRepos;
   };

   return (
      <div className={classes['projects-container']}>
         <h2>Main Projects</h2>
         <ProjectsList
            repos={filterRepos()}
            isLoading={isLoading}
            error={error}
				isMain={true}
         />
      </div>
   );
};

export default MainProjects;
