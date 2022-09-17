import { skills } from '../../../assets/config/skills';

import classes from './index.module.scss';

const Skills = () => {
   const skillsList = skills.map((skillsItem, key) => (
      <li key={key}>
         <img
            className={classes[skillsItem.class]}
            src={skillsItem.image}
            alt={skillsItem.name}
         />
         <span>{skillsItem.name}</span>
      </li>
   ));

   return <ul className={classes.skills}>{skillsList}</ul>;
};

export default Skills;
