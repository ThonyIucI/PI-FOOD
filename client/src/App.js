import "./App.css";
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import Recipes from "./components/LandingPage/LandingPage";
import RecipeDetail from "./components/RecipeDetail/RecipeDetail.jsx";
import CreateRecipe from "./components/CreateRecipe/CreateRecipe.jsx";
import Diets from "./components/Diets/Diets.jsx";
import LandingPage from "./components/LandingPage/LandingPage";
import Summary from "./components/RecipeDetail/Summary";
function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={LandingPage} />
      <Route path="/home" component={Home} />
      <Route exact path="/create" component={CreateRecipe} />
      <Route path="/diets" component={Diets} />
      <Route exact path="/recipes/:id" component={RecipeDetail} />
      <Route path="/recipes/:id/summary" component={Summary} />
    </BrowserRouter>
  );
}

export default App;
