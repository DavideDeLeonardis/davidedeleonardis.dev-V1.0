import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import ProjectsList from '../ProjectsList';
import SelectLanguage from '../../ui/SelectLanguage';
import Button from '../../ui/Button';
import Heading from '../../ui/Heading';
import useDimensions from '../../../hooks/useDimensions';
import projects from '../../../assets/config/projects';
import { programmingLanguages } from '../../../assets/config/selectElements';

import classes from '../index.module.scss';

const OtherProjects = () => {
   const projectsInfo = projects();
   const [filteredProjectsByLanguage, setFilteredProjectsByLanguage] = useState(
      []
   );
   const [projectsAreSliced, setProjectsAreSliced] = useState(true);
   const { screenWidth } = useDimensions();
   const { t } = useTranslation();

   const showAllProjectsHandler = () => setProjectsAreSliced(false);

   const hideProjectsHandler = () => setProjectsAreSliced(true);

   // Filter projects NOT main
   const filteredProjects = projectsInfo.filter((project) => !project.isMain);

   // Set projects to show when value in select changes
   const setValueHandler = (e) => {
      hideProjectsHandler();

      if (e.target.value === 'All') {
         setFilteredProjectsByLanguage(filteredProjects);
      } else {
         setFilteredProjectsByLanguage(
            filteredProjects.filter(
               (project) => project.language === e.target.value
            )
         );
      }
   };

   // Projects passed to <ProjectsList />
   const getProjects = () => {
      let otherProjectsShown = 4;
      if (screenWidth < 992) otherProjectsShown = 3;
      if (screenWidth < 769) otherProjectsShown = 2;

      if (filteredProjectsByLanguage.length === 0) {
         if (!projectsAreSliced) return filteredProjects;

         return filteredProjects.slice(0, otherProjectsShown);
      }

      if (!projectsAreSliced) return filteredProjectsByLanguage;

      return filteredProjectsByLanguage.slice(0, otherProjectsShown);
   };

   // Show more button's conditions
   const showMoreProjectsButton = () => {
      if (
         (projectsAreSliced &&
            screenWidth > 991 &&
            (getProjects().length < 4 ||
               filteredProjectsByLanguage.length === 4)) ||
         (projectsAreSliced &&
            screenWidth < 992 &&
            screenWidth > 768 &&
            (getProjects().length < 3 ||
               filteredProjectsByLanguage.length === 3)) ||
         (projectsAreSliced &&
            screenWidth < 769 &&
            (getProjects().length < 2 ||
               filteredProjectsByLanguage.length === 2))
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

         <span className={classes.filter}>
            {t('other_projects.filter_text')} &nbsp;
         </span>
         <SelectLanguage
            className={classes.select}
            selectElements={programmingLanguages}
            onChange={setValueHandler}
            allPresent
         />

         <ProjectsList projects={getProjects()} isMain={false} />

         {showMoreProjectsButton()}
      </div>
   );
};

export default OtherProjects;
