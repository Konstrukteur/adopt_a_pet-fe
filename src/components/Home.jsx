import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import HomeHeader from "./HomeHeader";
import { getTypes } from "./utils.js";

const Home = () => {
  const [types, setTypes] = useState([]);
  const url = "http://localhost:8000/animals";

  useEffect(() => {
    getTypes(url).then((data) => {
      setTypes(data);
    });
  }, []);

  const typesEntry = types.map((type, index) => {
    return (
      <NavLink key={index} to={`/animals/${type}`}>
        <li>{type}</li>
      </NavLink>
    );
  });

  return (
    <div>
      <HomeHeader />
      <ul>{typesEntry}</ul>
    </div>
  );
};

export default Home;
