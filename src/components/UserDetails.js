import React from "react";
import { useParams } from "react-router-dom"; //To access that url with data
import "antd/dist/antd.css";
import { Card } from "antd";

import { Link } from "react-router-dom";

const UserDetails = ({ userInfos, isLoading }) => {
  //useParams=>hook helps us to access the URL parameters from a current route
  const { username } = useParams();
  return (
    <>
      <div className="container-detail">
        <div className="data">
          {!isLoading
            ? "Loading..."
            : userInfos
                .filter((user) => user.username === username)
                .map((user) => (
                  <div key={user.id} className="userInfoCard">
                    <div className="site-card-border-less-wrapper">
                      <Card
                        title={user.name}
                        bordered={false}
                        style={{ width: 500, fontSize: "1.2rem" }}
                      >
                        <p>username:{user.username}</p>
                        <p>email:{user.email}</p>
                        <p>phone:{user.phone}</p>
                        <p>website:{user.website}</p>
                        <h4>address:</h4>
                        <p>street:{user.address.street}</p>
                        <p>suite:{user.address.suite}</p>
                        <p>city:{user.address.city}</p>
                        <p>zipcode:{user.address.zipcode}</p>
                      </Card>
                    </div>
                  </div>
                ))}
        </div>
      </div>
      <div>
        <Link className="back-to-home-btn" to={"/"}>
          <i class="fas fa-long-arrow-alt-left"> </i> back to home
        </Link>
      </div>
    </>
  );
};

export default UserDetails;
