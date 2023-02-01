import { useEffect } from 'react';

import ArchiveProjects from '../../Projects/ArchiveProjects';

import projects from '../../../assets/config/projects';

import classes from './index.module.scss';

const ArchivePage = () => {
   const filteredProjects = projects().filter((project) => project.isArchived);

   useEffect(() => {
      // Scroll to top page and set <html> scroll behavior previously on initial due to hover on show page details button
      window.scrollTo(0, 0);
      document.documentElement.style.scrollBehavior = 'smooth';
   }, []);

   const archiveProjects = filteredProjects.map((project, index) => (
      <ArchiveProjects key={index} project={project} />
   ));

   return (
      <div className={classes['archive-container']}>
         <h1>Archive</h1>
         <ul>
            {archiveProjects}
            {archiveProjects}
            {archiveProjects}
            {archiveProjects}
            {archiveProjects}
            {archiveProjects}
            {archiveProjects}
            {archiveProjects}
            {archiveProjects}
            {archiveProjects}
            {archiveProjects}
            {archiveProjects}
            {archiveProjects}
            {archiveProjects}
         </ul>
      </div>
   );
};

export default ArchivePage;
