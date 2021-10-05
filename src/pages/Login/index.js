import React from "react";
import "./index.css";
import { setUserSession } from "../../utils";
import { useHistory } from "react-router-dom";

const Login = () => {
  const [username, setUserName] = React.useState();
  const [password, setPassword] = React.useState();
  let history = useHistory();

  const handleSubmit = () => {
    if (username && password) {
      return fetch(`http://localhost:8080/authenticate`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      })
        .then((response) => {
          console.log(response.token);
          setUserSession(response.token);
          history.push("/");
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  return (
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      <form action="#">
        <label>
          <p>Username</p>
          <input type="text" onChange={(e) => setUserName(e.target.value)} />
        </label>
        <label>
          <p>Password</p>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <div>
          <input type="submit" onClick={handleSubmit} />
        </div>
      </form>
    </div>
  );
};

export default Login;
