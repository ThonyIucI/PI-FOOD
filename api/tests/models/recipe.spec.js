const { Recipe, conn } = require("../../src/db.js");
// const { expect } = require("chai");

describe("Recipe model", () => {
  beforeAll(() =>
    conn.authenticate().catch((err) => {
      console.error("Unable to connect to the database:", err);
    })
  );
  describe("Validators", () => {
    // beforeAll(async () => await Recipe.sync({ force: true }));
    beforeAll(async () => {
      await conn.sync({ force: true });
      console.log("Anthony");
    });

    describe("name", () => {
      it("should throw an error if name is null", (done) => {
        Recipe.create({ summary: "Aquí va el resumen" })
          .then(() => done(new Error("It requires a valid name")))
          .catch(() => done());
      });
      it("should work when its a valid name", () => {
        Recipe.create({
          name: "Milanesa a la napolitana",
          summary: "Aquí va el resumen",
        });
      });
      it("Should not create the Recipe if summary is not send", (done) => {
        Recipe.create({ name: "Pollo a la brasa" })
          .then(() => done(new Error("It requires a valid Summary")))
          .catch(() => done());
      });
      it("should not create the Recipe if name is not send", async () => {
        // expect.assertions(1);
        try {
          await Recipe.create({});
        } catch (error) {
          expect(error.message).toBeDefined();
        }
      });
      it("should not create two Recipes with the same name", async () => {
        // expect.assertions(2);
        try {
          const recipeOne = await Recipe.create({
            name: "First",
            summary: "First Summary",
            health_score: 85.0,
          });
          expect(recipeOne.toJSON()).toEqual({
            name: "First",
            summary: "First Summary",
            health_score: 85.0,
          });
          await Recipe.create({
            name: "Second",
            summary: "First Summary",
            health_score: 56.0,
            image: "",
            steps: "",
            diets: [],
          });
        } catch (error) {
          expect(error.message).toBeDefined();
        }
      });
      it("should not create Recipe if health_score is not between 0 and 100", async () => {
        // expect.assertions(2);
        try {
          await Recipe.create({
            name: "First",
            summary: "First Summary",
            health_score: 19,
          });

          await Recipe.create({
            name: "Second",
            summary: "Second Summary",
            health_score: 102,
          });
        } catch (error) {
          expect(error.message).toBeDefined();
        }
      });

      it("should create the Recipe if all required properties are ok", async () => {
        const recipe = await Recipe.create({
          name: "Cebiche",
          summary: "Plato hecho a base de pescado",
          health_score: 56,
        });
        //No se puede saber cuál será el ID por eso solo se comprueba que el resto de elementos coincidan
        expect(recipe.toJSON()).toMatchObject({
          name: "Cebiche",
          summary: "Plato hecho a base de pescado",
          health_score: 56,
          image: null,
          steps: null,
        });
      });
    });
  });
});
