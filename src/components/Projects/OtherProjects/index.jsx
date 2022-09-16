import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import projects from '../../../assets/config/projects';
import ProjectsList from '../ProjectsList';
import Heading from '../../ui/Heading';
import Button from '../../ui/Button';
import useActive from '../../../hooks/useActive';
import useDimensions from '../../../hooks/useDimensions';

import classes from '../index.module.scss';

const OtherProjects = () => {
   const projectsInfo = projects();
   const [projectsByLanguage, setProjectsByLanguage] = useState([]);
   const [projectsAreSliced, setProjectsAreSliced] = useState(true);
   const { screenWidth } = useDimensions();
   const { t } = useTranslation();
   const { isActive, isActiveHandler } = useActive(
      t('other_projects.selectAll')
   );

   // Filter projects NOT main
   const filteredProjects = projectsInfo.filter((project) => !project.isMain);

   // Show button
   const showAllProjectsHandler = () => setProjectsAreSliced(false);

   // Hide button
   const hideProjectsHandler = () => setProjectsAreSliced(true);

   // Get programming languages name
   const getLanguages = () => {
      let programmingLanguages = [t('other_projects.selectAll') /* All */];
      filteredProjects.forEach((project) => {
         if (!programmingLanguages.includes(project.language)) {
            programmingLanguages.push(project.language);
         }
      });

      return programmingLanguages;
   };

   // Filter projects by language
   const filterProject = (language) => {
      hideProjectsHandler();

      if (language === t('other_projects.selectAll')) {
         setProjectsByLanguage(filteredProjects);
      } else {
         setProjectsByLanguage(
            filteredProjects.filter((project) => project.language === language)
         );
      }
   };

   // Display languages name
   const languages = () => {
      const languages = getLanguages();

      return languages.map((language, key) => (
         <span
            className={`${classes['f-language']} ${
               language === isActive ? classes['active'] : ''
            }`}
            key={key}
            onClick={(e) => {
               filterProject(language);
               isActiveHandler(e, language);
            }}
         >
            {language}
         </span>
      ));
   };

   // Display actual projects based on show more button actions
   const getProjects = () => {
      let otherProjectsShown = 4;
      if (screenWidth < 992) otherProjectsShown = 3;
      if (screenWidth < 769) otherProjectsShown = 2;

      if (projectsByLanguage.length === 0) {
         if (!projectsAreSliced) return filteredProjects;

         return filteredProjects.slice(0, otherProjectsShown);
      }

      if (!projectsAreSliced) return projectsByLanguage;

      return projectsByLanguage.slice(0, otherProjectsShown);
   };

   // Show more button conditions
   const showMoreProjectsButton = () => {
      if (
         (projectsAreSliced &&
            screenWidth > 991 &&
            (getProjects().length < 4 || projectsByLanguage.length === 4)) ||
         (projectsAreSliced &&
            screenWidth < 992 &&
            screenWidth > 768 &&
            (getProjects().length < 3 || projectsByLanguage.length === 3)) ||
         (projectsAreSliced &&
            screenWidth < 769 &&
            (getProjects().length < 2 || projectsByLanguage.length === 2))
      ) {
         return;
      }

      const button = (
         <Button
            onClick={
               projectsAreSliced ? showAllProjectsHandler : hideProjectsHandler
            }
            style={{ marginTop: '50px' }}
         >
            {projectsAreSliced ? 'SHOW MORE' : 'SHOW LESS'}
         </Button>
      );

      return projectsAreSliced ? (
         button
      ) : (
         <a href="#other-projects" style={{ padding: '10px 0' }}>
            {button}
         </a>
      );
   };

   return (
      <div id="other-projects" className={classes['projects-container']}>
         <Heading
            heading={'Other Projects'}
            subheading={'Some of my other works.'}
            pClassName={classes.paragraph}
         />

         <div className={classes['filter-languages']}>{languages()}</div>

         <ProjectsList projects={getProjects()} isMain={false} />

         {showMoreProjectsButton()}
      </div>
   );
};

export default OtherProjects;
