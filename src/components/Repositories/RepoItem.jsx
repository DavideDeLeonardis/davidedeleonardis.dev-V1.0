import { links } from "../../assets/config/linksHrefRepos";
import { languageColors } from "../../assets/config/languageColors";

import classes from "../../assets/scss/partials/_repos.module.scss";

const RepoItem = ({ repo }) => {
   const getLinkHref = () => {
      for (let index = 0; index < links.length; index++) {
         if (links[index].name === repo.name) {
            return links[index].link;
         }
      }
   };

   const getColor = () => {
      for (let index = 0; index < languageColors.length; index++) {
         if (languageColors[index].language === repo.language)
            return languageColors[index].color;
      }
   };

   return (
      <li>
         - {repo.name}
         <br /> {repo.description}
         <br /> {repo.language}
         <br />
         <span
            className={classes["color-language"]}
            style={{ backgroundColor: getColor() }}
         ></span>
         <br />
         <a href={getLinkHref()} target="_blank" rel="noreferrer">
            See Demo
         </a>
         <br />
         <br />
      </li>
   );
};

export default RepoItem;
