import RepoItem from "./RepoItem";

const PublicRepos = ({ isLoading, error, repos }) => {
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
