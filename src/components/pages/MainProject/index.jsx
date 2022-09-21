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
   const [bounce, setBounce] = useState();
   const { t } = useTranslation();
   let navigate = useNavigate();
   // State passed with router doesn't update when language change
   const { state: project } = useLocation();

   useEffect(() => {
      // If state doesn't exists when project is manually searched in URL => redirect to /
      if (project === null) navigate('/');
      // Scroll to top on load
      window.scrollTo(0, 0);
   }, [project, navigate]);

   const scrollToBottomHandler = () =>
      window.scrollTo(0, window.innerHeight - 80 /* header height */);

   // Start arrow bounce
   setTimeout(() => setBounce(true), 2000);

   return (
      project && (
         <>
            <div
               className={classes['container-image']}
               style={{
                  backgroundImage: `url('${project.image || default_image}')`,
               }}
            >
               <div className={`main-project-content ${classes.content}`}>
                  <h1>{project.name}</h1>
                  <p>
                     {t(
                        `projects.${project.name
                           .replace(' ', '_')
                           .toLowerCase()}.short_d`
                     )}
                  </p>
                  <div
                     className={`${classes.down} ${
                        bounce && classes['animation-arrow']
                     }`}
                     onClick={scrollToBottomHandler}
                  >
                     <FontAwesomeIcon icon="fa-solid fa-arrow-down" />
                  </div>
               </div>
            </div>

            <div
               className={`main-project-content ${classes['bottom-main-project']}`}
            >
               <div className={classes.content}>
                  {/* State passed with router Link doesn't update when language change */}
                  {/* <p>{project.long_description}</p> */}
                  <p>
                     {t(
                        `projects.${project.name
                           .replace(' ', '_')
                           .toLowerCase()}.long_d`
                     )}
                  </p>

                  <div>
                     <SeeDemoGitHubButtons
                        project={project}
                        className={classes.icon}
                     />
                  </div>

                  <HashLink to="/#projects">
                     <Button>{t('main_projects.go_back')}</Button>
                  </HashLink>
               </div>
            </div>
         </>
      )
   );
};

export default Project;
