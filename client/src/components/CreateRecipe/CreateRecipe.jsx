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
  HomeB,
  BackB,
  Refresh,
  Header,
  FromContainer,
  InputTxt,
  ShowTxt,
  AddStep,
} from "./FormSty";
// import imageDefault from "../../img/default.jpg";
import { getAllRecipes, getDiets, postRecipe } from "../../redux/actions";
// import ChooseRecipe from "./ChooseDiet";
// Min and Max Value accepted to Score Value ==
let min = 0;
let max = 101;
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
  if (
    infoRecipe.image &&
    !/([a-z\-_0-9\/\:\.]*\.(jpg|jpeg|png|gif))/i.test(infoRecipe.image)
  ) {
    errors.image = "Image must be: jpg, jpeg, png or gif";
  }
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
    steps: [],
    image: "",
    diets: [],
  });
  const [addstep, SetAddstep] = useState("");
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
  function handlePressEnter(event) {
    if (event.key === "Enter" || event.keyCode === 13) {
      event.preventDefault();
      handleAddStep();
    }
  }
  function handleAddStep() {
    if (addstep.trim() && !infoRecipe.steps.includes(addstep)) {
      setInfoRecipe({
        ...infoRecipe,
        steps: [...infoRecipe.steps, addstep],
      });
    }

    SetAddstep("");
    // else return { ...infoRecipe };
    // console.log(infoRecipe);
  }
  function handleOnChange(event) {
    setInfoRecipe({
      ...infoRecipe,
      [event.target.name]: event.target.value,
    });
    setErrors(
      validate(
        {
          ...infoRecipe,
          [event.target.name]: event.target.value,
        },
        allRecipes
      )
    );
  }
  function handleOnchangeStep(event) {
    SetAddstep(event.target.value);
    // console.log(infoRecipe);
  }
  function handleSubmit(event) {
    if (event.key === "Enter" || event.keyCode === 13) {
      // event.preventDefault();
      alert("not press enter or I'll break you -.- :V");
    }
    event.preventDefault();
    dispatch(postRecipe(infoRecipe));
    // alert(`Recipe: ${infoRecipe.name} have been created`);
    // history.push("/home");
  }

  function handleRefresh() {
    setInfoRecipe({
      name: "",
      summary: "",
      health_score: 0,
      steps: [],
      image: "",
      diets: [],
    });
  }
  // console.log(addstep);
  // console.log(infoRecipe);
  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <Header>
          <Buttomscontainer>
            <HomeB type="home" onClick={() => history.push("/home")}>
              Home
            </HomeB>
            <BackB type="back" onClick={() => history.goBack()}>
              Back
            </BackB>
            <Refresh type="refresh" onClick={() => handleRefresh()}>
              Refresh
            </Refresh>
          </Buttomscontainer>
          <Ptitle>
            Create a Recipe
            <Span> (Name and Summary are required)</Span>
          </Ptitle>
          <ButtomCreate
            type="submit"
            disabled={
              infoRecipe.name && Object.keys(errors).length === 0 ? false : true
            }
          >
            Done!
          </ButtomCreate>
        </Header>

        <FromContainer>
          <FormGroup>
            {/* Name */}
            <Label>
              Name:
              <Input
                onChange={(e) => handleOnChange(e)}
                type="text"
                name="name"
                value={infoRecipe.name}
                placeholder="Write a name..."
              />
              {errors && (errors.name_exist || errors.name_required) ? (
                <Message style={{ color: "red" }}>
                  {errors.name_exist || errors.name_required}
                </Message>
              ) : null}
            </Label>

            {/* Summary */}
            <Label>
              Summary:
              <InputTxt
                onChange={(e) => handleOnChange(e)}
                type="text"
                name="summary"
                value={infoRecipe.summary}
                placeholder="Write a Summary..."
              />
              {errors && errors.summary ? (
                <Message style={{ color: "red" }}>{errors.summary}</Message>
              ) : null}
            </Label>

            {/* Diets */}
            <Label>
              Diets:
              <Select
                defaultValue="Choose Diets"
                onChange={(e) => handleAdd(e)}
              >
                <option disabled>Choose Diets</option>
                {diets_d?.map((diet) => (
                  <option key={`${diet.id}`} name={`${diet.name}`}>
                    {diet.name}
                  </option>
                ))}
              </Select>
              <ChooseDiet
                diets={infoRecipe.diets}
                handleDelete={handleDelete}
              />
            </Label>
          </FormGroup>

          <FormGroup>
            <Label>
              Health Score:
              <Input
                onChange={(e) => handleOnChange(e)}
                type="number"
                name="health_score"
                value={infoRecipe.health_score}
                placeholder="Point your recipe..."
              />
              {errors && errors.health_score_range ? (
                <Message style={{ color: "red" }}>
                  {errors.health_score_range}
                </Message>
              ) : null}
            </Label>

            {/* Steps */}
            <Label>
              Steps:
              <AddStep type="addStep" onClick={() => handleAddStep()}>
                Add Step
              </AddStep>
              <Input
                onChange={(e) => handleOnchangeStep(e)}
                onKeyUp={(e) => handlePressEnter(e)}
                type="text"
                name="steps"
                value={addstep}
                placeholder="Detail the steps..."
              />
              <ShowTxt>
                {infoRecipe.steps.map((s) => (
                  <li
                    style={{ color: "black" }}
                    key={infoRecipe.steps.indexOf(s)}
                  >
                    {s}
                  </li>
                ))}
              </ShowTxt>
            </Label>
            <Label>
              Image:
              <Input
                onChange={(e) => handleOnChange(e)}
                type="text"
                name="image"
                value={infoRecipe.image}
                placeholder="Put an url image..."
              />
              {errors && errors.image ? (
                <Message>{errors.image}</Message>
              ) : null}
            </Label>
          </FormGroup>
        </FromContainer>
      </form>
    </>
  );
}
