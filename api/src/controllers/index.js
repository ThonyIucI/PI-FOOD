require("dotenv").config();
const { Recipe, Diet, Op } = require("../db");
const axios = require("axios");
const { API_FAKE, SPOONACULAR_URL, API_KEY } = process.env; //Emulando a Spoonacular
// const API_FAKE = "http://localhost:8000/results";

const getNameByQuery = async (name) => {
  try {
    return await Recipe.findAll({
      attributes: ["name"],
      where: { name: { [Op.iLike]: `%${name}%` } }, //Buscar nombres sin importar mayusculas o minúsculas
    });
  } catch (error) {
    console.log(error.message);
  }
};
const getRecipesFromDb = async () => {
  try {
    let recipesDB = await Recipe.findAll({
      include: {
        model: Diet,
        attributes: ["name"],
        through: {
          attributes: [],
        },
      },
    });
    return recipesDB?.map((r) => {
      return {
        id: r.id,
        name: r.name,
        summary: r.summary,
        score: r.score,
        health_score: r.health_score,
        image: r.image,
        steps: r.steps,
        diets: r.Diets?.map((d) => d.name),
      };
    });
  } catch (error) {
    console.log(error.message);
  }
};
//Descomentar la URL de la API
const getRecipesFromApi = async () => {
  try {
    // ====Spoonacular===
    // const { data } = await axios.get(
    //   `${SPOONACULAR_URL}/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`);
    // let { results } = data;
    // ====Spoonacular===

    // ====APIFAKE===
    const response = await axios(`${API_FAKE}`);
    let results = response.data;
    // ====APIFAKE===

    // console.log(results[0]);

    if (results.length > 0) {
      return results.map((recipe) => {
        return {
          vegetarian: recipe.vegetarian,
          vegan: recipe.vegan,
          glutenFree: recipe.glutenFree,
          id: recipe.id,
          name: recipe.title,
          summary: recipe.summary,
          health_score: recipe.healthScore,
          steps:
            recipe.analyzedInstructions[0] &&
            recipe.analyzedInstructions[0].steps
              ? recipe.analyzedInstructions[0].steps?.map((step) => step.step)
              : [],
          image: recipe.image,
          diets: recipe.diets,
          dishes: recipe.dishTypes,
        };
      });
    }
  } catch (error) {
    console.log(error);
  }
};
const getAllRecipes = async (req, res) => {
  const { name } = req.query;
  try {
    let recipesFound = [];
    if (name) {
      recipesFound = await getNameByQuery(name); // Search by Query
    } else {
      recipesFound = [
        ...(await getRecipesFromDb()),
        ...(await getRecipesFromApi()),
      ];
    }
    if (recipesFound.length === 0) {
      if (name) {
        //Si no se encuentra receta cuando se llama por Query
        return res
          .status(404)
          .send(`Any match with "${name}", please try with a different word`);
      } else {
        return res.status(404).send("Any Recipe found");
      }
    } else {
      return res.status(200).json(recipesFound);
    }
  } catch (error) {
    console.log({ error: error.message });
  }
};
const getIdFromDB = async (id) => {
  try {
    let recipe = await Recipe.findByPk(id, {
      include: {
        model: Diet,
        atributes: ["name"],
        through: {
          attributes: [],
        },
      },
    });
    if (recipe) {
      return {
        id: recipe.id,
        name: recipe.name,
        summary: recipe.summary,
        score: recipe.score,
        health_score: recipe.health_score,
        image: recipe.image,
        steps: recipe.steps,
        diets: recipe.Diets?.map((d) => d.name),
      };
    }
  } catch {
    return { error: `Recipe with Id=${id} not found` };
  }
};
const getIdFromApi = async (id) => {
  try {
    // ====Spoonacular===
    // const axiosRecipe = await axios(
    //   `${SPOONACULAR_URL}/${id}/information?apiKey=${API_KEY}&addRecipeInformation=true`
    // );
    // const recipe = axiosRecipe.data;

    // ====Spoonacular===
    let axiosRecipe = await axios(`${API_FAKE}/${id}`);
    let recipe = axiosRecipe.data;
    // ====Spoonacular===
    // console.log(`Recipeeeeeeeeeeeeeeeee: ${recipe} id: ${id}`);
    if (Object.keys(recipe).length) {
      return {
        vegetarian: recipe.vegetarian,
        vegan: recipe.vegan,
        glutenFree: recipe.glutenFree,
        id: recipe.id,
        name: recipe.title,
        summary: recipe.summary,
        health_score: recipe.healthScore,
        steps:
          recipe.analyzedInstructions[0] &&
          recipe.analyzedInstructions[0].steps?.map((step) => step.step),
        image: recipe.image,
        diets: recipe.diets,
        dishes: recipe.dishTypes,
      };
    }
  } catch (error) {
    return { error: `Recipe with Id=${id} not found` };
  }
};
const getRecipeDetail = async (req, res) => {
  const { id } = req.params;
  // console.log(`Buscando id: ${id} `);
  let recipeDetail = {};
  try {
    if (id.length === 36) recipeDetail = await getIdFromDB(id);
    else recipeDetail = await getIdFromApi(id);
    // console.log(`RECIP EN DETAIL: ${typeof recipeDetail}`);

    if (recipeDetail.error) {
      // console.log(recipeDetail.error);
      res.status(404).send(recipeDetail.error);
    } else {
      res.json(recipeDetail);
    }
  } catch (error) {
    console.log({ error: error.message }); //------------------Considerar más errores
    res.send({ error: error.message });
  }
};

