import { Fragment, useState } from 'react';

import SelectLanguage from './SelectLanguage';
import PublicRepos from './PublicRepos';
import useFetch from '../../hooks/useFetch';

const ProjectsPage = () => {
   const [repos, setRepos] = useState([]);
   const [filteredRepos, setFilteredRepos] = useState([]);
   const [slicedRepos, setSlicedRepos] = useState(true);
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

   const setValueHandler = (e) => {
      if (e.target.value === 'All') {
         setFilteredRepos(repos);
      } else {
         setFilteredRepos(
            repos.filter((repo) => {
               return repo.language === e.target.value;
            })
         );
      }
   };

   const showAllRepoHandler = () => {
      setSlicedRepos(false);
   };

   return (
      <Fragment>
         <h2>Projects</h2>
         <SelectLanguage options={options} onChangeValue={setValueHandler} />
         <PublicRepos
            repos={
               filteredRepos.length === 0
                  ? slicedRepos
                     ? repos.slice(0, 3)
                     : repos
                  : slicedRepos
                  ? filteredRepos.slice(0, 3)
                  : filteredRepos
            }
            isLoading={isLoading}
            error={error}
         />
         {slicedRepos && (
            <button
               onClick={showAllRepoHandler}
               style={{ backgroundColor: 'white' }}
            >
               Show more
            </button>
         )}
      </Fragment>
   );
};

export default ProjectsPage;
