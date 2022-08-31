import classes from './_presentation.module.scss';

const Presentation = () => {
   return (
      <section className={classes.presentation}>
         <div className={classes['name-container']}>
            <span>Hi, I'm</span>
            <div className={classes.text} data-text="davide de leonardis"></div>
         </div>

         <div className={classes['rotate-words']}>
            <span style={{ '--d': '0s' }}>Full-Stack Web Developer</span>
            <span style={{ '--d': '4s' }}>
               x2 Salesforce Certifed
            </span>
         </div>
      </section>
   );
};

export default Presentation;
