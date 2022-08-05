import { repos } from "../../assets/config/repos";
import { languageColors } from "../../assets/config/languageColors";

import default_image from "../../assets/images/default.png";

import classes from "../../assets/scss/partials/_repos.module.scss";

const RepoItem = ({ repo }) => {
   const getLinkHref = () => {
      for (let index = 0; index < repos.length; index++) {
         if (repos[index].name === repo.name) return repos[index].publicLink;
      }
   };

   const getColor = () => {
      for (let index = 0; index < languageColors.length; index++) {
         if (languageColors[index].language === repo.language)
            return languageColors[index].color;
      }
   };

   const getImage = () => {
      for (let index = 0; index < repos.length; index++) {
         if (repos[index].name === repo.name) return repos[index].image;
      }
   };

   return (
      <li>
         - {repo.name}
         <br />
         <img
            className={classes["repo-img"]}
            src={getImage() || default_image}
            alt={`${
               repo.name.charAt(0).toUpperCase() + repo.name.slice(1)
            } from Davide De Leonardis`}
         />
         <br /> {repo.description}
         <br /> {repo.language}
         <br />
         <span
            className={classes["color-language"]}
            style={{ backgroundColor: getColor() || `#000000` }}
         ></span>
         <br />
         <a
            href={
               getLinkHref() ||
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
