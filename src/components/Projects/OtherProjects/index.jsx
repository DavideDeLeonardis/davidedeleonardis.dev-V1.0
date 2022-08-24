import { useState } from 'react';

import ProjectsList from '../ProjectsList';
import SelectLanguage from './SelectLanguage';
import useFetch from '../../../hooks/useFetch';
import useDimensions from '../../../hooks/useDimensions';
import Button from '../../UI/Button';
import Heading from '../../UI/Heading';
import * as ignoredRepos from '../../../assets/config/ignoredRepos';

import classes from '../../../assets/scss/partials/_projects.module.scss';

const OtherProjects = () => {
   const [repos, setRepos] = useState([]);
   const [filteredReposByLanguage, setFilteredReposByLanguage] = useState([]);
   const [reposAreSliced, setReposAreSliced] = useState(true);
   const { width: screenWidth } = useDimensions();

   const { isLoading, error } = useFetch(
      setRepos,
      'https://api.github.com/user/repos?type=public',
      `Bearer ${process.env.REACT_APP_TOKEN_GH}`
   );

   const showAllReposHandler = () => setReposAreSliced(false);

   const hideReposHandler = () => setReposAreSliced(true);

   // Filter for not showing main projects, readme
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
            filteredRepos().filter((repo) => {
               return repo.language === e.target.value;
            })
         );
      }
   };

   // Repos to pass to <ProjectsList />
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

      return (
         reposAreSliced && (
            <Button onClick={showAllReposHandler}>SHOW MORE</Button>
         )
      );
   };

   return (
      <div className={classes['projects-container']}>
         <Heading
            heading={'Other Projects'}
            h1ClassName={''}
            subheading={'Some of my other works.'}
            sub_subheading={'- hover the cursor on them... -'}
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
