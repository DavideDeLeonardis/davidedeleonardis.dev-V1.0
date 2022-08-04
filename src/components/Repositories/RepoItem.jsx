import { links } from "../../assets/config/linksHrefRepos";

const RepoItem = ({ repo }) => {
   const getLinkHref = () => {
      for (let index = 0; index < links.length; index++) {
         const element = links[index];
         if (element.name === repo.name) {
            return element.link;
         }
      }
   };

   const getColor = () => {
      switch (repo.language) {
         case "HTML":
            return `#E34C26`;
         case "CSS":
            return `#563D7C`;
         case "JavaScript":
            return `#F0E159`;
         case "Vue":
            return `#40B983`;
         case "PHP":
            return `#4F5E96`;
         case "C#":
            return `#188601`;
         case "Solidity":
            return `#AA6746`;
         default:
            return "";
      }
   };

   return (
      <li>
         - {repo.name}
         <br /> {repo.description}
         <br /> {repo.language}
         <br />
         <span className="color" style={{ backgroundColor: getColor() }}></span>
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
