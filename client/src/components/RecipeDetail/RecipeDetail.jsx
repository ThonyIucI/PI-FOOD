import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useParams } from "react-router-dom";
import {
  filterRecipeById,
  getAllRecipes,
  getRecipeById,
} from "../../redux/actions";
import imageDefault from "../../img/default.jpg";

import {
  Image,
  CardContainer,
  Buttomscontainer,
  Home,
  Back,
  Score,
  Title,
  Etiqueta,
  BodyContainer,
  DetailContainer,
  ButtonSelecContainer,
  ButomDetail,
  ButomDetail1,
  ButomDetail2,
} from "./RecipeDetailSty";
import Summary from "./Summary";
import Steps from "./Steps";
import DietsDishes from "./DietsDishes";
import { useState } from "react";

export default function RecipeDetail() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();
  const allRecipes = useSelector((state) => state.allRecipes);

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
  const [detail, setDetail] = useState("DishDiet");
  function handleDetail(e) {
    e.preventDefault();
    setDetail(e.target.name);
  }

  return (
    <CardContainer key={id}>
      <Buttomscontainer>
        <Home onClick={() => history.push("/home")}>Home</Home>
        <Back onClick={() => history.goBack()}>Back</Back>
        <Title>{name}</Title>
        <Score>
          Healt Score
          <Etiqueta> {health_score ? health_score : "- -"}</Etiqueta>
        </Score>
      </Buttomscontainer>
      <BodyContainer>
        <Image
          className="img"
          src={image ? image : imageDefault}
          alt="Loading detailed food_image..."
        />
        <ButtonSelecContainer>
          <ButomDetail name="DishDiet" onClick={(e) => handleDetail(e)}>
            Dishes/Diets
          </ButomDetail>
          <ButomDetail1 name="Summary" onClick={(e) => handleDetail(e)}>
            Summary
          </ButomDetail1>
          <ButomDetail2 name="Steps" onClick={(e) => handleDetail(e)}>
            Steps
          </ButomDetail2>
        </ButtonSelecContainer>
        <DetailContainer>
          {detail === "DishDiet" ? (
            <DietsDishes diets={diets} dishes={dishes} />
          ) : detail === "Summary" ? (
            <Summary summary={summary} />
          ) : (
            <Steps steps={steps} />
          )}
        </DetailContainer>
      </BodyContainer>
    </CardContainer>
  );
}
