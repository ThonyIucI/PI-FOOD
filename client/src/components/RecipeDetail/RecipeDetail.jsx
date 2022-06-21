import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import {
  filterRecipeById,
  getAllRecipes,
  getRecipeById,
} from "../../redux/actions";
import imageDefault from "../../img/default.jpg";

import {
  Image,
  Diet,
  ListContainer,
  CardContainer,
  Class,
  Dish,
  Buttomscontainer,
  Home,
  Back,
  Score,
  Title,
  Etiqueta,
  P,
} from "./RecipeDetailSty";
export default function RecipeDetail() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();
  const allRecipes = useSelector((state) => state.allRecipes);
  console.log(allRecipes.length);
  // FILTRAR RECETA DE ENTRE LA DATA PRECARGADA (SI SE RECARGA LA PAGINA DEBEN PREGARGARSE LAS RECETAS PRIMERO ) =======================

  // const RecipesMissing = async (dispatch) => {
  //   await dispatch(getAllRecipes());
  //   await dispatch(filterRecipeById(id));
  // };

  // useEffect(() => {
  //   if (!allRecipes.length) {
  //     RecipesMissing(dispatch);
  //   } else {
  //     console.log("segunda opción", allRecipes.length);
  //     dispatch(filterRecipeById(id));
  //   }
  // }, []);
  // BUSCAR RECETA POR ID DIRECTAMENTE EN API O BD =======================
  useEffect(() => {
    dispatch(getRecipeById(id));
  }, []);

  const { image, name, dishes, diets, summary, health_score, steps } =
    useSelector((state) => state.detail);
  return (
    <CardContainer key={id}>
      <Buttomscontainer>
        <Home onClick={() => history.push("/home")}>Home</Home>
        <Back onClick={() => history.goBack()}>Back</Back>
        <Title>{name}</Title>
        <Score>
          Healt score:
          <Etiqueta> {health_score ? health_score : "- -"}</Etiqueta>
        </Score>
      </Buttomscontainer>
      <Image
        className="img"
        src={image ? image : imageDefault}
        alt="Loading detailed food_image..."
      />
      <ListContainer>
        <Class>Dishes Type: </Class>
        {dishes
          ? dishes?.map((dish) => <Diet key={dish}>{dish}</Diet>)
          : "Dish type not found"}
      </ListContainer>
      <ListContainer>
        <Class>
          Diets type:{" "}
          {diets
            ? diets?.map((diet) => <Dish key={diet}>{diet}</Dish>)
            : "Diets not found"}
        </Class>
      </ListContainer>
      <Class>Summary:</Class> <P>{summary}</P>
      <Class>Steps: </Class>
      <P>{steps ? steps : "Steps not found"}</P>
    </CardContainer>
  );
}
