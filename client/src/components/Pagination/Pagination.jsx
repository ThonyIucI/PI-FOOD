import { ButtonPage, Container, ButtonPeviusNext } from "./PaginationSty";

export default function Pagination({
  currentPage,
  recipesInAPage,
  allRecipes,
  setCurrentPage,
}) {
  let numberPage = [];
  for (let i = 0; i < Math.ceil(allRecipes / recipesInAPage); i++) {
    numberPage.push(i + 1);
  }

  function handleNormal(number) {
    setCurrentPage(number);
  }
  function handlePrevius() {
    setCurrentPage(currentPage - 1);
  }
  function handleNext() {
    setCurrentPage(currentPage + 1);
  }

  return (
    <Container>
      <ButtonPeviusNext
        onClick={() => handlePrevius()}
        disabled={currentPage === 1 ? true : false}
      >
        &laquo;Previous
      </ButtonPeviusNext>
      {numberPage?.map((number) => (
        <ButtonPage key={number} onClick={() => handleNormal(number)}>
          {number}
        </ButtonPage>
      ))}

      <ButtonPeviusNext
        disabled={currentPage < numberPage.length ? false : true}
        onClick={() => handleNext()}
      >
        Next &raquo;
      </ButtonPeviusNext>
    </Container>
  );
}
