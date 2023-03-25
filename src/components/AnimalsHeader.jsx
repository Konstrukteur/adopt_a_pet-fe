import { NavLink } from "react-router-dom";

const AnimalsHeader = () => {
  return (
    <header>
      <h1>Adopt a Pet</h1>
      <NavLink to='/'>Animals</NavLink>
    </header>
  );
};

export default AnimalsHeader;
