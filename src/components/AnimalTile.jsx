import { NavLink } from "react-router-dom";

const AnimalTile = ({ animal, index, type }) => {
  return (
    <NavLink key={index + 1} to={`/animals/${type}/${index + 1}`}>
      <li>{animal.name}</li>
    </NavLink>
  );
};

export default AnimalTile;
