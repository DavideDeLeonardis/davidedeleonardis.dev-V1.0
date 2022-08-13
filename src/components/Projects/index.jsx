import { Fragment, useState } from 'react';

import SelectLanguage from './SelectLanguage';
import PublicRepos from './PublicRepos';
import useFetch from '../../hooks/useFetch';

const ProjectsPage = () => {
   const [repos, setRepos] = useState([]);
   const [filteredReposByLanguage, setFilteredReposByLanguage] = useState([]);
   const [reposAreSliced, setReposAreSliced] = useState(true);

   const { isLoading, error } = useFetch(
      setRepos,
      'https://api.github.com/user/repos?type=public',
      'Bearer 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'
   );

   const findLanguagesUseless = () => {
      const notShowableLanguages = ['HTML', 'CSS', 'SCSS', 'shell'];

      for (let index = 0; index < notShowableLanguages.length; index++)
         return notShowableLanguages[index];
   };

   let options = [];
   const setOptionsHandler = () => {
      repos.forEach((repo) => {
         if (
            !options.includes(repo.language) &&
            repo.language !== findLanguagesUseless() &&
            repo.language !== null
         )
            options.push(repo.language);
      });

      return options;
   };
   setOptionsHandler();

   const filteredRepos = () => {
      // sort repos

      return repos.filter(
         (repo) =>
            repo.owner.login === 'DavideDeLeonardis' &&
            repo.name !== 'DavideDeLeonardis' &&
            repo.name !== 'davidedeleonardis.dev'
      );
   };

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

   const showAllReposHandler = () => {
      setReposAreSliced(false);
   };

   // const hideReposHandler = () => {
   //    setReposAreSliced(true);
   // };

   const getRepos = () => {
      const NUMBER_REPOS_SHOWN = 3;

      if (filteredReposByLanguage.length === 0) {
         if (!reposAreSliced) return filteredRepos();

         return filteredRepos().slice(0, NUMBER_REPOS_SHOWN);
      }

      if (!reposAreSliced) return filteredReposByLanguage;

      return filteredReposByLanguage.slice(0, NUMBER_REPOS_SHOWN);
   };

   const showMoreButton = reposAreSliced && (
      <button
         // onClick={reposAreSliced ? showAllReposHandler : hideReposHandler}
         onClick={showAllReposHandler}
         style={{ backgroundColor: 'white' }}
         className="slicer"
      >
         {/* {reposAreSliced ? 'Show more' : 'Show less'} */}
         SHOW MORE
      </button>
   );

   return (
      <Fragment>
         <h2>Projects</h2>

         <SelectLanguage options={options} onChangeValue={setValueHandler} />
         <PublicRepos repos={getRepos()} isLoading={isLoading} error={error} />

         {showMoreButton}
      </Fragment>
   );
};

export default ProjectsPage;
