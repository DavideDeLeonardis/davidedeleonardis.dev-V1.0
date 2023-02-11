const SelectLanguage = ({ className, selectElements, onChange }) => {
   const optionsList = selectElements.map(({ value, option }, index) => (
      <option value={value} key={index}>
         {option}
      </option>
   ));

   return (
      <select className={className} onChange={onChange}>
         {optionsList}
      </select>
   );
};

export default SelectLanguage;
