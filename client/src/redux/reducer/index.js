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
} from "../actions/actionTypes";

const initialState = {
  recipesByDiets: [],
  recipesFiltered: [],
  allRecipes: [],
  diets: [],
  detail: {},
};
const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case POST_RECIPE:
      alert(payload.request.response);
      return { ...state };
    case GET_RECIPE_BY_ID:
      return {
        ...state,
        detail: payload,
      };
    case GET_RECIPES_BY_NAME:
      return {
        ...state,
        recipesFiltered: payload,
      };
    case GET_RECIPES:
      return {
        ...state,
        allRecipes: payload,
        recipesFiltered: payload,
      };
    case GET_DIETS:
      return {
        ...state,
        diets: payload,
      };
    case FILTER_BY_SEARCHBAR:
      // if (payload === "") state.recipesFiltered = [];
      // else {
      //   state.recipesFiltered = state.allRecipes.filter((r) =>
      //     r.name.includes(payload)
      // );
      // }
      let names = [];
      payload = payload.toLowerCase();
      names = state.allRecipes.filter((r) =>
        r.name.toLowerCase().includes(payload)
      );
      // console.log(`Resultado de filtrar: ${names} de tipo: ${typeof names}`);
      if (!Object.keys(names).length)
        names = [
          `Any match with << ${payload} >>, please try with another one`,
        ];
      return {
        ...state,
        recipesFiltered: names,
      };
    case FILTER_BY_DIET:
      let arr = [];
      if (typeof state.recipesFiltered[0] === "string") {
        alert("Impossible to filter if there is any recipe");
      } else {
        // arr = state.recipesFiltered.filter((e) => {
        //   let d = [];
        //   d = e.diets?.map((diet) => diet.toLowerCase());
        //   return d.includes(payload.toLowerCase());
        // });
        arr = state.recipesFiltered.filter((recipe) => {
          if (recipe.diets && recipe.diets.length > 0) {
            // console.log(recipe.diets.length);
            // console.log(recipe.diets)
            if (
              recipe.diets.find(
                (element) => element.toLowerCase() === payload.toLowerCase()
              )
            )
              return recipe;
            // console.log(recipe)
          }
        });
        state.recipesByDiets = arr;
      }
      if (!arr.length)
        state.recipesFiltered = [
          `Any recipe searched is clasiffied as << ${payload} >>, Plsease try with another type of Diet`,
        ];
      return {
        ...state,
      };
    case FILTER_BY_ID:
      let id = "";
      if (payload.length !== 36) {
        id = Number(payload);
      } else {
        id = payload;
      }
      state.detail = state.recipesFiltered.filter(
        (recipe) => recipe.id === id
      )[0];
      return {
        ...state,
      };
    case ORDER_BY_ALPHABET:
      let arrayTemp = [];
      if (typeof state.recipesFiltered[0] === "string") {
        alert("Impossible to order recipes if there is any recipe");
      } else {
        arrayTemp = state.recipesFiltered.sort((a, b) => {
          if (a.name.toLowerCase() > b.name.toLowerCase()) {
            return 1;
          }
          if (a.name.toLowerCase() < b.name.toLowerCase()) {
            return -1;
          }
          return 0;
        });

        if (payload === "A") {
          state.recipesFiltered = arrayTemp;
        } else {
          state.recipesFiltered = arrayTemp.reverse();
        }
      }
      return {
        ...state,
      };
    case ORDER_BY_SCORE:
      if (typeof state.recipesFiltered[0] === "string") {
        alert("Impossible to order recipes if there is any recipe");
      } else {
        if (payload === "1")
          state.recipesFiltered = state.recipesFiltered.sort(
            (a, b) => a.health_score - b.health_score
          );
        else
          state.recipesFiltered = state.recipesFiltered.sort(
            (a, b) => b.health_score - a.health_score
          );
      }
      return {
        ...state,
      };
    case REFRESH_PAGE:
      return {
        ...state,
        recipesFiltered: state.allRecipes,
        recipesByDiets: [],
      };
    default:
      return { ...state };
  }
};
export default reducer;
