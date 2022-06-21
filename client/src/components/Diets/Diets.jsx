import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getAllRecipes, getRecipeById } from "../../redux/actions";

export default function Diets() {
  const dispatch = useDispatch();
  console.log(`dispatch es una: ${typeof dispatch}, de valor: ${dispatch}`);
  const allRecipes = useSelector((state) => state.allRecipes);
  // const { id } = useParams();
  const id = 716426;
  const Id = async (dispatch) => {
    await dispatch(getRecipeById(id));
  };
  const primero = async (dispatch) => {
    await dispatch(getAllRecipes());
    await dispatch(getRecipeById(id));
  };
  useEffect(() => {
    if (!allRecipes.length) {
      primero(dispatch);
    } else {
      console.log("segunda opción", allRecipes.length);
      Id(dispatch);
    }
    console.log(
      `ID= ${id} de tipo ${typeof id} i tiene ${id.length} caracteres`
    );
  }, []);
  return <div>Este es el listado de todas las dietas encontradas</div>;
}
