import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

// // user.test.js
// import React from "react";
// import { render, unmountComponentAtNode } from "react-dom";
// import { act } from "react-dom/test-utils";
// import RecipeCard from "./components/RecipeCard/RecipeCard";

// let container = null;
// beforeEach(() => {
//   // configurar un elemento del DOM como objetivo del renderizado
//   container = document.createElement("div");
//   document.body.appendChild(container);
// });

// afterEach(() => {
//   // limpieza al salir
//   unmountComponentAtNode(container);
//   container.remove();
//   container = null;
// });

// it("renderiza datos de usuario", async () => {
//   const fakeRecipe = {
//     id: 1,
//     name: "Pollo a la brasa",
//     image: "null",
//     diets: ["vegan"],
//     dishes: "null",
//     health_score: "56",
//   };

//   jest.spyOn(global, "fetch").mockImplementation(() =>
//     Promise.resolve({
//       json: () => Promise.resolve(fakeRecipe),
//     })
//   );

//   // Usa la versión asíncrona de act para aplicar promesas resueltas
//   await act(async () => {
//     render(<RecipeCard id="123" />, container);
//   });

//   expect(container.querySelector("Score").textContent).toBe(
//     fakeRecipe.health_score
//   );
//   // expect(container.querySelector("Title").textContent).toBe(fakeRecipe.name);
//   // expect(container.textContent).toContain(fakeRecipe.diets[0]);

//   // elimina la simulación para asegurar que las pruebas estén completamente aisladas
//   global.fetch.mockRestore();
// });

// // user.test.js

// import React from "react";
// import { render, unmountComponentAtNode } from "react-dom";
// import { act } from "react-dom/test-utils";
// import User from "./components/User";

// let container = null;
// beforeEach(() => {
//   // configurar un elemento del DOM como objetivo del renderizado
//   container = document.createElement("div");
//   document.body.appendChild(container);
// });

// afterEach(() => {
//   // limpieza al salir
//   unmountComponentAtNode(container);
//   container.remove();
//   container = null;
// });

// it("renderiza datos de usuario", async () => {
//   const fakeUser = {
//     name: "Joni Baez",
//     age: "32",
//     address: "123, Charming Avenue",
//   };
//   jest.spyOn(global, "fetch").mockImplementation(() =>
//     Promise.resolve({
//       json: () => Promise.resolve(fakeUser),
//     })
//   );

//   // Usa la versión asíncrona de act para aplicar promesas resueltas
//   await act(async () => {
//     render(<User id="123" />, container);
//   });

//   expect(container.querySelector("summary").textContent).toBe(fakeUser.name);
//   // expect(container.querySelector("strong").textContent).toBe(fakeUser.age);
//   // expect(container.textContent).toContain(fakeUser.address);

//   // elimina la simulación para asegurar que las pruebas estén completamente aisladas
//   global.fetch.mockRestore();
// });
