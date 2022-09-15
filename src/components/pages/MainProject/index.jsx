import { useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';

import Button from '../../ui/Button';
import default_image from '../../../assets/images/default.png';

const Project = () => {
   const { state: project } = useLocation();
   const navigate = useNavigate();
   console.log(project);

   useEffect(() => {
      if (project === null) navigate('/');
   }, [project, navigate]);

   const reloadPage = () => window.location.reload();

   return (
      project && (
         <>
            <h1>{project.name}</h1>
            <p>{project.long_description}</p>
            <img
               width="200"
               src={project.image || default_image}
               alt={`${project.name} project from Davide De Leonardis`}
            />
            <br />

            <Link onClick={reloadPage} to="/">
               <Button>Go back</Button>
            </Link>
         </>
      )
   );
};

export default Project;
