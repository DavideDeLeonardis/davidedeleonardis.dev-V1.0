import { repos } from "../../assets/config/repos";
import { languageColors } from "../../assets/config/languageColors";

import default_image from "../../assets/images/default.png";

import classes from "../../assets/scss/partials/_repos.module.scss";

const RepoItem = ({ repo }) => {
   const getRepoProperty = () => {
      for (let index = 0; index < repos.length; index++) {
         if (repos[index].name === repo.name)
            return {
               repo_link: repos[index].publicLink,
               repo_image: repos[index].image,
            };
      }
   };

   const getColor = () => {
      for (let index = 0; index < languageColors.length; index++) {
         if (languageColors[index].language === repo.language)
            return languageColors[index].color;
      }
   };

   const { repo_link, repo_image } = getRepoProperty();

   const capitalized__repo_name =
      repo.name.charAt(0).toUpperCase() + repo.name.slice(1);

   const repo_description = repo.description.replace(/PREVIEW.*$/i, "");

   return (
      <li>
         - {repo.name}
         <br />
         <img
            className={classes["repo-img"]}
            src={repo_image || default_image}
            alt={`${capitalized__repo_name} from Davide De Leonardis`}
         />
         <br /> {repo_description}
         <br /> {repo.language}
         <br />
         <span
            className={classes["color-language"]}
            style={{ backgroundColor: getColor() || `#000000` }}
         ></span>
         <br />
         <a
            href={
               repo_link || `https://github.com/DavideDeLeonardis/${repo.name}`
            }
            target="_blank"
            rel="noreferrer"
         >
            See Demo
         </a>
         <br />
         <br />
      </li>
   );
};

export default RepoItem;
