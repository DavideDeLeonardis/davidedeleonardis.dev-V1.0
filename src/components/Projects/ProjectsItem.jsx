import { repos } from '../../assets/config/reposImages';
import { languageColors } from '../../assets/config/languageColors';
import default_image from '../../assets/images/default.png';

import classes from '../../assets/scss/partials/_projects.module.scss';

const ProjectItem = ({ repo, isMain }) => {
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

   return (
      <li className={isMain ? classes['main-p'] : classes['other-p']}>
         - {transformedName()}
         <br />
         <img
            className={classes['repo-img']}
            src={image || default_image}
            alt={`${transformedName()} project from Davide De Leonardis`}
         />
         <br /> {repo.description}
         <br /> {repo.language}
         <br />
         <span
            className={classes['color-language']}
            style={{ backgroundColor: languageColor || `#000000` }}
         ></span>
         <br />
         <ul>{topics}</ul>
         <br />
         {seeDemoLink}
         <br />
         <a href={repo.html_url} target="_blank" rel="noreferrer">
            See on GitHub
         </a>
      </li>
   );
};

export default ProjectItem;
