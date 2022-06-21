import { useSelector } from "react-redux";

import {
  filterByDiet,
  orderByAlphabet,
  orderByScore,
} from "../../redux/actions";
import { Select, OptionsContainer, P, Options } from "./FilerOptionsSty";

export default function FilterOptions({ setFilter, dispatch, setCurrentPage }) {
  const diets_d = useSelector((state) => state.diets);

  function handleOrderByAlphabet(event) {
    event.preventDefault();
    dispatch(orderByAlphabet(event.target.value));
    setCurrentPage(1);
    setFilter(`${event.target.value}`);
  }
  function handleOrderByScore(event) {
    event.preventDefault();
    dispatch(orderByScore(event.target.value));
    setCurrentPage(1);
    setFilter(`${event.target.value}`);
  }
  function handleFilterByDiet(event) {
    event.preventDefault();
    dispatch(filterByDiet(event.target.value));
    setCurrentPage(1);
    setFilter(`${event.target.value}`);
  }

  return (
    <Options>
      <P>Order By</P>
      <OptionsContainer>
        <Select
          defaultValue="Alphabet"
          onChange={(e) => handleOrderByAlphabet(e)}
        >
          <option disabled>Alphabet</option>
          <option value="A" key="A">
            A-Z
          </option>
          <option value="Z" key="Z">
            Z-A
          </option>
        </Select>

        <Select defaultValue="Score" onChange={(e) => handleOrderByScore(e)}>
          <option disabled>Score</option>
          <option value="1" key="1">
            Min to Max
          </option>
          <option value="0" key="0">
            Max to Min
          </option>
        </Select>

        <Select defaultValue="Diet" onChange={(e) => handleFilterByDiet(e)}>
          <option disabled>Diet</option>
          {diets_d?.map((diet) => (
            <option key={`${diet.name}`} name={`${diet.name}`}>
              {diet.name}
            </option>
          ))}
        </Select>
      </OptionsContainer>
    </Options>
  );
}
