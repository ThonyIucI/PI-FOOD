import { Link } from "react-router-dom";
export default function NavBar() {
  return (
    <div>
      <h1>Menú de Navegación</h1>
      <Link to="/">Home</Link>
      <br />
      <Link to="/recipes/create">Create Recipe</Link>
      <br />
      <Link to="/diets">Diets</Link>
    </div>
  );
}
