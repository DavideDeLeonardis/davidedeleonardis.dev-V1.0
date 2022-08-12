import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import RepoItem from "./RepoItem";

const PublicRepos = ({ isLoading, error, repos }) => {
   if (isLoading)
      return (
         <section>
            <FontAwesomeIcon icon="fa-spinner" spin />
            <span>Loading repositories...</span>
         </section>
      );

   if (error)
      return (
         <section>
            <p>{error}</p>
         </section>
      );

   const reposList = repos.map(
      (repo, index) =>
         repo.owner.login === "DavideDeLeonardis" &&
         repo.name !== "DavideDeLeonardis" &&
         repo.name !== "react-my-website" && (
            <RepoItem key={index} repo={repo} />
         )
   );

   return <ul>{reposList}</ul>;
};

export default PublicRepos;
