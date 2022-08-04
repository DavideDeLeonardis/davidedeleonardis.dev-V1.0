import { useEffect, useState } from "react";

import RepoItem from "./RepoItem";

const PublicRepos = () => {
   const [repos, setRepos] = useState([]);
   const [isLoading, setIsLoading] = useState(false);
   const [error, setError] = useState(null);

   useEffect(() => {
      const fetchGH = async () => {
         setIsLoading(true);
         setError(null);

         try {
            const response = await fetch(
               "https://api.github.com/user/repos?type=public",
               {
                  headers: {
                     Authorization:
                        "Bearer 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",
                  },
               }
            );

            if (!response.ok) {
               throw new Error("Request failed!");
            }

            const data = await response.json();
            setRepos(data);

            setTimeout(() => {
               setIsLoading(false);
            }, 1000);
         } catch (error) {
            setError(error || "Something went wrong");
            setIsLoading(false);
         }
      };

      fetchGH();
   }, []);

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

   const reposList = repos.map((repo, index) => (
      <RepoItem key={index} name={repo.name} />
   ));

   return <ul>{reposList}</ul>;
};

export default PublicRepos;