const createRecipe = async (req, res) => {
  const { name, summary, health_score, steps, image, diets } = req.body;
  if (!name) {
    return res.status(400).send("Name is required");
    // return res.status(400).send("Name is required");
  }
  if (!summary) {
    return res.status(400).send("Summary is required");
  }
  if (health_score < 0 || health_score > 100) {
    return res
      .status(400)
      .send("Health Score must be an integer between 0 and 100");
  }
  let existRecipeName = await Recipe.findOne({
    where: { name: { [Op.iLike]: `${name}` } },
  });
  if (existRecipeName === null) existRecipeName = {};
  // console.log("existRecipeName", typeof existRecipeName, existRecipeName);
  if (Object.keys(existRecipeName).length) {
    return res
      .status(401)
      .send(`Recipe "<< ${name} >>" already exist, try with another one`);
  }
  try {
    // console.log("Body: ", req.body);
    console.log("diets:", typeof diets, diets);
    let newRecipe = await Recipe.create({
      name,
      summary,
      health_score: Number(health_score),
      steps,
      image,
    });
    console.log("NewRecipe: ", newRecipe);
    let diets_DB = await Diet.findAll({ where: { name: diets } });
    console.log(diets_DB);
    newRecipe.addDiet(diets_DB);
    if (!Object.keys(newRecipe).length) {
      res
        .status(500)
        .json("Imposible to create Recipe, Please enter valid information"); //----Verificar codigo de status
      //---------Agregar mensaje de error para cada caso----------
    } else {
      res.status(200).send(`Recipe "${newRecipe.name}" succesfully created`);
    }
  } catch (error) {
    console.log(error.message);
    res.status(404).json({ message: error.message });
  }
};

const createDiet = async (req, res) => {
  const predata = [
    { name: "Gluten Free" },
    { name: "Ketogenic" },
    { name: "Vegetarian" },
    { name: "Lacto-Vegetarian" },
    { name: "Ovo-Vegetarian" },
    { name: "Vegan" },
    { name: "Pescetarian" },
    { name: "Paleo" },
    { name: "Primal" },
    { name: "Low FODMAP" },
    { name: "Whole30" },
  ];

  try {
    let ResDieta = await Diet.bulkCreate(predata);

    res.send("Diets created succesfully");
  } catch (error) {
    console.log(error);
  }
};
const getDiets = async (req, res) => {
  try {
    let diets = await Diet.findAll();
    // console.log("Las dietas: desde Controlers", diets);
    if (diets.length === 0) {
      return res.status(404).send("Any Diet found in Database");
    } else {
      return res.status(200).json(diets);
      // res.status(500).json({ message: error.message });
    }
  } catch (error) {
    console.log(error);
    return res.status(404).send({ message: error.message });
  }
};

module.exports = {
  getAllRecipes,
  getRecipeDetail,
  createRecipe,
  getDiets,
  createDiet,
};
