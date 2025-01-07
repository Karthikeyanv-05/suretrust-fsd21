import React from "react";
import { Link } from "react-router-dom";

const Body = () => {
    return (
      <>
      <div>
        <style>
            <background-img><img src="https://images.unsplash.com/photo-1439920120577-eb3a83c16dd7?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJ1c3R8ZW58MHx8MHx8fDA%3D" alt="" /></background-img>:url("https://images.unsplash.com/photo-1439920120577-eb3a83c16dd7?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJ1c3R8ZW58MHx8MHx8fDA%3D");
        </style>
      </div>
        <div className="flex justify-center items-center h-screen">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Welcome to SureTrust</h1>
            <p className="text-lg mb-8">
              Our website is dedicated to providing you with the best possible
              experience.
            </p>
            <Link
              to="/"
              className="bg-green-900 hover:bg-green-950 text-white font-bold py-2 px-4 rounded"
            >
              Get Started
            </Link>
          </div>
        </div>
      </>
    );
};

export default Body;