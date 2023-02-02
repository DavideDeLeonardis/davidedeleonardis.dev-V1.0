// Libraries
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

// Components
import ProjectsList from '../ProjectsList';

// Assets
import projects from '../../../assets/config/projects';

// UI
// import LinkWithScrollOnTop from '../../ui/LinkWithScrollOnTop';
import Heading from '../../ui/Heading';
import Button from '../../ui/Button';

// Custom hooks
import useActive from '../../../hooks/useActive';
import useDimensions from '../../../hooks/useDimensions';

// SCSS
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
   const JSTS = 'JS / TS';

   // Filter projects NOT main and NOT archived
   const filteredProjects = projectsInfo.filter(
      (project) => !project.isMain && !project.isArchived
   );

   // Show "show more projects" button
   const showAllProjectsHandler = () => setProjectsAreSliced(false);

   // Hide "show more projects" button
   const hideProjectsHandler = () => setProjectsAreSliced(true);

   // Get programming languages name
   const getLanguages = () => {
      let programmingLanguages = [t('other_projects.selectAll') /* All */];
      filteredProjects.forEach(({ languages }) => {
         // Creation new mix JS / TS
         if (
            languages.includes('JavaScript' || 'TypeScript') &&
            !programmingLanguages.includes(JSTS)
         )
            programmingLanguages.push(JSTS);

         for (const language of languages)
            if (
               language !== 'JavaScript' &&
               language !== 'TypeScript' &&
               !programmingLanguages.includes(language)
            )
               programmingLanguages.push(language);
      });

      return programmingLanguages;
   };

   // Filter projects by language
   const filterProject = (language) => {
      hideProjectsHandler();

      if (language === t('other_projects.selectAll' /* All */))
         setProjectsByLanguage(filteredProjects);
      else if (language === JSTS)
         setProjectsByLanguage(
            filteredProjects.filter(
               ({ languages }) =>
                  languages.includes('JavaScript') ||
                  languages.includes('TypeScript')
            )
         );
      else
         setProjectsByLanguage(
            filteredProjects.filter(({ languages }) =>
               languages.includes(language)
            )
         );
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
      let otherProjectsShown = 3;
      if (screenWidth < 901) otherProjectsShown = 2;

      if (projectsByLanguage.length === 0) {
         if (!projectsAreSliced) return filteredProjects;

         return filteredProjects.slice(0, otherProjectsShown);
      }

      if (!projectsAreSliced) return projectsByLanguage;

      return projectsByLanguage.slice(0, otherProjectsShown);
   };

   // Show more button display and conditions
   const showMoreProjectsButton = () => {
      if (
         (projectsAreSliced &&
            screenWidth > 900 &&
            (getProjects().length < 3 || projectsByLanguage.length === 3)) ||
         (projectsAreSliced &&
            screenWidth < 901 &&
            (getProjects().length < 2 || projectsByLanguage.length === 2))
      )
         return;

      const onClick = () => {
         document.documentElement.style.scrollBehavior = 'initial';
         setTimeout(
            () => (document.documentElement.style.scrollBehavior = 'smooth'),
            100
         );

         projectsAreSliced ? showAllProjectsHandler() : hideProjectsHandler();
      };

      const buttonShowMore = (
         <Button className={classes['show-more-button']} onClick={onClick}>
            {projectsAreSliced
               ? t('other_projects.show_more')
               : t('other_projects.show_less')}
         </Button>
      );

      return projectsAreSliced ? (
         buttonShowMore
      ) : (
         <a href="#other-projects" style={{ padding: '10px 0' }}>
            {buttonShowMore}
         </a>
      );
   };

   return (
      <div
         id="other-projects"
         className={`${classes['other-projects']} ${classes['projects-container']}`}
      >
         <Heading
            heading={t('other_projects.heading')}
            subheading={
					t('other_projects.p')
					// <LinkWithScrollOnTop
					//    endpoint={'archive'}
					//    content={t('other_projects.go_to_archive_link')}
					// />
					// change also scss .paragraph {}
            }
            pClassName={classes.paragraph}
         />

         <div className={classes['filter-languages']}>{languages()}</div>

         <ProjectsList projects={getProjects()} hasMainStyle={false} />

         {showMoreProjectsButton()}
      </div>
   );
};

export default OtherProjects;
