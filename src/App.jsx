import { useState } from "react";
import Meal from "./Components/Meal";
import { Routes, Route } from "react-router-dom";
import RecipeInfo from "./Components/RecipeInfo";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<Meal />} />
        <Route path="/:MealId" element={ <RecipeInfo/>}/>
      </Routes>
    </>
  );
}

export default App;
