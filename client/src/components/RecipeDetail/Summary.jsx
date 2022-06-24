import { Class, P } from "./RecipeDetailSty";

export default function Summary({ summary }) {
  return (
    <>
      <br />
      <br />
      <Class>Summary</Class>
      <P dangerouslySetInnerHTML={{ __html: summary }} />
      <br />
      <br />
    </>
  );
}
