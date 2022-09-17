import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import CardPortal from '../../ui/CardPortal';
import Button from '../../ui/Button';
import default_image from '../../../assets/images/default.png';

import classes from '../index.module.scss';

const ProjectItem = ({ project, isMain }) => {
   const [details, setDetails] = useState(false);
   const [scaleDown, setScaleDown] = useState(false);
   const [isLoaded, setIsLoaded] = useState(false);
   const { t } = useTranslation();

   const showDetailsHandler = () => {
      setDetails(true);
      setScaleDown(false);
   };

   const hideDetailsHandler = () => {
      // time for scale down animation to complete
      setTimeout(() => {
         setDetails(false);
      }, 150);
      setScaleDown(true);
   };

   const setIsLoadedHandler = () => setIsLoaded(true);

   // Project's topics
   const topics = project.topics.map((topic, index) => (
      <li key={index} className={classes.topic}>
         {topic}
      </li>
   ));

   // All projects' info
   const projectInfo = (
      <div className={classes['info-container']}>
         {!isMain && <h2>{project.name}</h2>}

         <p>{project.description}</p>

         <ul className={classes['topic-container']}>{topics}</ul>

         <div className={classes['project-bottom']}>
            {isMain ? (
               <Link to={`/projects/${project.name}`} state={project}>
                  <Button>
                     {t('projects.show_details')}
                     <FontAwesomeIcon
                        className={classes.icon}
                        icon="fa-solid fa-arrow-up-right-from-square"
                     />
                  </Button>
               </Link>
            ) : (
               <>
                  <div className={classes['project-links']}>
                     {project.url !== null && (
                        <a href={project.url} target="_blank" rel="noreferrer">
                           <Button>
                              {t('projects.see_demo')}
                              <FontAwesomeIcon
                                 className={classes.icon}
                                 icon="fa-solid fa-arrow-up-right-from-square"
                              />
                           </Button>
                        </a>
                     )}

                     {project.github_url !== null && (
                        <a
                           href={project.github_url}
                           target="_blank"
                           rel="noreferrer"
                        >
                           <Button>
                              {t('projects.see_github')}
                              <FontAwesomeIcon
                                 className={classes.icon}
                                 icon="fa-brands fa-github"
                              />
                           </Button>
                        </a>
                     )}
                  </div>

                  <button onClick={hideDetailsHandler}>
                     <FontAwesomeIcon
                        className={classes['info-close']}
                        icon="fa-solid fa-xmark"
                     />
                  </button>
               </>
            )}
         </div>
      </div>
   );

   // Background position other projects' details
   const getPosition = () => {
      if (project.id === 521026706 /* Id project portfolio V-1.0 */)
         return 'center center';
      return 'top center';
   };

   // Other project's details
   const detailsElement = (
      <CardPortal
         backdropIsShown={details}
         onClose={hideDetailsHandler}
         scaleDown={scaleDown}
      >
         <div className={classes['details-container']}>
            <div
               className={classes['img-container']}
               style={{
                  backgroundImage: `url('${project.image || default_image}')`,
                  backgroundPosition: getPosition(),
               }}
            ></div>
            {projectInfo}
         </div>
      </CardPortal>
   );

   return (
      <>
         <li
            className={
               isMain ? classes['main-project'] : classes['other-project']
            }
         >
            <div className={classes['card-content']}>
               {isMain && project.isFeatured && (
                  <span className={classes.featured}>Featured</span>
               )}

               <h2
                  className={
                     !isMain && project.name.length >= 18
                        ? classes['decrease-font']
                        : null
                  }
               >
                  {project.name}
               </h2>

               {isMain ? (
                  <>
                     <div className={classes.language}>
                        <span>{t('main_projects.main_l')}</span>
                        <span className={classes.lang}>{project.language}</span>
                     </div>
                     {projectInfo}
                  </>
               ) : (
                  <>
                     <br />
                     <Button
                        className={classes['learn-more']}
                        onClick={showDetailsHandler}
                     >
                        {t('other_projects.learn_more')}
                     </Button>
                  </>
               )}
            </div>

            <div
               className={`
						${classes['img-container']}
						${isMain && 'gray-image'}`}
               style={
                  project.id === 521026706 /* Id project portfolio V-1.0 */
                     ? { border: '1px solid #646464' }
                     : null
               }
            >
               <img
                  src={isLoaded ? project.image : default_image}
                  alt={`${project.name} project from Davide De Leonardis`}
                  onLoad={setIsLoadedHandler}
               />
            </div>
         </li>

         {/* Details portal */}
         {details && detailsElement}
      </>
   );
};

export default ProjectItem;
