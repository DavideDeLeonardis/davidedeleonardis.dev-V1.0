const SelectLanguage = ({ className, selectElements, onChange }) => {
   const optionsList = selectElements.map((element, index) => (
      <option value={element.value} key={index}>
         {element.option}
      </option>
   ));

   return (
      <select className={className} onChange={onChange}>
         {optionsList}
      </select>
   );
};

export default SelectLanguage;
