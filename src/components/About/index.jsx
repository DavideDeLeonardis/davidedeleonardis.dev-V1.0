import { Trans, useTranslation } from 'react-i18next';

import Skills from './Skills';
import Heading from '../ui/Heading';
import profileImage from '../../assets/images/profile.jpg';
import Certifications from '../../assets/images/Salesforce-Certifications.pdf';

import classes from './index.module.scss';

const About = () => {
   const { t } = useTranslation();

   return (
      /* eslint-disable jsx-a11y/anchor-has-content */
      <section id="about" className={classes.about}>
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
            </div>

            <div className={`gray-image ${classes['img-container']}`}>
               <img src={profileImage} alt="Profile" />
            </div>
         </div>
      </section>
   );
};

export default About;
