import { links } from "../../assets/config/linksHrefRepos";

const RepoItem = ({ repo }) => {
   const setLinkHref = () => {
      for (let index = 0; index < links.length; index++) {
         const element = links[index];
         if (element.name === repo.name) {
            return element.link;
         }
      }
   };

   return (
      <li>
         - {repo.name}
         <br /> {repo.description}
         <br /> {repo.language}
         <br />{" "}
         <a href={setLinkHref()} target="_blank" rel="noreferrer">
            See Demo
         </a>
         <br />
         <br />
      </li>
   );
};

export default RepoItem;
