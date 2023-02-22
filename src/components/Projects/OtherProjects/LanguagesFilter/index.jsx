// Libraries
import { useTranslation } from 'react-i18next';

// Custom hooks
import useActive from '../../../../hooks/useActive';

const LanguagesFilter = ({
   filteredProjects,
   hideProjectsHandler,
   setProjectsByLanguage,
   classes,
}) => {
   const { t } = useTranslation();
   const { isActive, isActiveHandler } = useActive(
      t('other_projects.selectAll')
   );
   const JSTS = 'JS / TS';

   // Get programming languages name
   const getLanguages = () => {
      let programmingLanguages = [t('other_projects.selectAll') /* All */];
      filteredProjects.forEach(({ languages }) => {
         // Creation new mix JS / TS
         if (
            languages.includes('JavaScript' || 'TypeScript') &&
            !programmingLanguages.includes(JSTS)
         )
            programmingLanguages.push(JSTS);

         for (const language of languages)
            if (
               language !== 'JavaScript' &&
               language !== 'TypeScript' &&
               !programmingLanguages.includes(language)
            )
               programmingLanguages.push(language);
      });

      return programmingLanguages;
   };

   // Condition of filter projects by language
   const filterProject = (language) => {
      hideProjectsHandler();

      if (language === t('other_projects.selectAll' /* All */))
         setProjectsByLanguage(filteredProjects);
      else if (language === JSTS)
         setProjectsByLanguage(
            filteredProjects.filter(
               ({ languages }) =>
                  languages.includes('JavaScript') ||
                  languages.includes('TypeScript')
            )
         );
      else
         setProjectsByLanguage(
            filteredProjects.filter(({ languages }) =>
               languages.includes(language)
            )
         );
   };

   // Display languages name
   return getLanguages().map((language, key) => (
      <span
         className={`${classes['f-language']} ${
            language === isActive ? classes['active'] : ''
         }`}
         onClick={(e) => {
            filterProject(language);
            isActiveHandler(e, language);
         }}
         key={key}
      >
         {language}
      </span>
   ));
};

export default LanguagesFilter;
