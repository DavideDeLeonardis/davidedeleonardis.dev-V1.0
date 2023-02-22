// Libraries
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

// Components
import ProjectsInfo from './ProjectsInfo';

// Custom hooks
import useFadeOnScroll from '../../../hooks/useFadeOnScroll';

// UI
import CardPortal from '../../ui/CardPortal';
import Button from '../../ui/Button';

// Assets
import default_image from '../../../assets/images/default.png';

// SCSS
import classes from '../index.module.scss';

const ProjectItem = ({ project, hasMainStyle }) => {
   const [details, setDetails] = useState(false);
   const [scaleDown, setScaleDown] = useState(false);
   const [imageIsLoaded, setImageIsLoaded] = useState(false);
   const { t } = useTranslation();
   useFadeOnScroll(classes['in-page'], true);

   const showDetailsHandler = () => setDetails(true) && setScaleDown(false);

   const hideDetailsHandler = () => {
      // time for scale down animation to complete
      setTimeout(() => setDetails(false), 150);
      setScaleDown(true);
   };

   const setImageIsLoadedHandler = () => setImageIsLoaded(true);

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

   // Handle css background position of other projects details
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

            <ProjectsInfo
               project={project}
               hasMainStyle={hasMainStyle}
               hideDetailsHandler={hideDetailsHandler}
               displayMaps={displayMaps}
               t={t}
            />
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
                     <ProjectsInfo
                        project={project}
                        hasMainStyle={hasMainStyle}
                        hideDetailsHandler={hideDetailsHandler}
                        displayMaps={displayMaps}
                        t={t}
                     />
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
                     imageIsLoaded ? project.image || default_image : default_image
                  }
                  alt={`${project.name} project from Davide De Leonardis`}
                  onLoad={setImageIsLoadedHandler}
               />
            </div>
         </li>

         {/* Details portal */}
         {details && detailsElement}
      </>
   );
};

export default ProjectItem;
