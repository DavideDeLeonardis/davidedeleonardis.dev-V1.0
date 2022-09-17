import { useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Button from '../../ui/Button';
import default_image from '../../../assets/images/default.png';

import classes from './index.module.scss';

const Project = () => {
   const { state: project } = useLocation();
   const navigate = useNavigate();
   const { t } = useTranslation();

   useEffect(() => {
      if (project === null) navigate('/');
   }, [project, navigate]);

   const reloadPage = () => window.location.reload();

   return (
      project && (
         <div
            className={classes.container}
            style={{
               backgroundImage: `url('${project.image || default_image}')`,
            }}
         >
            <div className={classes.content}>
               <h1>{project.name}</h1>
               <p>{project.long_description}</p>
               <br />

               <Link onClick={reloadPage} to="/">
                  <Button>{t('main_projects.go_back')}</Button>
               </Link>
            </div>
         </div>
      )
   );
};

export default Project;
