import { useState } from 'react';

import CenteredCard from '../UI/CenteredCard';
import { repos } from '../../assets/config/reposImages';
import { languageColors } from '../../assets/config/languageColors';
import default_image from '../../assets/images/default.png';

import classes from '../../assets/scss/partials/_projects.module.scss';

const ProjectItem = ({ repo, isMain }) => {
   const [details, setDetails] = useState(false);

   const showDetailsHandler = () => setDetails(true);

   const hideDetailsHandler = () => setDetails(false);

   // If repo name starts with PHP or other based on GitHub name
   const transformedName = () => {
      if (repo.name.startsWith('php')) {
         return `
				${repo.name.charAt(0).toUpperCase()}
				${repo.name.charAt(1).toUpperCase()}
				${repo.name.charAt(2).toUpperCase()}
				${repo.name.slice(3).replace('-', ' ')}
			`;
      } else {
         return (
            repo.name.charAt(0).toUpperCase() +
            repo.name.slice(1).replace('-', ' ')
         );
      }
   };

   // Function for taking repo's image or language
   const getProperties = (array) => {
      for (let index = 0; index < array.length; index++) {
         // eslint-disable-next-line default-case
         switch (array) {
            case repos:
               if (array[index].id === repo.id) return array[index].image;
               break;
            case languageColors:
               if (array[index].language === repo.language)
                  return array[index].color;
               break;
         }
      }
   };

   // Get image
   const image = getProperties(repos);

   // Get language
   const languageColor = getProperties(languageColors);

   // Repo's topics
   const topics = repo.topics.map((topic, index) => (
      <li key={index}>{topic}</li>
   ));

   // Button see demo
   const seeDemoLink = repo.homepage !== '' &&
      repo.id !== 521026706 /* Id repo portfolio V-1.0 */ && (
         <a href={repo.homepage} target="_blank" rel="noreferrer">
            See Demo
         </a>
      );

   // Actual modal's details elements
   const detailsElement = (
      <CenteredCard backdropIsShown={details} onClose={hideDetailsHandler}>
         <div className={classes['details-container']}>
            {repo.description}
            <br />
            <ul>{topics}</ul>
            <br />
            {seeDemoLink}
            <br />
            <a href={repo.html_url} target="_blank" rel="noreferrer">
               See on GitHub
            </a>
         </div>
      </CenteredCard>
   );

   return (
      <li
         className={isMain ? classes['main-project'] : classes['other-project']}
      >
         <div className={classes['img-container']}>
            <img
               src={image || default_image}
               alt={`${transformedName()} project from Davide De Leonardis`}
            />
         </div>
         {transformedName()}
         <br />
         <div className={classes.language}>
            {repo.language}
            <span
               className={classes['color-language']}
               style={{ backgroundColor: languageColor || `#000000` }}
            ></span>
         </div>
         <br />
         <button onClick={showDetailsHandler}>Learn more</button>
         {details && detailsElement}
      </li>
   );
};

export default ProjectItem;
