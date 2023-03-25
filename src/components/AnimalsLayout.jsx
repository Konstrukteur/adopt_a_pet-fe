import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getAnimals } from "./utils";
import AnimalsHeader from "./AnimalsHeader";
import AnimalTile from "./AnimalTile";

const AnimalsLayout = () => {
  const [animals, setAnimals] = useState([]);
  const animal = useParams();
  const type = animal.type;
  const url = `http://localhost:8000/animals/${type}`;

  useEffect(() => {
    getAnimals(url, type).then((data) => {
      setAnimals(data);
    });
  }, []);

  const animalList = animals.map((animal, index) => {
    return <AnimalTile key={index} animal={animal} index={index} type={type} />;
  });

  return (
    <div>
      <AnimalsHeader />
      <ul>{animalList}</ul>
    </div>
  );
};
export default AnimalsLayout;
