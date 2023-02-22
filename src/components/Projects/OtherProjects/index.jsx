// Libraries
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

// Components
import ProjectsList from '../ProjectsList';
import LanguagesFilter from './LanguagesFilter';
import ShowMoreButton from './ShowMoreButton.jsx';

// Assets
import projects from '../../../assets/config/projects';

// Custom hooks
import useDimensions from '../../../hooks/useDimensions';

// UI
// import LinkWithScrollOnTop from '../../ui/LinkWithScrollOnTop';
import Heading from '../../ui/Heading';

// SCSS
import classes from '../index.module.scss';

const OtherProjects = () => {
   const projectsInfo = projects();
   const [projectsByLanguage, setProjectsByLanguage] = useState([]);
   const [projectsAreSliced, setProjectsAreSliced] = useState(true);
   const { screenWidth } = useDimensions();
   const { t } = useTranslation();

   // Filter projects NOT main and NOT archived
   const filteredProjects = projectsInfo.filter(
      (project) => !project.isMain && !project.isArchived
   );

   // Hide "show more projects" button
   const hideProjectsHandler = () => setProjectsAreSliced(true);

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

   return (
      <div
         id="other-projects"
         className={`${classes['other-projects']} ${classes['projects-container']}`}
      >
         <Heading
            heading={t('other_projects.heading')}
            subheading={
               t('other_projects.p')

               /**
                * Archive link
                * Remember to change also in scss .paragraph
                */
               // <LinkWithScrollOnTop
               //    endpoint={'archive'}
               //    content={t('other_projects.go_to_archive_link')}
               // />
            }
            pClassName={classes.paragraph}
         />

         <div className={classes['filter-languages']}>
            <LanguagesFilter
               filteredProjects={filteredProjects}
               hideProjectsHandler={hideProjectsHandler}
               setProjectsByLanguage={setProjectsByLanguage}
               classes={classes}
            />
         </div>

         <ProjectsList projects={getProjects()} hasMainStyle={false} />

         <ShowMoreButton
            getProjects={getProjects}
            projectsByLanguage={projectsByLanguage}
            projectsAreSliced={projectsAreSliced}
            setProjectsAreSliced={setProjectsAreSliced}
            hideProjectsHandler={hideProjectsHandler}
            classes={classes}
         />
      </div>
   );
};

export default OtherProjects;
