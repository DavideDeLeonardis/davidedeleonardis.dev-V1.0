import { useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";

// import SelectLanguage from "../components/Layout/SelectLanguage";
import PublicRepos from "../components/Repositories/PublicRepos";

const Projects = () => {
   const [repos, setRepos] = useState([]);
   const { isLoading, error } = useFetch(
      setRepos,
      "https://api.github.com/user/repos?type=public",
      "Bearer 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"
   );
   // const [options, setOptions] = useState([]);

   // useEffect(() => {
   //    repos.forEach((repo) => {
   //       if (!options.includes(repo.language)) {
   //          setOptions(repo.language);
   //       }
   //    });
   // }, [repos, options]);

   return (
      <div>
         <h2>Projects</h2>
         {/* <SelectLanguage options={options} /> */}
         <PublicRepos repos={repos} isLoading={isLoading} error={error} />
      </div>
   );
};

export default Projects;
