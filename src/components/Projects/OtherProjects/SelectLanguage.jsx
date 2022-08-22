const SelectLanguage = ({ options, onChangeValue, className }) => {
   const optionsList = options.map((option, index) => (
      <option value={option} key={index}>
         {option}
      </option>
   ));

   return (
      <select className={className} onChange={onChangeValue}>
         <option value="All">All</option>
         {optionsList}
      </select>
   );
};

export default SelectLanguage;
