// Libraries
import { useEffect, useState } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Custom hooks
import useFadeOnScroll from '../../../hooks/useFadeOnScroll';

// UI
import CardPortal from '../../ui/CardPortal';
import Button from '../../ui/Button';
import LinkWithScrollOnTop from '../../ui/LinkWithScrollOnTop';
import SeeDemoGitHubButtons from '../../ui/SeeDemoGitHubButtons';

// Assets
import default_image from '../../../assets/images/default.png';

// SCSS
import classes from '../index.module.scss';

const ProjectItem = ({ project, hasMainStyle }) => {
   const [details, setDetails] = useState(false);
   const [scaleDown, setScaleDown] = useState(false);
   const [isLoaded, setIsLoaded] = useState(false);
   const { t } = useTranslation();
   useFadeOnScroll(classes['in-page'], true);

   const showDetailsHandler = () => setDetails(true) && setScaleDown(false);

   const hideDetailsHandler = () => {
      // time for scale down animation to complete
      setTimeout(() => setDetails(false), 150);
      setScaleDown(true);
   };

   const setIsLoadedHandler = () => setIsLoaded(true);

   // Set <html> scroll behavior previously on initial due to hover on return to main page button on project details page
   useEffect(() => {
      setTimeout(
         () => (document.documentElement.style.scrollBehavior = 'smooth'),
         200
      );
   }, []);

   // Display topics and languages
   const displayMaps = (array, className) => {
      return project[array].map((element, key) => (
         <li
            key={key}
            className={`${className} ${
               project[array].length > 1 && classes.slash
            }`}
         >
            {array === 'languages' ? (
               <>{element.toUpperCase()}&nbsp;&nbsp;</>
            ) : (
               element
            )}
         </li>
      ));
   };

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

   // All projects' info
   const projectInfo = (
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

   // Background position other projects details
   const getPosition = () => {
      if (
         project.id === 521026706 /* portfolio */ ||
         project.id === 34117123 /* custom-select */
      )
         return 'center center';
      return 'top center';
   };

   // Other project details portal
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

   // Project languages
   const languages = (
      <ul className={classes.lang}>{displayMaps('languages')}</ul>
   );

   return (
      <>
         <li
            id={project.name.replaceAll(' ', '-')}
            className={
               hasMainStyle
                  ? `${classes['main-project']} watch`
                  : classes['other-project']
            }
         >
            <div className={classes['card-content']}>
               {hasMainStyle && project.isFeatured && (
                  <span className={classes.featured}>Featured</span>
               )}

               <h2
                  className={
                     !hasMainStyle && project.name.length >= 18
                        ? classes['decrease-font']
                        : null
                  }
               >
                  {project.name}
               </h2>

               {hasMainStyle ? (
                  <>
                     <div className={classes.language}>
                        <span>
                           {project.languages.length <= 1
                              ? t('main_projects.main_ls')
                              : t('main_projects.main_lp')}
                        </span>
                        {languages}
                     </div>
                     {projectInfo}
                  </>
               ) : (
                  <>
                     {languages}
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
						${hasMainStyle && 'gray-image'}
					`}
               style={
                  project.id === 521026706 /* Id project portfolio V-1.0 */
                     ? { border: '1px solid #646464' }
                     : null
               }
            >
               <img
                  src={
                     isLoaded ? project.image || default_image : default_image
                  }
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
