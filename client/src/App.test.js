import { render, fireEvent, cleanup, screen } from "@testing-library/react";
import ReactTestUtils from "react-dom/test-utils";
import LandingPage from "./components/LandingPage/LandingPage";
import { BotonHome } from "./components/LandingPage/LandingPageStyled";
const ReactDOM = require("react-dom");
// import { InputSearchbar } from "./components/SearchBar/SearchbarSty";

// import App from "./App";

afterEach(cleanup);
// test("Show the containers", () => {
//   const { container } = render(<App />);
//   // const linkElement = screen.getByText(/learn react/i);
//   // expect(linkElement).toBeInTheDocument();
//   expect(container.firstChild).toMatchInlineSnapshot();
// });
// test("Send an error message is recipe is not found", () => {
//   const { container } = render(<SearchBar />);
//   expect(container.firstChild.is);
// });

describe("Components of LandingPage", () => {
  xit("Has an div tag as container", () => {
    const Container = ReactTestUtils.renderIntoDocument(<LandingPage />);
    var div = ReactTestUtils.findRenderedDOMComponentWithTag(Container, "div");
    // const component = ReactTestUtils.renderIntoDocument(<SearchBar />);
    // var h2 = ReactTestUtils.findRenderedDOMComponentWithTag(component, "h2");
  });

  it("Contains a buttom with label=Lets start!", () => {
    let button = ReactTestUtils.renderIntoDocument(
      <BotonHome label="Lets start!" />
    );
    let buttonLabel = ReactDOM.findDOMNode(button).textContent;

    expect(buttonLabel).toBe("Lets start!");
  });
});
