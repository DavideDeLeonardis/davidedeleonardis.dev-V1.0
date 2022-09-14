import Slider3d from './Slider-3d';
import Heading from '../ui/Heading';
import profileImage from '../../assets/images/profile.jpg';
import Certifications from '../../assets/images/Salesforce-Certifications.pdf';

import classes from './index.module.scss';

const About = () => {
   return (
      <section id="about" className={classes.about}>
         <Heading heading={'About Me'} h1ClassName={classes.h1Main} />
         <div className={classes['container']}>
            <div className={classes['content']}>
               <div className={classes['text']}>
                  <p>
                     I'm a student attending the second year in a business
                     school, and besides the interest for economics I'm also a{' '}
                     <span className={classes.blue}>
                        &nbsp;Jr. Full-stack Web Developer&nbsp;
                     </span>{' '}
                     and &nbsp;
                     <a
                        className={classes.blue}
                        href={Certifications}
                        target="_blank"
                        rel="noreferrer"
                     >
                        x2 Salesforce Certified
                     </a>
                     .
                  </p>
                  <p>
                     I constantly improve my programming knowledge both in
                     front-end and in back-end technologies, developing
                     responsive and intuitive web application in{' '}
                     <b>React/Vue</b> and <b>PHP</b>, even though now I'm
                     switching to <b>MERN stack</b>.
                  </p>
                  <p>
                     Doesn't matter how challenging the project is, if you've an
                     idea,{' '}
                     <a className={classes.blue} href="#contact">
                        contact me
                     </a>{' '}
                     and let's enjoy building it!
                  </p>
               </div>
               <span>Technologies I've worked with:</span>
               <div className={classes['slider-container']}>
                  <Slider3d />
               </div>
            </div>

            <div className={`gray-image ${classes['img-container']}`}>
               <img src={profileImage} alt="Profile" />
            </div>
         </div>
      </section>
   );
};

export default About;
