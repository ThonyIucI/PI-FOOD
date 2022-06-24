import { Class, Diet, Dish, ListContainer } from "./RecipeDetailSty";

export default function DietsDishes({ dishes, diets }) {
  return (
    <>
      <ListContainer>
        <Class>Dishes Type: </Class>
        <>
          {dishes
            ? dishes?.map((dish) => <Dish key={dish}>{dish}</Dish>)
            : "Any type of dish to show"}
        </>
      </ListContainer>
      <ListContainer>
        <Class>Diets type: </Class>

        {diets && diets.length
          ? diets?.map((diet) => <Diet key={diet}>{diet}</Diet>)
          : "Any type of diet to show"}
      </ListContainer>
    </>
  );
}
