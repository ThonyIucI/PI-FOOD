import axios from "axios";
import {
  POST_RECIPE,
  GET_RECIPES,
  GET_DIETS,
  GET_RECIPE_BY_ID,
  GET_RECIPES_BY_NAME,
  FILTER_BY_SEARCHBAR,
  FILTER_BY_DIET,
  FILTER_BY_ID,
  ORDER_BY_ALPHABET,
  ORDER_BY_SCORE,
  REFRESH_PAGE,
} from "./actionTypes";

const { REACT_APP_API_SERVER } = process.env;
let API_SERVER = REACT_APP_API_SERVER;
// const API_SERVER = "http://localhost:3001";

// JUGAR CON LA LOGICA DE ESTE POST!!!!!!!!!!!============
export function postRecipe(payload) {
  // console.log("Actions/Payload: ", payload);
  return async (dispatch) => {
    try {
      const newRecipe = await axios.post(`${API_SERVER}/recipes`, payload);
      // return newRecipe.then(({ data }) => {
      return dispatch({
        type: POST_RECIPE,
        payload: newRecipe,
      });
      // });
      //===========PORBAR CON AMBAS FORMAS A VER QUÉ SALE
      // return dispatch({
      //   type: POST_RECIPE,
      //   payload: newRecipe.data,
      // });
    } catch (error) {
      console.log(error.response.data);
    }
  };
}
export function getRecipeById(id) {
  return async (dispatch) => {
    try {
      let detail = await axios(`${API_SERVER}/recipes/${id}`);
      // .then((detail) =>
      console.log(`REspuesta para el id: ${id}: ${detail.data}`);
      return dispatch({
        type: GET_RECIPE_BY_ID,
        payload: detail.data,
      });
    } catch (error) {
      console.log(error.response);
      alert(
        error.response && error.response.data
          ? error.response.data
          : error.message
      );
    }
  };
}
export function getRecipesByName(name) {
  return async (dispatch) => {
    try {
      let recipes = await axios.get(`${API_SERVER}/recipes?name=${name}`);

      console.log(recipes);
      return dispatch({
        type: GET_RECIPES_BY_NAME,
        payload: recipes.data,
      });
    } catch (error) {
      console.log(error.response.data);
      alert(
        error.response && error.response.data
          ? error.response.data
          : error.message
      );
      return dispatch({
        type: GET_RECIPES_BY_NAME,
        payload: [error.response.data], //"Si es string Se mostrará el texto en la pantalla del Home"
      });
    }
  };
}

export function getAllRecipes() {
  return async function (dispatch) {
    try {
      await axios(`${API_SERVER}/recipes`).then((recipes) => {
        return dispatch({
          type: GET_RECIPES,
          payload: recipes.data,
        });
      });
      // console.log("Soy Allrecipes y me resolví");
    } catch (error) {
      console.log(error.message);
      alert(
        error.response && error.response.data
          ? error.response.data
          : error.message
      );
    }
  };
}

export function getDiets() {
  return async function (dispatch) {
    try {
      await axios(`${API_SERVER}/diets`).then((diets) => {
        console.log();
        dispatch({
          type: GET_DIETS,
          payload: diets.data,
        });
      });
    } catch (error) {
      console.log(error);
      alert(
        error.response && error.response.data
          ? error.response.data
          : error.message
      );
    }
  };
}

// export function searchById(payload) {
//   return {
//     type: GET_RECIPE_BY_ID,
//     payload,
//   };
// }

export function filterBySearchBar(payload) {
  return {
    type: FILTER_BY_SEARCHBAR,
    payload: payload,
  };
}
//Arrow Function y con dispatch separado del axios======
//Verificar el Query

export function filterByDiet(payload) {
  return {
    type: FILTER_BY_DIET,
    payload,
  };
}
export function filterRecipeById(payload) {
  console.log("Id en actions: ", payload);
  return {
    type: FILTER_BY_ID,
    payload,
  };
}
export function orderByAlphabet(payload) {
  return {
    type: ORDER_BY_ALPHABET,
    payload,
  };
}
export function orderByScore(payload) {
  return {
    type: ORDER_BY_SCORE,
    payload,
  };
}
export function refreshPage() {
  return {
    type: REFRESH_PAGE,
  };
}
