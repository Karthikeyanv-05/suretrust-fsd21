import React from "react";
import { Link } from "react-router-dom";


const Profile = () => {
  return (
    <div>
      <h1 className="relative text-4xl text-lime-900 text-center font-extrabold center align-center justify-center">Profile</h1>
      <center  className="center text-3xl justify-center align-middle">
        <Link to="/dashboard"> oops!..Pages in the dasboard are need to develope ..! Back to dashboard</Link>
      </center>
    </div>
  );
};

export default Profile;