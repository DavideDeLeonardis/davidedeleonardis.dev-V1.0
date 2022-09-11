import Button from '../ui/Button';
import useDimensions from '../../hooks/useDimensions';

import classes from './index.module.scss';

const Presentation = () => {
   const { screenWidth } = useDimensions();

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

         <span className={classes.hi}>Hi, my name is</span>
         <div className={classes.name}>
            <span>Davide</span>
            {screenWidth < 805 && <br />}
            <span>De Leonardis</span>
         </div>
         <div className={classes.caption}>Jr. Full-stack Web Developer</div>
         <div className={classes.description}>
            <div>Nice to have you here!</div>
            <p>
               I love to build things for the web and I'm always enthusiastic
               about improving my <u>tech</u> skills!
            </p>
         </div>
         <a href="#about">
            <Button>About me</Button>
         </a>
      </section>
   );
};

export default Presentation;
