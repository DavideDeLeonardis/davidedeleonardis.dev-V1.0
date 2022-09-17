import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { useTranslation } from 'react-i18next';

import Button from '../../ui/Button';
import default_image from '../../../assets/images/default.png';

import classes from './index.module.scss';

const Project = () => {
   const { state: project, pathname } = useLocation();
   const navigate = useNavigate();
   const { t } = useTranslation();

   useEffect(() => {
      window.scrollTo(0, 0);
   }, [pathname]);

   useEffect(() => {
      if (project === null) navigate('/');
   }, [project, navigate]);

   return (
      project && (
         <>
            <div
               className={classes.container}
               style={{
                  backgroundImage: `url('${project.image || default_image}')`,
               }}
            >
               <div className={classes.content}>
                  <h1>{project.name}</h1>
                  <p>{project.long_description}</p>
               </div>
            </div>

            <HashLink to="/#projects">
               <Button>{t('main_projects.go_back')}</Button>
            </HashLink>
         </>
      )
   );
};

export default Project;
