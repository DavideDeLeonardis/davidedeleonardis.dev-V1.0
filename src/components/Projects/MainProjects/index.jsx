// Libraries
import { useTranslation } from 'react-i18next';

// Components
import ProjectsList from '../ProjectsList';

// Assets
import projects from '../../../constants/projects';

// UI
import Heading from '../../ui/Heading';

// SCSS
import classes from '../index.module.scss';

const MainProjects = () => {
   const projectsInfo = projects();
   const { t } = useTranslation();

   // Filter projects main and NOT archived
   const filteredProjects = projectsInfo.filter(
      (project) => project.isMain && !project.isArchived
   );

   return (
      <div id="main-projects" className={classes['projects-container']}>
         <div className={classes['h1-container']}>
            <Heading
               heading={t('main_projects.heading')}
               h1ClassName={classes.h1Main}
            />
         </div>

         <ProjectsList projects={filteredProjects} hasMainStyle={true} />
      </div>
   );
};

export default MainProjects;
