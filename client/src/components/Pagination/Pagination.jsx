import { useState } from "react";
import { ButtonPage, Container, ButtonPeviusNext } from "./PaginationSty";

export default function Pagination({
  recipesInAPage,
  allRecipes,
  setCurrentPage,
}) {
  let numberPage = [];
  for (let i = 0; i < Math.ceil(allRecipes / recipesInAPage); i++) {
    numberPage.push(i + 1);
  }
  const [currentNumber, setCurrentNumber] = useState(1);
  function handleNormal(number) {
    setCurrentPage(number);
    setCurrentNumber(number);
  }
  function handlePrevius() {
    setCurrentPage(currentNumber - 1);
    setCurrentNumber(currentNumber - 1);
  }
  function handleNext() {
    setCurrentPage(currentNumber + 1);
    setCurrentNumber(currentNumber + 1);
  }

  return (
    <Container>
      <ButtonPeviusNext
        onClick={() => handlePrevius()}
        disabled={currentNumber === 1 ? true : false}
      >
        &laquo;Previous
      </ButtonPeviusNext>
      {numberPage?.map((number) => (
        <ButtonPage key={number} onClick={() => handleNormal(number)}>
          {number}
        </ButtonPage>
      ))}

      <ButtonPeviusNext
        disabled={currentNumber < numberPage.length ? false : true}
        onClick={() => handleNext()}
      >
        Next &raquo;
      </ButtonPeviusNext>
    </Container>
  );
}
