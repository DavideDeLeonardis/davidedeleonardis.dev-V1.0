import { useTranslation } from 'react-i18next';

import ProjectsList from '../ProjectsList';
import Heading from '../../ui/Heading';
import projects from '../../../assets/config/projects';

import classes from '../index.module.scss';

const MainProjects = () => {
   const projectsInfo = projects();
   const { t } = useTranslation();

   const filteredProjects = projectsInfo.filter((project) => project.isMain);

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
