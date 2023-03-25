import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getAnimal } from "./utils.js";
import AnimalHeader from "./AnimalHeader";

const AnimalLayout = () => {
  const [animal, setAnimal] = useState();
  const { id, type } = useParams();
  const url = `http://localhost:8000/animals/${type}/${id}`;

  useEffect(() => {
    getAnimal(url, id).then((data) => {
      setAnimal(data);
    });
  }, []);

  return (
    <div>
      <AnimalHeader type={type} />
      <div>
        <img src={animal && animal.url} alt={animal && animal.name} />
        <table>
          <tbody>
            <tr>
              <td>Name:</td>
              <td>{animal && animal.name}</td>
            </tr>
            <tr>
              <td>Breed:</td>
              <td>{animal && animal.breed}</td>
            </tr>
            <tr>
              <td>Age:</td>
              <td>{animal && animal.age}</td>
            </tr>
            <tr>
              <td>Description:</td>
              <td>{animal && animal.description}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default AnimalLayout;
