import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import PublicRepos from "../components/Repositories/PublicRepos";

import "../assets/scss/partials/_arrow_up.scss";

const Projects = () => {
   return (
      <div>
         <h2>Projects</h2>
         <PublicRepos />
         <a href="#header" className="up">
            <FontAwesomeIcon icon="angle-up" />
         </a>
      </div>
   );
};

export default Projects;
