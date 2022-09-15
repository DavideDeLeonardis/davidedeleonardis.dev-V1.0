const useProjectProperties = (project) => {
   const getProperties = (array, property) => {
      for (let index = 0; index < array.length; index++) {
         // eslint-disable-next-line default-case
         switch (property) {
            case 'image':
               if (array[index].id === project.id) return array[index].image;
               break;
            case 'long-description':
               if (array[index].id === project.id)
                  return array[index].long_description;
               break;
            case 'language-color':
               if (array[index].language === project.language)
                  return array[index].color;
               break;
         }
      }
   };

   return getProperties;
};

export default useProjectProperties;
