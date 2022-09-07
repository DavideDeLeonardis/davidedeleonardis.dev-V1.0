import { useState } from 'react';

import ProjectsList from '../ProjectsList';
import SelectLanguage from '../../ui/SelectLanguage';
import Button from '../../ui/Button';
import Heading from '../../ui/Heading';
import useFetch from '../../../hooks/useFetch';
import useDimensions from '../../../hooks/useDimensions';
import * as ignoredRepos from '../../../assets/config/ignoredRepos';

import classes from '../index.module.scss';

const OtherProjects = () => {
   const [repos, setRepos] = useState([]);
   const [filteredReposByLanguage, setFilteredReposByLanguage] = useState([]);
   const [reposAreSliced, setReposAreSliced] = useState(true);
   const { screenWidth } = useDimensions();

   const { isLoading, error } = useFetch(
      setRepos,
      'https://api.github.com/user/repos?type=public',
      `Bearer ${process.env.REACT_APP_TOKEN_GH}`
   );

   const showAllReposHandler = () => setReposAreSliced(false);

   const hideReposHandler = () => setReposAreSliced(true);

   // Filter for not showing main projects and readme
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

   // Set select tag options
   let options = [];
   const setOptionsHandler = () => {
      repos.forEach((repo) => {
         if (
            !options.includes(repo.language) &&
            repo.language !== 'HTML' &&
            repo.language !== 'PHP' &&
            repo.language !== null // README
         )
            options.push(repo.language);
      });

      return options;
   };
   setOptionsHandler();

   // Set repos to show when value in select changes
   const setValueHandler = (e) => {
      hideReposHandler();

      if (e.target.value === 'All') {
         setFilteredReposByLanguage(filteredRepos());
      } else {
         setFilteredReposByLanguage(
            filteredRepos().filter((repo) => repo.language === e.target.value)
         );
      }
   };

   // Repos passed to <ProjectsList />
   const getRepos = () => {
      let otherReposShown = 4;
      if (screenWidth < 992) otherReposShown = 3;
      if (screenWidth < 769) otherReposShown = 2;

      if (filteredReposByLanguage.length === 0) {
         if (!reposAreSliced) return filteredRepos();

         return filteredRepos().slice(0, otherReposShown);
      }

      if (!reposAreSliced) return filteredReposByLanguage;

      return filteredReposByLanguage.slice(0, otherReposShown);
   };

   // Show more button's conditions
   const showMoreProjectsButton = () => {
      if (
         (reposAreSliced &&
            screenWidth > 991 &&
            (getRepos().length < 4 || filteredReposByLanguage.length === 4)) ||
         (reposAreSliced &&
            screenWidth < 992 &&
            screenWidth > 768 &&
            (getRepos().length < 3 || filteredReposByLanguage.length === 3)) ||
         (reposAreSliced &&
            screenWidth < 769 &&
            (getRepos().length < 2 || filteredReposByLanguage.length === 2))
      ) {
         return;
      }

      const button = (
         <Button
            onClick={reposAreSliced ? showAllReposHandler : hideReposHandler}
            style={{ marginTop: '50px' }}
         >
            {reposAreSliced ? 'SHOW MORE' : 'SHOW LESS'}
         </Button>
      );

      return reposAreSliced ? (
         button
      ) : (
         <a href="#other-projects" style={{ padding: '10px 0' }}>
            {button}
         </a>
      );
   };

   return (
      <div id="other-projects" className={classes['projects-container']}>
         <Heading
            heading={'Other Projects'}
            subheading={'Some of my other works.'}
            pClassName={classes.paragraph}
         />

         <span className={classes.filter}>Filter by language: &nbsp;</span>
         <SelectLanguage
            className={classes.select}
            options={options}
            onChangeValue={setValueHandler}
         />

         <ProjectsList
            repos={getRepos()}
            isLoading={isLoading}
            error={error}
            isMain={false}
         />

         {showMoreProjectsButton()}
      </div>
   );
};

export default OtherProjects;
