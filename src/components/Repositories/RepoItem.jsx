import { repos } from "../../assets/config/repos";
import { languageColors } from "../../assets/config/languageColors";

import default_image from "../../assets/images/default.png";

import classes from "../../assets/scss/partials/_repos.module.scss";

const RepoItem = ({ repo }) => {
   const transformName = () => {
      if (repo.name.startsWith("php")) {
         return `
				${repo.name.charAt(0).toUpperCase()}
				${repo.name.charAt(1).toUpperCase()}
				${repo.name.charAt(2).toUpperCase()}
				${repo.name.slice(3).replace("-", " ")}
			`;
      } else {
         return (
            repo.name.charAt(0).toUpperCase() +
            repo.name.slice(1).replace("-", " ")
         );
      }
   };

   const getRepoProperty = () => {
      for (let index = 0; index < repos.length; index++) {
         if (repos[index].id === repo.id)
            return {
               repo_link: repos[index].publicLink,
               repo_image: repos[index].image,
            };
      }
   };

   const getLanguageColor = () => {
      for (let index = 0; index < languageColors.length; index++) {
         if (languageColors[index].language === repo.language)
            return languageColors[index].color;
      }
   };

   const {
      // repo.name
      capitalized__repo_name,
      repo_description,
      repo_image,
      repo_public_link,
      // repo.language
      language_color,
   } = {
      capitalized__repo_name: transformName(),
      repo_description: repo.description.replace(/PREVIEW.*$/i, ""),
      repo_image: getRepoProperty().repo_image,
      repo_public_link: getRepoProperty().repo_link,
      language_color: getLanguageColor(),
   };

   return (
      <li>
         - {capitalized__repo_name}
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
            style={{ backgroundColor: language_color || `#000000` }}
         ></span>
         <br />
         <a
            href={
               repo_public_link ||
               `https://github.com/DavideDeLeonardis/${repo.name}`
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
