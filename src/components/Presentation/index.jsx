import classes from './_presentation.module.scss';

const Presentation = () => {
   return (
      <section className={classes.presentation}>
         {/* <div className={classes['name-container']}>
            <span>Hi, I'm</span>
            <div className={classes.text} data-text="davide de leonardis"></div>
         </div>

         <div className={classes['rotate-words']}>
            <span style={{ '--d': '0s' }}>Full-Stack Web Developer</span>
            <span style={{ '--d': '4s' }}>
               x2 Salesforce Certifed
            </span>
         </div> */}
         <span>Hi, my name is</span>
         <div className={classes.name}>
            <div>Davide</div>
            <div>De Leonardis</div>
         </div>
         <h2>Jr. Web Developer</h2>
         <p className={classes.description}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex
            repellendus deserunt mollitia magnam, consequuntur praesentium, sunt
            quo recusandae tenetur quae inventore dolore dignissimos quod magni
            sit in veniam odit asperiores consectetur! Saepe quas beatae error
            amet quod aut voluptate quis nam voluptatum illo natus rem expedita
            quisquam nostrum tempora impedit, corporis molestiae velit aliquid
            minima dignissimos deleniti? Quos, non accusamus? Cupiditate labore
            obcaecati perferendis!
         </p>
      </section>
   );
};

export default Presentation;
