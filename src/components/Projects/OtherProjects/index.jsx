import { useState } from 'react';

import ProjectsList from '../ProjectsList';
import SelectLanguage from './SelectLanguage';
import useFetch from '../../../hooks/useFetch';
import * as ignoredRepos from '../../../assets/config/ignoredRepos';

import classes from '../../../assets/scss/partials/_other-projects.module.scss';

const OtherProjects = () => {
   const [repos, setRepos] = useState([]);
   const [filteredReposByLanguage, setFilteredReposByLanguage] = useState([]);
   const [reposAreSliced, setReposAreSliced] = useState(true);

   const { isLoading, error } = useFetch(
      setRepos,
      'https://api.github.com/user/repos?type=public',
      `Bearer ${process.env.REACT_APP_TOKEN_GH}`
   );

   // filter for not showing main projects, readme, and personal website
   const filteredRepos = () => {
      return repos.filter(
         (repo) =>
            repo.owner.login === process.env.REACT_APP_GITHUB_NAME &&
            repo.name !== process.env.REACT_APP_GITHUB_NAME && // README
            repo.name !== ignoredRepos.PROJECT_1 &&
            repo.name !== ignoredRepos.PROJECT_2 &&
            repo.name !== ignoredRepos.PROJECT_3
      );
   };

   // set select options
   let options = [];
   const setOptionsHandler = () => {
      repos.forEach((repo) => {
         if (
            !options.includes(repo.language) &&
            repo.language !== 'HTML' &&
            repo.language !== null // README
         )
            options.push(repo.language);
      });

      return options;
   };
   setOptionsHandler();

   // set repos to show when value in select changes
   const setValueHandler = (e) => {
      if (e.target.value === 'All') {
         setFilteredReposByLanguage(filteredRepos());
      } else {
         setFilteredReposByLanguage(
            filteredRepos().filter((repo) => {
               return repo.language === e.target.value;
            })
         );
      }
   };

   // button for showing all projects
   const showAllReposHandler = () => {
      setReposAreSliced(false);
   };

   // repos to pass to <ProjectsList />
   const getRepos = () => {
      if (filteredReposByLanguage.length === 0) {
         if (!reposAreSliced) return filteredRepos();

         return filteredRepos().slice(
            0,
            process.env.REACT_APP_NUMBER_OTHER_PROJECTS_SHOWN
         );
      }

      if (!reposAreSliced) return filteredReposByLanguage;

      return filteredReposByLanguage.slice(
         0,
         process.env.REACT_APP_NUMBER_OTHER_PROJECTS_SHOWN
      );
   };

   const showMoreButton = reposAreSliced && (
      <button onClick={showAllReposHandler} className={classes.slicer}>
         SHOW MORE
      </button>
   );

   return (
      <div>
         <h2>Other Projects</h2>

         <SelectLanguage options={options} onChangeValue={setValueHandler} />
         <ProjectsList
            repos={getRepos()}
            isLoading={isLoading}
            error={error}
            isVert
         />

         {showMoreButton}
      </div>
   );
};

export default OtherProjects;
