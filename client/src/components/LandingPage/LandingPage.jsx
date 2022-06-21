import { useHistory } from "react-router-dom";

import { BotonHome, Content, DivContent, P, Ptitle } from "./LandingPageStyled";
export default function LandingPage() {
  const history = useHistory();
  function irAHome() {
    history.push("/home");
  }
  return (
    <div>
      <Ptitle>Api-Food</Ptitle>
      <DivContent>
        <P>
          Here we show a list of recipes, you may filter them by health score,
          diets types and more even you may create your own recipe! Data was
          obtained from spoonacular.com
        </P>
        <P style={{ display: "none" }}> Espacio</P>
        <BotonHome onClick={irAHome}>
          <span style={{ color: "white", fontSize: "large" }}>Lets start!</span>{" "}
        </BotonHome>
      </DivContent>
    </div>
  );
}
