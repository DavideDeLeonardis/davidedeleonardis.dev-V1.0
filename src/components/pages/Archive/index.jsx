import projects from '../../../assets/config/projects';
import ProjectsList from '../../Projects/ProjectsList';

const ArchivePage = () => {
   const archivedProject = projects().filter((project) => project.isArchived);

   return (
      <>
         <h1>Archive</h1>
         <ProjectsList projects={archivedProject} hasMainStyle={false} />
      </>
   );
};

export default ArchivePage;
