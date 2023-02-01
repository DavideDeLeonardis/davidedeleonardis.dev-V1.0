// Libraries
import { useEffect } from 'react';

// Components
import ProjectsList from '../../Projects/ProjectsList';

// Assets
import projects from '../../../assets/config/projects';

const ArchivePage = () => {
   const archivedProject = projects().filter((project) => project.isArchived);

   useEffect(() => {
      // Scroll to top page and set <html> scroll behavior previously on initial due to hover on show page details button
      window.scrollTo(0, 0);
      document.documentElement.style.scrollBehavior = 'smooth';
   }, []);

   return (
      <>
         <h1>Archive</h1>
         <ProjectsList projects={archivedProject} hasMainStyle={false} />
      </>
   );
};

export default ArchivePage;
