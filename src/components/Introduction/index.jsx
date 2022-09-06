import Button from '../UI/Button';
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
            <div>
               I'm a{' '}
               <span className={classes.underline}>
                  &nbsp;Jr. Full-stack Web Developer&nbsp;
               </span>{' '}
               and{' '}
               <span className={classes.underline}>
                  &nbsp;x2 Salesforce Certified
               </span>
               .
            </div>
            <div>
               I love to build things for the web and I'm always enthusiastic
               about learning something new, better if linked to <u>tech</u> :)
            </div>
         </div>
         <a href="#about">
            <Button>About me</Button>
         </a>
      </section>
   );
};

export default Presentation;
