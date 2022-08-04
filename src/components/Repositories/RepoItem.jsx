const RepoItem = ({ repo }) => {
   return (
      <li>
         - {repo.name}
         <br /> {repo.description}
         <br /> {repo.language}
         <br />
         <br />
      </li>
   );
};

export default RepoItem;
