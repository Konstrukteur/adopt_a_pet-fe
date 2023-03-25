import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AnimalsLayout from "./components/AnimalsLayout";
import AnimalLayout from "./components/AnimalLayout";

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/animals' element={<AnimalsLayout />} />
        <Route path='/animals/:type' element={<AnimalsLayout />} />
        <Route path='/animals/:type/:id' element={<AnimalLayout />} />
      </Routes>
    </div>
  );
}

export default App;
