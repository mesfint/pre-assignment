import React from "react";
import { Link } from "react-router-dom";

const UserInfoCard = ({ userInfos, isLoading }) => {
  return (
    <>
      <div className="App">
        <div className="container">
          {!isLoading
            ? "Loading..."
            : userInfos.map((user) => (
                <div className="userInfo" key={user.id}>
                  <p className="firstLetter">{user.name.slice(0, 1)}</p>
                  <h5>{user.name}</h5>
                  <p>{`@${user.username}`}</p>
                  <Link
                    href="#"
                    className="website"
                  >{`http://${user.website}`}</Link>

                  <Link className="more-details" to={`/users/${user.username}`}>
                    more details
                  </Link>
                </div>
              ))}
        </div>
        <div class="attribution">
          Developed by
          <a href="https://mesfint.netlify.app/">MesfinT</a>
        </div>
      </div>
    </>
  );
};

export default UserInfoCard;
