import { NavLink } from "react-router-dom";

const AnimalHeader = ({ type }) => {
  return (
    <header>
      <h1>Adopt a Pet</h1>
      <NavLink to={`/animals/${type}`}>{type}</NavLink>
    </header>
  );
};

export default AnimalHeader;
