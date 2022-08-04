import { useState } from "react";
import useFetch from "../../hooks/useFetch";

import RepoItem from "./RepoItem";

const PublicRepos = () => {
   const [repos, setRepos] = useState([]);
   const { isLoading, error } = useFetch(
      setRepos,
      750,
      "https://api.github.com/user/repos?type=public",
      "GET",
      "Bearer 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"
   );

   if (isLoading) {
      return (
         <section>
            <span>Loading repositories...</span>
         </section>
      );
   }

   if (error) {
      return (
         <section>
            <p>{error}</p>
         </section>
      );
   }

   const reposList = repos.map(
      (repo, index) =>
         repo.owner.login === "DavideDeLeonardis" &&
         repo.name !== "DavideDeLeonardis" && (
            <RepoItem key={index} repo={repo} />
         )
   );

   return <ul>{reposList}</ul>;
};

export default PublicRepos;
