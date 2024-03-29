import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Button from '../../ui/Button';
import SeeDemoGitHubButtons from '../../ui/SeeDemoGitHubButtons';

import default_image from '../../../assets/images/default.png';
import classes from './index.module.scss';

const Project = () => {
   // State passed with router Link doesn't update when language changes
   const { state: project } = useLocation();
   let navigate = useNavigate();
   const [bounce, setBounce] = useState();
   const { t } = useTranslation();

   // If state is empty => redirect
   useEffect(() => {
      if (project === null) navigate('/');
   }, [project, navigate]);

   useEffect(() => {
      window.scrollTo(0, 0);
      // Set <html> scroll behavior previously on initial due to hover on show details page button
      document.documentElement.style.scrollBehavior = 'smooth';
   }, []);

   // Go to description button function
   const bounceToBottomHandler = () => window.scrollTo(0, window.innerHeight);

   // Start arrow bounce
   setTimeout(() => setBounce(true), 2000);

   return (
      project && (
         <>
            {/* Video and overlay */}
            <div
               className={classes['container-image']}
               style={
                  project.video === null || !project.video
                     ? {
                          backgroundImage: `url('${
                             project.image || default_image
                          }')`,
                       }
                     : {}
               }
            >
               <video id="video" className="container" autoPlay muted loop>
                  <source src={project.video} type="video/mp4" />
                  Your browser does not support the video tag.
               </video>

               {/* Overlay video */}
               <div className={`main-project-content ${classes.content}`}>
                  <h1>{project.name}</h1>
                  <p>
                     {t(
                        `projects.${project.name
                           .replaceAll(' ', '_')
                           .toLowerCase()}.intro`
                     )}
                  </p>
                  <div
                     className={`${classes.down} ${
                        bounce && classes['animation-arrow']
                     }`}
                     onClick={bounceToBottomHandler}
                  >
                     <FontAwesomeIcon icon="fa-solid fa-arrow-down" />
                  </div>
               </div>
            </div>

            {/* Details */}
            <div
               className={`main-project-content ${classes['bottom-main-project']}`}
            >
               <div className={classes.content}>
                  {/* State passed with router Link doesn't update when language changes */}
                  {/* <p>{project.long_description}</p> */}
                  <p>
                     {t(
                        `projects.${project.name
                           .replaceAll(' ', '_')
                           .toLowerCase()}.long_d`
                     )}
                  </p>

                  <ul>
                     {project.topics.map((topic, key) => (
                        <li key={key}>{topic}</li>
                     ))}
                  </ul>

                  <div>
                     <SeeDemoGitHubButtons
                        project={project}
                        className={classes.icon}
                     />
                  </div>

                  <HashLink
                     to="/#projects"
                     onMouseEnter={() =>
                        (document.documentElement.style.scrollBehavior =
                           'initial')
                     }
                     onMouseLeave={() =>
                        (document.documentElement.style.scrollBehavior =
                           'smooth')
                     }
                  >
                     <Button>{t('main_projects.go_back')}</Button>
                  </HashLink>
               </div>
            </div>
         </>
      )
   );
};

export default Project;
