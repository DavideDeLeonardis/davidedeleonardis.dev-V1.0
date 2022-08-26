import { Fragment, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import CardPortal from '../UI/CardPortal';
import Button from '../UI/Button';
import { repos } from '../../assets/config/reposImages';
import { languageColors } from '../../assets/config/languageColors';
import default_image from '../../assets/images/default.png';

import classes from '../../assets/scss/partials/_projects.module.scss';

const ProjectItem = ({ repo, isMain }) => {
   const [details, setDetails] = useState(false);

   const showDetailsHandler = () => setDetails(true);

   const hideDetailsHandler = () => setDetails(false);

   // If repo name starts with PHP or other based on GitHub name
   const transformedName = () => {
      if (repo.name.startsWith('php')) {
         return `
				${repo.name.charAt(0).toUpperCase()}
				${repo.name.charAt(1).toUpperCase()}
				${repo.name.charAt(2).toUpperCase()}
				${repo.name.slice(3).replace('-', ' ')}
			`;
      } else {
         return (
            repo.name.charAt(0).toUpperCase() +
            repo.name.slice(1).replace('-', ' ')
         );
      }
   };

   // Function for taking repo's image or language
   const getProperties = (array) => {
      for (let index = 0; index < array.length; index++) {
         // eslint-disable-next-line default-case
         switch (array) {
            case repos:
               if (array[index].id === repo.id) return array[index].image;
               break;
            case languageColors:
               if (array[index].language === repo.language)
                  return array[index].color;
               break;
         }
      }
   };

   // Get image
   const image = getProperties(repos);

   // Get language
   const languageColor = getProperties(languageColors);

   // Project's topics
   const topics = repo.topics.map((topic, index) => (
      <li key={index} className={classes.topic}>
         {topic}
      </li>
   ));

   // All projects' info
   const projectInfo = (
      <div className={classes['info-container']}>
         {!isMain && <h2>{transformedName()}</h2>}

         <p>{repo.description}</p>

         <ul className={classes['topic-container']}>{topics}</ul>

         <div className={classes['project-bottom']}>
            <div className={classes['project-links']}>
               {repo.homepage !== '' &&
                  repo.id !== 521026706 /* Id repo portfolio V-1.0 */ && (
                     <a href={repo.homepage} target="_blank" rel="noreferrer">
                        <Button>
                           See Demo
                           <FontAwesomeIcon
                              className={classes.icon}
                              icon="fa-solid fa-arrow-up-right-from-square"
                           />
                        </Button>
                     </a>
                  )}

               <a href={repo.html_url} target="_blank" rel="noreferrer">
                  <Button>
                     See on GitHub
                     <FontAwesomeIcon
                        className={classes.icon}
                        icon="fa-brands fa-github"
                     />
                  </Button>
               </a>
            </div>

            {!isMain && (
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

   // Other project's details
   const detailsElement = (
      <CardPortal backdropIsShown={details} onClose={hideDetailsHandler}>
         <div className={classes['details-container']}>
            <div
               className={classes['img-container']}
               style={{
                  backgroundImage: `url('${image || default_image}')`,
               }}
            ></div>
            {projectInfo}
         </div>
      </CardPortal>
   );

   return (
      <Fragment>
         <li
            className={
               isMain ? classes['main-project'] : classes['other-project']
            }
         >
            <div className={classes['img-container']}>
               <img
                  src={image || default_image}
                  alt={`${transformedName()} project from Davide De Leonardis`}
               />
            </div>

            <div className={classes['card-content']}>
               {isMain && repo.fork && (
                  <span className={classes.featured}>Featured</span>
               )}
               <h2>{transformedName()}</h2>

               {isMain && projectInfo}

               {!isMain && (
                  <Fragment>
                     <div className={classes.language}>
                        <span>Main language:</span>
                        <span className={classes.lang}>
                           {repo.language}
                           {!isMain && (
                              <span
                                 className={classes['color-language']}
                                 style={{
                                    backgroundColor: languageColor || `#000000`,
                                 }}
                              ></span>
                           )}
                        </span>
                     </div>

                     <Button
                        className={classes['learn-more']}
                        onClick={showDetailsHandler}
                     >
                        Learn More
                     </Button>
                  </Fragment>
               )}
            </div>
         </li>

         {/* Details portal */}
         {details && detailsElement}
      </Fragment>
   );
};

export default ProjectItem;
