const selectLanguage = ({ options }) => {
   const optionsList = options.map((option, index) => (
      <option value={option} key={index}></option>
   ));

   return (
      <select>
         <option value="All">All</option>
         {optionsList}
      </select>
   );
};

export default selectLanguage;
