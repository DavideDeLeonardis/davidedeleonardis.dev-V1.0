// Libraries
import { useTranslation } from 'react-i18next'; 

// Custom hooks
import useDimensions from '../../../../hooks/useDimensions';

// UI
import Button from '../../../ui/Button';

const ShowMoreButton = ({
   getProjects,
   projectsByLanguage,
   projectsAreSliced,
   setProjectsAreSliced,
   hideProjectsHandler,
   classes,
}) => {
   const { screenWidth } = useDimensions();
   const { t } = useTranslation();

   // Show "show more" button
   const showAllProjectsHandler = () => setProjectsAreSliced(false);

   // "Show more" button display conditions
   if (
      (projectsAreSliced &&
         screenWidth > 900 &&
         (getProjects().length < 3 || projectsByLanguage.length === 3)) ||
      (projectsAreSliced &&
         screenWidth < 901 &&
         (getProjects().length < 2 || projectsByLanguage.length === 2))
   )
      return;

   const onClick = () => {
      // Prevent glitch in scroll up
      document.documentElement.style.scrollBehavior = 'initial';
      setTimeout(
         () => (document.documentElement.style.scrollBehavior = 'smooth'),
         100
      );

      projectsAreSliced ? showAllProjectsHandler() : hideProjectsHandler();
   };

   // Actual button
   const buttonShowMore = (
      <Button className={classes['show-more-button']} onClick={onClick}>
         {projectsAreSliced
            ? t('other_projects.show_more')
            : t('other_projects.show_less')}
      </Button>
   );

   return projectsAreSliced ? (
      buttonShowMore
   ) : (
      <a href="#other-projects" style={{ padding: '10px 0' }}>
         {buttonShowMore}
      </a>
   );
};

export default ShowMoreButton;
