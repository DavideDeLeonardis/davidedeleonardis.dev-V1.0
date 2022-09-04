import { skills } from '../../../assets/config/skills';

import classes from './index.module.scss';

const Slider3d = () => {
   const imagesList = skills.map((skill, index) => (
      <div
         key={index}
         className={classes.skill}
         style={{
            transform: `
					rotateY(calc(${index} * calc(360deg / ${skills.length}))) 
					translateZ(var(--width-skills-slider))
				`,
         }}
      >
         <img
            className={classes[skill.class]}
            src={skill.image}
            alt={skill.name}
         />
         <span>{skill.name}</span>
      </div>
   ));

   return <div className={classes.gallery}>{imagesList}</div>;
};

export default Slider3d;
