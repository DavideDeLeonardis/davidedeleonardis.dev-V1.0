const useTransformedName = (project) => {
   const transformedName = () => {
      if (project.name.startsWith('php')) {
         return `
				${project.name.charAt(0).toUpperCase()}
				${project.name.charAt(1).toUpperCase()}
				${project.name.charAt(2).toUpperCase()}
				${project.name.slice(3).replace('-', ' ')}
			`;
      } else {
         return (
            project.name.charAt(0).toUpperCase() +
            project.name.slice(1).replaceAll('-', ' ')
         );
      }
   };
   return transformedName;
};

export default useTransformedName;
