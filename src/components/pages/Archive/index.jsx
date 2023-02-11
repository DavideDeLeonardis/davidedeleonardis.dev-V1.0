// Libraries
import { useEffect } from 'react';

// Components
import ArchiveProject from '../../Projects/ArchiveProjectItem';

// Assets
import projects from '../../../assets/config/projects';

// SCSS
import classes from './index.module.scss';

const ArchivePage = () => {
   useEffect(() => {
      // Scroll to top page and set <html> scroll behavior previously on initial due to hover on show page details button
      window.scrollTo(0, 0);
      document.documentElement.style.scrollBehavior = 'smooth';
   }, []);

   const archiveProject = projects().map((project, index) => (
      <ArchiveProject key={index} project={project} />
   ));

   return (
      <div className={classes['archive-container']}>
         <h1>Archive</h1>
         <ul className={classes['archive-list']}>
            {archiveProject}
            {archiveProject}
         </ul>
      </div>
   );
};

export default ArchivePage;
