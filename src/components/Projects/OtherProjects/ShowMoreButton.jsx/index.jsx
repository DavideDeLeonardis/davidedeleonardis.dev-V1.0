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

   // Display "Show more" button based on viewport width
   if (
      (projectsAreSliced &&
         screenWidth > 900 &&
         (getProjects().length < 3 || projectsByLanguage.length === 3)) ||
      (projectsAreSliced &&
         screenWidth < 901 &&
         (getProjects().length < 2 || projectsByLanguage.length === 2))
   )
      return;

   // Prevent glitch in scrolling up and change button text
   const onClick = () => {
      document.documentElement.style.scrollBehavior = 'initial';
      setTimeout(
         () => (document.documentElement.style.scrollBehavior = 'smooth'),
         100
      );

      projectsAreSliced ? showAllProjectsHandler() : hideProjectsHandler();
   };

   // Display actual button
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
