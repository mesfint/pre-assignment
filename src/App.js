import { React, useEffect, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";
import UserInfoCard from "./components/UserInfoCard";
import UserDetails from "./components/UserDetails";
import "./App.css";

const fetchData = () => {
  return axios
    .get("https://jsonplaceholder.typicode.com/users")

    .then(({ data }) => {
      // handle success
      console.log(data);

      return data;
    })

    .catch((error) => {
      // handle error

      console.log(error);
    });
};
const App = () => {
  const [userInfos, setUserInfos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchData().then((data) => {
      setUserInfos(data);
      setIsLoading(true);
    });
  }, []);

  return (
    <Router>
      <Route exact path="/">
        <UserInfoCard userInfos={userInfos} isLoading={isLoading} />
      </Route>
      <Route path="/users/:username">
        <UserDetails userInfos={userInfos} isLoading={isLoading} />
      </Route>
    </Router>
  );
};
export default App;
