import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Button from '../Button';

const SeeDemoGitHubButtons = ({ project, className }) => {
   const { t } = useTranslation();

   return (
      <>
         {/* See demo button  */}
         {project.url !== null && (
            <a href={project.url} target="_blank" rel="noreferrer">
               <Button>
                  {t('projects.see_demo')}
                  <FontAwesomeIcon
                     className={className}
                     icon="fa-solid fa-arrow-up-right-from-square"
                  />
               </Button>
            </a>
         )}

         {/* See on GitHub button */}
         {project.github_url !== null && (
            <a href={project.github_url} target="_blank" rel="noreferrer">
               <Button>
                  {t('projects.see_github')}
                  <FontAwesomeIcon
                     className={className}
                     icon="fa-brands fa-github"
                  />
               </Button>
            </a>
         )}
      </>
   );
};

export default SeeDemoGitHubButtons;
