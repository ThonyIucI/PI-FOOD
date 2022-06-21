import { ButtomDelet, Diet, DietsContainer } from "./FormSty";

export default function ChooseDiet({ diets, handleDelete }) {
  return (
    <DietsContainer>
      {diets?.map((diet) => (
        <Diet key={`${diet}`}>
          <ButtomDelet onClick={() => handleDelete(diet)}>X</ButtomDelet>
          {diet}
        </Diet>
      ))}
    </DietsContainer>
  );
}
