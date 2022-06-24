import { useEffect, useState } from "react";

import { filterBySearchBar, getRecipesByName } from "../../redux/actions";
import { InputSearchbar, SearchButtom, SearchContainer } from "./SearchbarSty";

export default function SearchBar({ setFilter, dispatch, setCurrentPage }) {
  const [name, setName] = useState("");

  function handleInput(event) {
    event.preventDefault();
    setName(event.target.value);
    dispatch(filterBySearchBar(event.target.value));
    setCurrentPage(1);
  }
  function handleSubmit(event) {
    event.preventDefault();
    if (name) {
      dispatch(getRecipesByName(name));
      dispatch(filterBySearchBar(name));
      setName("");
    }
    setFilter(`${event.target.value}`);
    setCurrentPage(1);
  }

  return (
    <SearchContainer>
      <InputSearchbar
        type="text"
        placeholder="Search Recipe..."
        value={name}
        onChange={(event) => handleInput(event)}
      />

      <SearchButtom
        onClick={(event) => handleSubmit(event)}
        type="submit"
        disabled={name ? false : true}
      >
        Search
      </SearchButtom>
    </SearchContainer>
  );
}
