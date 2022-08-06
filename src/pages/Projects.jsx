import { useState } from "react";
import useFetch from "../hooks/useFetch";

import SelectLanguage from "../components/Repositories/SelectLanguage";
import PublicRepos from "../components/Repositories/PublicRepos";

const Projects = () => {
   const [repos, setRepos] = useState([]);
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

   return (
      <div>
         <h2>Projects</h2>
         <SelectLanguage options={options} />
         <PublicRepos repos={repos} isLoading={isLoading} error={error} />
      </div>
   );
};

export default Projects;
