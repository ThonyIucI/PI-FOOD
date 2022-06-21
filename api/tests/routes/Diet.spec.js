/* eslint-disable import/no-extraneous-dependencies */
// const { expect } = require('chai');
// const session = require("supertest-session");
const request = require("supertest");
const app = require("../../src/app.js");
const { Diet, conn } = require("../../src/db.js");

// const agent = session(app);
const recipe = {
  name: "Milanea a la napolitana",
};

describe("Recipe routes", () => {
  beforeAll(() =>
    conn.authenticate().catch((err) => {
      console.error("Unable to connect to the database:", err);
    })
  );
  // beforeEach(() => Diet.sync({ force: true }).then(() => Diet.create(recipe)));
  beforeAll(async () => {
    await conn.sync({ force: true });
  });
  beforeAll(async () => {
    const Diet1 = Diet.create({
      name: "Diet Primera",
    });
    const Diet2 = Diet.create({
      name: "Diet Segunda",
    });
    const Diet3 = Diet.create({
      name: "Diet Tercera",
    });
  });
  it("Should return status 200 and the list of all diets", async () => {
    const res = await request(app).get("/diets");
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([
      { id: 1, name: "Diet Primera" },
      { id: 2, name: "Diet Segunda" },
      { id: 3, name: "Diet Tercera" },
    ]);
  });
});
