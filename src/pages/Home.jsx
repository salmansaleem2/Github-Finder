import React from "react";
import UserResults from "../components/users/UserResults";
import UserSearch from "../components/users/UserSearch";

const Home = () => {
  return (
    <>
      {/* Search Component */}
      <UserSearch />
      <UserResults />
    </>
  );
};

export default Home;
