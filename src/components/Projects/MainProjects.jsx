import { useState } from 'react';

import useFetch from '../../hooks/useFetch';

const MainProjects = () => {
   const [repos, setRepos] = useState([]);
   const { isLoading, error } = useFetch(
      setRepos,
      'https://api.github.com/user/repos?type=public',
      `Bearer ${process.env.REACT_APP_TOKEN_GH}`
   );
	
   return <h2>Main Projects</h2>;
};

export default MainProjects;
