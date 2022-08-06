import { useState } from "react";
import useFetch from "../hooks/useFetch";

import SelectLanguage from "../components/Repositories/SelectLanguage";
import PublicRepos from "../components/Repositories/PublicRepos";

const Projects = () => {
   const [repos, setRepos] = useState([]);
   const [filteredRepos, setFilteredRepos] = useState([]);
   const { isLoading, error } = useFetch(
      setRepos,
      "https://api.github.com/user/repos?type=public",
      "Bearer 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"
   );

   const findLanguagesUseless = () => {
      const notShowableLanguages = ["HTML", "CSS", "SCSS", "shell"];

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
      if (e.target.value === "All") {
         setFilteredRepos(repos);
      } else {
         setFilteredRepos(
            repos.filter((repo) => {
               return repo.language === e.target.value;
            })
         );
      }
   };

   return (
      <div>
         <h2>Projects</h2>
         <SelectLanguage options={options} onChangeValue={setValueHandler} />
         <PublicRepos
            repos={filteredRepos.length === 0 ? repos : filteredRepos}
            isLoading={isLoading}
            error={error}
         />
      </div>
   );
};

export default Projects;
