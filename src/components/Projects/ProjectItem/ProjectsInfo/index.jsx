// ALL PROJECTS INFO

import { Trans } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Button from '../../../ui/Button';
import LinkWithScrollOnTop from '../../../ui/LinkWithScrollOnTop';
import SeeDemoGitHubButtons from '../../../ui/SeeDemoGitHubButtons';

import classes from '../../index.module.scss';

const ProjectsInfo = ({
   project,
   hasMainStyle,
   hideDetailsHandler,
   displayMaps,
   t,
}) => {
   // Display "show details" button
   const showDetailsButton = (
      <Button>
         {t('projects.show_details')}
         <FontAwesomeIcon
            className={classes.icon}
            icon="fa-solid fa-arrow-up-right-from-square"
         />
      </Button>
   );

   return (
      <div className={classes['info-container']}>
         {!hasMainStyle && <h2>{project.name}</h2>}

         {/* Description */}
         <p>
            <Trans
               components={{
                  technicals: <span className={classes['d-technicals']} />,
                  blue: <span className="blue" />,
               }}
            >
               {project.description}
            </Trans>
         </p>

         {/* Topics */}
         <ul className={classes['topic-container']}>
            {displayMaps('topics', classes.topic)}
         </ul>

         {/* Project buttons */}
         <div className={classes['project-bottom']}>
            {hasMainStyle || project.hasDetailsPage ? (
               // Show details page button
               <div className={classes['project-links']}>
                  <LinkWithScrollOnTop
                     endpoint={`/projects/${project.name}`}
                     state={project}
                     content={showDetailsButton}
                  />
               </div>
            ) : (
               <div className={classes['project-links']}>
                  {/* Buttons see demo and see gitHub */}
                  <SeeDemoGitHubButtons
                     project={project}
                     className={classes.icon}
                  />
               </div>
            )}

            {!hasMainStyle && (
               // Close details portal other project button
               <button onClick={hideDetailsHandler}>
                  <FontAwesomeIcon
                     className={classes['info-close']}
                     icon="fa-solid fa-xmark"
                  />
               </button>
            )}
         </div>
      </div>
   );
};

export default ProjectsInfo;
