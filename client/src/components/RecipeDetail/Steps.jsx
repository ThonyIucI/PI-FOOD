import { Class, P } from "./RecipeDetailSty";

export default function Steps({ steps }) {
  return (
    <>
      <br />
      <br />
      <Class>Steps</Class>
      <P>
        {steps && steps.length
          ? steps?.map((step) => <li key={steps.indexOf(step)}>{step}</li>)
          : "There is not steps for this Recipe"}
      </P>{" "}
      <br />
      <br />
    </>
  );
}
