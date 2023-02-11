// Assets
import { skills } from '../../../assets/config/skills';

// SCSS
import classes from './index.module.scss';

const Skills = () => {
   const skillsList = skills.map(({ class: className, image, name }, key) => (
      <li key={key}>
         <img className={classes[className]} src={image} alt={name} />
         <span>{name}</span>
      </li>
   ));

   return <ul className={classes.skills}>{skillsList}</ul>;
};

export default Skills;
