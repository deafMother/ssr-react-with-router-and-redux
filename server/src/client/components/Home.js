import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const handleClick = (event) => {
    console.log("counting");
  };
  return (
    <div>
      <div>This is the home comp, now watching</div>
      <div>
        <Link to="/about">about page</Link>
      </div>

      <div>
        <button onClick={handleClick}>Count</button>
      </div>
    </div>
  );
};

export default Home;
