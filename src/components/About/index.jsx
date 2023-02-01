// Libraries
import { Trans, useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Components
import Skills from './Skills';

// UI
import Heading from '../ui/Heading';
import Button from '../ui/Button';

// Custom hooks
import useFadeOnScroll from '../../hooks/useFadeOnScroll';

// Assets
import profileImage from '../../assets/images/profile.jpg';
import Certifications from '../../assets/images/Salesforce-Certifications.pdf';

// SCSS
import classes from './index.module.scss';

const About = () => {
   useFadeOnScroll(classes['in-page']);
   const { t } = useTranslation();

   return (
      /* eslint-disable jsx-a11y/anchor-has-content */
      <section id="about" className={`${classes.about} watch`}>
         <Heading heading={'About Me'} h1ClassName={classes.h1Main} />
         <div className={classes['container']}>
            <div className={classes['content']}>
               <div className={classes['text']}>
                  <p>
                     <Trans
                        components={{
                           span: <span className={classes.blue} />,
                           a: (
                              <a
                                 className={classes.blue}
                                 href={Certifications}
                                 target="_blank"
                                 rel="noreferrer"
                              />
                           ),
                        }}
                     >
                        {t('about.p1')}
                     </Trans>
                  </p>
                  <p>
                     <Trans components={{ b: <b /> }}>{t('about.p2')}</Trans>
                  </p>
                  <p>
                     <Trans
                        components={{
                           a: <a className={classes.blue} href="#contact" />,
                        }}
                     >
                        {t('about.p3')}
                     </Trans>
                  </p>
               </div>
               <span>{t('about.tech_work')}</span>
               <Skills />

               <a className={classes.button} href="#projects">
                  <Button>
                     Projects
                     <FontAwesomeIcon
                        icon="fa-solid fa-arrow-down"
                        className={classes.icon}
                     />
                  </Button>
               </a>
            </div>

            <div className={`${classes['img-container']} gray-image`}>
               <img src={profileImage} alt="Profile" />
            </div>
         </div>
      </section>
   );
};

export default About;
