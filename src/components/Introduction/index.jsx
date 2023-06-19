import { useTranslation, Trans } from 'react-i18next';

import Button from '../ui/Button';
import useScreenDimensions from '../../hooks/useScreenDimensions';

import classes from './index.module.scss';

const Presentation = () => {
   const { screenWidth } = useScreenDimensions();
   const { t } = useTranslation();

   return (
      <section className={classes.presentation}>
         {/* <div className={classes['name-container']}>
            <span>Hi, I'm</span>
            <div className={classes.text} data-text="davide de leonardis"></div>
			</div>
         <div className={classes['rotate-words']}>
            <span style={{ '--d': '0s' }}>Full-Stack Web Developer</span>
            <span style={{ '--d': '4s' }}>x2 Salesforce Certifed</span>
         </div> */}

         <span className={classes.hi}>{t('intro.hi_intro')}</span>
         <div className={classes.name}>
            <span>Davide</span>
            {screenWidth < 805 && <br />}
            <span>De Leonardis</span>
         </div>
         <div className={classes.caption}>Jr. Full-stack Web Developer</div>
         <div className={classes.description}>
            <div>{t('intro.nice_intro')}</div>
            <p>
               <Trans components={{ blue: <span className={classes.blue} /> }}>
                  {t('intro.description_intro')}
               </Trans>
            </p>
         </div>
         <a href="#about">
            <Button>About me</Button>
         </a>
      </section>
   );
};

export default Presentation;
