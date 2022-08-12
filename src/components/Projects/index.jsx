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

   const getRepos = () => {
      if (filteredReposByLanguage.length === 0) {
         if (reposAreSliced) {
            return filteredRepos().slice(0, 3);
         } else {
            return filteredRepos();
         }
      } else {
         if (reposAreSliced) {
            return filteredReposByLanguage.slice(0, 3);
         } else {
            return filteredReposByLanguage;
         }
      }
   };

   return (
      <Fragment>
         <h2>Projects</h2>

         <SelectLanguage options={options} onChangeValue={setValueHandler} />
         <PublicRepos repos={getRepos()} isLoading={isLoading} error={error} />

         <button
            onClick={showAllReposHandler}
            style={{ backgroundColor: 'white' }}
         >
            Show more
         </button>
      </Fragment>
   );
};

export default ProjectsPage;
