const ArchiveProjects = ({ project }) => {
   return (
      <li>
         {project.name} - {project.description}
         <br />
         <br />
      </li>
   );
};

export default ArchiveProjects;
