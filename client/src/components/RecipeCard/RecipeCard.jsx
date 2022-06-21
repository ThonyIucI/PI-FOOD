import { Link } from "react-router-dom";
import imageDefault from "../../img/default.jpg";
import {
  CardContainer,
  Image,
  Title,
  Celda,
  ListContainer,
  Class,
  Diet,
  Dish,
  Score,
} from "./RecipeCardSty";

export default function RecipeCard({
  id,
  name,
  image,
  diets,
  dishes,
  health_score,
}) {
  return (
    <CardContainer key={id}>
      <Score>{health_score ? health_score : "--"}</Score>
      <Link to={`/recipes/${id}`}>
        <Image
          className="img"
          src={image ? image : imageDefault}
          alt="Cargando Imagen..."
        />
      </Link>
      {/* <Label>ID: {id}</p> */}
      <Title>{name}</Title>
      <Celda>
        <Class> Diets: </Class>
        <ListContainer>
          {diets
            ? diets?.map((diet) => <Diet key={diet}>{diet}</Diet>)
            : "Diets not found"}
        </ListContainer>
      </Celda>
      <Celda>
        <Class> Dishes: </Class>
        <ListContainer>
          {dishes
            ? dishes?.map((dish) => <Dish key={dish}>{dish}</Dish>)
            : "dishes not found"}
        </ListContainer>
      </Celda>
    </CardContainer>
  );
}
