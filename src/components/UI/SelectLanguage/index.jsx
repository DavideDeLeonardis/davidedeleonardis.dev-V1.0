import { useTranslation } from 'react-i18next';

const SelectLanguage = ({
   className,
   selectElements,
   onChange,
   allPresent = false,
}) => {
   const { t } = useTranslation();

   const optionsList = selectElements.map((element, index) => (
      <option value={element.value} key={index}>
         {element.option}
      </option>
   ));

   return (
      <select className={className} onChange={onChange}>
         {allPresent && (
            <option value="All">{t('other_projects.selectAll')}</option>
         )}
         {optionsList}
      </select>
   );
};

export default SelectLanguage;
