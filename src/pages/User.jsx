import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import GithubContext from "../context/github/GithubContext";

const User = () => {
  const { getUser, user, loading, git add getUserRepos, repos } =
    useContext(GithubContext);

  const params = useParams();

  useEffect(() => {
    getUser(params.login);
    // getUserRepos(params.login);
  }, []);

  return <div>User</div>;
};

export default User;
