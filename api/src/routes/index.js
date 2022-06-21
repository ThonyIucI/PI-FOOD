const { Router } = require("express");

const { response } = require("../app");
const {
  getAllRecipes,
  getRecipeDetail,
  createRecipe,
  getDiets,
  createDiet,
} = require("../controllers");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get("/recipes", getAllRecipes);
router.get("/recipes/:id", getRecipeDetail);
router.post("/recipes", createRecipe);
router.get("/diets", getDiets);
router.post("/diets", createDiet);
module.exports = router;
