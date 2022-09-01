import { skills } from '../../../assets/config/skills';

import classes from './index.module.scss';

const Slider3d = () => {
   const getImages = () => {
      let index = 0;
      while (index <= skills.length) {
         const imagesList = skills.map((skill, i) => (
            <div key={i} className={classes.skill} style={{ '--i': i }}>
               <img src={skill.image} alt="slider-3d" />
               <span>{skill.name}</span>
            </div>
         ));
         index++;

         return imagesList;
      }
   };

   return <div className={classes.gallery}>{getImages()}</div>;
};

export default Slider3d;
