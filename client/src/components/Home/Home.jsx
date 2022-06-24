import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  filterByDiet,
  getAllRecipes,
  getDiets,
  orderByAlphabet,
  orderByScore,
  refreshPage,
} from "../../redux/actions";
import FilterOptions from "../FilerOptions/FilerOptions";
import Loader from "../Loader/Loader";
import Pagination from "../Pagination/Pagination";
import RecipeCard from "../RecipeCard/RecipeCard";
import SearchBar from "../SearchBar/SearchBar";
import {
  ContainerBody,
  ContainerHead,
  ButtomCreateR,
  RefreshButton,
  Ptitle,
  ButtomsConatiner,
  NotFound,
} from "./HomeStyled";

export default function Home() {
  const dispatch = useDispatch();
  const history = useHistory();

  // const allRecipes = useSelector((state) => state.allRecipes);
  const recipesFiltered = useSelector((state) => state.recipesFiltered);
  const recipesByDiets = useSelector((state) => state.recipesByDiets);
  const diets_d = useSelector((state) => state.diets);

  const [filter, setFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const recipesInAPage = 9;

  const maxIndexRecipe = recipesInAPage * currentPage;
  const minIndexRecipe = maxIndexRecipe - recipesInAPage;
  let recipeTotal = recipesByDiets.length ? recipesByDiets : recipesFiltered;
  let recipesShown = recipeTotal //recetas filtradas por dietas o por lo menos el string del error
    ? recipeTotal.slice(minIndexRecipe, maxIndexRecipe)
    : ["There is not recipes to show"];

  // console.log(`===============${recipesFound.length} Recetas entradas========`);
  useEffect(() => {
    dispatch(getAllRecipes());
    dispatch(getDiets());
  }, []);

  // useEffect(() => {
  //   recipesShown = recipesFiltered;
  // }, [recipesFiltered]);
  const handleRefresh = () => {
    dispatch(refreshPage());
    setCurrentPage(1);
  };
  console.log(`Número de recetas filtradas: ${recipesFiltered.length}`);
  return (
    <>
      <ContainerHead>
        <Ptitle onClick={() => history.push("/")}>Api-Food</Ptitle>
        <SearchBar
          setFilter={setFilter}
          dispatch={dispatch}
          setCurrentPage={setCurrentPage}
        />
        <FilterOptions
          setFilter={setFilter}
          dispatch={dispatch}
          setCurrentPage={setCurrentPage}
        />
        <ButtomsConatiner>
          <ButtomCreateR onClick={(e) => history.push("/create")}>
            Create Your Own
          </ButtomCreateR>
          <RefreshButton onClick={() => handleRefresh()}>Refresh</RefreshButton>
        </ButtomsConatiner>
      </ContainerHead>
      <Pagination
        recipesInAPage={recipesInAPage}
        allRecipes={recipeTotal.length}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />

      <ContainerBody>
        {recipesShown && recipesShown.length ? (
          <>
            {typeof recipesShown[0] === "string" ? (
              <NotFound>
                Sorry
                <br />
                &laquo; {recipesShown[0]} &raquo;
              </NotFound> //Loader==
            ) : (
              recipesShown &&
              recipesShown?.map((recipe) => (
                <RecipeCard
                  key={recipe.id}
                  id={recipe.id}
                  name={recipe.name}
                  image={recipe.image}
                  diets={recipe.diets}
                  dishes={recipe.dishes}
                  health_score={recipe.health_score}
                />
              ))
            )}
          </>
        ) : (
          <Loader />
        )}
        {/* <Pagination
          recipesInAPage={recipesInAPage}
          allRecipes={recipeTotal.length}
          setCurrentPage={setCurrentPage}
        /> */}
      </ContainerBody>
    </>
  );
}
