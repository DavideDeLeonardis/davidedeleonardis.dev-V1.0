const SelectLanguage = ({ options, onChangeValue }) => {
   const optionsList = options.map((option, index) => (
      <option value={option} key={index}>
         {option}
      </option>
   ));

   return (
      <select onChange={onChangeValue}>
         <option value="All">All</option>
         {optionsList}
      </select>
   );
};

export default SelectLanguage;
