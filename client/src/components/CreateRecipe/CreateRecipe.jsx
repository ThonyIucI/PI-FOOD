import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import ChooseDiet from "./ChooseDiet";
import {
  FormGroup,
  Label,
  Input,
  Message,
  Ptitle,
  Span,
  Select,
  ButtomCreate,
  Buttomscontainer,
  OtherBottoms,
} from "./FormSty";
// import imageDefault from "../../img/default.jpg";
import { getAllRecipes, getDiets, postRecipe } from "../../redux/actions";
// import ChooseRecipe from "./ChooseDiet";
// Min and Max Value accepted to Score Value ==
let min = 0;
let max = 100;
// ============================================
function nameExist(infoRecipe, allRecipes) {
  let recipeMatch = allRecipes.filter(
    (r) => r.name.toLowerCase() === infoRecipe.name.toLowerCase()
  );
  return recipeMatch.length === 0 ? false : true;
}
function validate(infoRecipe, allRecipes) {
  let errors = {};
  if (!infoRecipe.name) errors.name_required = "Name is required";
  if (nameExist(infoRecipe, allRecipes))
    errors.name_exist = `Name ${infoRecipe.name} already Exist, Please choose a different name`;
  if (!infoRecipe.summary) errors.summary = "Summary is requierd";
  if (
    infoRecipe.health_score &&
    (Number(infoRecipe.health_score) <= min ||
      Number(infoRecipe.health_score) >= max)
  ) {
    errors.health_score_range =
      "Health Score must be in the range from 0 to 100";
  }
  // if (!Number.isInteger(infoRecipe.health_score)) {
  //   errors.health_score_integer = "Health Score must be an integer number";
  // }
  return errors;
}
// ===============================================================================
export default function CreateRecipe() {
  const dispatch = useDispatch();
  const history = useHistory();
  const diets_d = useSelector((state) => state.diets);
  const allRecipes = useSelector((state) => state.allRecipes);
  useEffect(() => {
    dispatch(getAllRecipes());
    dispatch(getDiets());
  }, []);

  const [infoRecipe, setInfoRecipe] = useState({
    name: "",
    summary: "",
    health_score: 0,
    steps: "",
    image: "",
    diets: [],
  });

  const [errors, setErrors] = useState({});
  function handleDelete(name) {
    setInfoRecipe({
      ...infoRecipe,
      diets: infoRecipe.diets.filter((diet) => diet !== name),
    });
  }
  function handleAdd(event) {
    if (infoRecipe.diets.includes(event.target.value)) return { ...infoRecipe };
    else {
      setInfoRecipe({
        ...infoRecipe,
        diets: [...infoRecipe.diets, event.target.value],
      });
    }
  }
  function handleOnChange(e) {
    setInfoRecipe({
      ...infoRecipe,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate(
        {
          ...infoRecipe,
          [e.target.name]: e.target.value,
        },
        allRecipes
      )
    );
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(postRecipe(infoRecipe));
    console.log(`Recipe: ${infoRecipe.name} have been created`);
    history.push("/home");
  }
  function handleRefresh() {
    setInfoRecipe({
      name: "",
      summary: "",
      health_score: 0,
      steps: "",
      image: null,
      diets: [],
    });
  }
  return (
    <>
      <Ptitle>Create a Recipe</Ptitle>
      <Span> (Name and Summary are required)</Span>
      <form onSubmit={(e) => handleSubmit(e)}>
        <FormGroup>
          <Label>
            Name:
            <Input
              onChange={(e) => handleOnChange(e)}
              type="text"
              name="name"
            />
            {errors && (errors.name_exist || errors.name_required) ? (
              <Message style={{ color: "red" }}>
                {errors.name_exist || errors.name_required}
              </Message>
            ) : null}
          </Label>

          <Label>
            Summary:
            <Input
              onChange={(e) => handleOnChange(e)}
              type="text"
              name="summary"
            />
            {errors && errors.summary ? (
              <Message style={{ color: "red" }}>{errors.summary}</Message>
            ) : null}
          </Label>

          <Label>
            Steps:
            <Input
              onChange={(e) => handleOnChange(e)}
              type="text"
              name="steps"
            />
          </Label>
        </FormGroup>

        <FormGroup>
          <Label>
            Diets:
            <Select defaultValue="Choose Diets" onChange={(e) => handleAdd(e)}>
              <option disabled>Choose Diets</option>
              {diets_d?.map((diet) => (
                <option key={`${diet.id}`} name={`${diet.name}`}>
                  {diet.name}
                </option>
              ))}
            </Select>
            <ChooseDiet diets={infoRecipe.diets} handleDelete={handleDelete} />
          </Label>

          <Label>
            Health Score:
            <Input
              onChange={(e) => handleOnChange(e)}
              type="number"
              name="health_score"
            />
            {errors && errors.health_score_range ? (
              <Message style={{ color: "red" }}>
                {errors.health_score_range}
              </Message>
            ) : null}
          </Label>
        </FormGroup>
        <Buttomscontainer>
          <OtherBottoms onClick={() => history.push("/home")}>
            Home
          </OtherBottoms>

          <ButtomCreate
            type="submit"
            disabled={
              infoRecipe.name && Object.keys(errors).length === 0 ? false : true
            }
          >
            Done!
          </ButtomCreate>

          <OtherBottoms onClick={() => history.goBack()}>Back</OtherBottoms>
        </Buttomscontainer>
        {/* <button onClick={() => handleRefresh()}>Refresh fields</button> */}
      </form>
    </>
  );
}
