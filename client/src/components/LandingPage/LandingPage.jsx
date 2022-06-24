import { useHistory } from "react-router-dom";

import {
  BotonHome,
  Content,
  DivContent,
  P,
  Ptitle,
  PtitleL,
} from "./LandingPageStyled";
export default function LandingPage() {
  const history = useHistory();
  function irAHome() {
    history.push("/home");
  }
  return (
    <Content>
      <Ptitle>
        <PtitleL>Api-Food</PtitleL>
      </Ptitle>
      <DivContent>
        <P>
          Shearch a recipe and CREATE YOUR OWN! (Data was obtained from
          <a href="https://spoonacular.com"> spoonacular.com</a>)
        </P>
        <br />
        <BotonHome onClick={irAHome}>
          <span style={{ color: "white", fontSize: "large" }}>Start!</span>{" "}
        </BotonHome>
      </DivContent>
    </Content>
  );
}
