import React from "react";
import { useHistory } from "react-router-dom";
import "./index.css";
import { removeUserSession } from "../../utils";

const Home = () => {
  let history = useHistory();

  const handleLogout = () => {
    removeUserSession();
    history.push("/login");
  };

  return (
    <div className="wrapper">
      <h1>Home</h1>
      <a onClick={handleLogout}>Logout</a>
    </div>
  );
};

export default Home;
