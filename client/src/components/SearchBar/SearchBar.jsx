import { useState } from "react";
import { useDispatch } from "react-redux";
import { filterBySearchBar, getRecipesByName } from "../../redux/actions";
import { InputSearchbar, SearchButtom, SearchContainer } from "./SearchbarSty";

export default function SearchBar() {
  const dispatch = useDispatch();
  const [name, setName] = useState();

  function handleInput(event) {
    event.preventDefault();
    setName(event.target.value);
    dispatch(filterBySearchBar(event.target.value));
  }
  function handleSearch(event) {
    event.preventDefault();
    dispatch(filterBySearchBar(name));
  }

  return (
    <SearchContainer>
      <InputSearchbar
        type="text"
        placeholder="Search Recipe..."
        onChange={(event) => handleInput(event)}
      />
      <SearchButtom
        onClick={(event) => handleSearch(event)}
        disabled={name ? false : true}
      >
        Search
      </SearchButtom>
    </SearchContainer>
  );
}
