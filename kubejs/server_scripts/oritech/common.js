// priority: 10000000

/**
 * Adds a centrifuge recipe to the game with specified inputs and outputs.
 *
 * @param {$RecipesKubeEvent} event - The event that triggered the script to run.
 *
 *
 * @param {Object} centrifugeRecipe - The centrifuge recipe object.
 * @param {Object} centrifugeRecipe.itemInput - The item input for the centrifuge recipe.
 * @param {string} centrifugeRecipe.itemInput.item - The item id for the input, defaults to "minecraft:empty".
 *
 * @param {Object} centrifugeRecipe.fluidInput - The fluid input for the centrifuge recipe.
 * @param {string} centrifugeRecipe.fluidInput.fluid - The fluid id for the input, defaults to "minecraft:empty".
 * @param {number} centrifugeRecipe.fluidInput.amount - The amount of fluid input, defaults to 0.
 *
 * @param {Array} centrifugeRecipe.itemsOutput - The list of item outputs for the centrifuge recipe.
 * @param {number} centrifugeRecipe.itemsOutput[].count - The count of the item output, defaults to 1.
 * @param {string} centrifugeRecipe.itemsOutput[].id - The item id for the output, defaults to "minecraft:empty".
 *
 * @param {Object} centrifugeRecipe.fluidOutput - The fluid output for the centrifuge recipe.
 * @param {string} centrifugeRecipe.fluidOutput.fluid - The fluid id for the output, defaults to "minecraft:empty".
 * @param {number} centrifugeRecipe.fluidOutput.amount - The amount of fluid output, defaults to 0.
 *
 * @param {number} centrifugeRecipe.processTime - The processing time for the centrifuge recipe in ticks, defaults to 200.
 * 
 * 
 */
function addCentrifuge(event, centrifugeRecipe) {
  let itemInput = centrifugeRecipe.itemInput ?? null;
  let fluidInput = centrifugeRecipe.fluidInput ?? {
    fluid: "minecraft:empty",
    amount: 0,
  };
  let itemsOutput = centrifugeRecipe.itemsOutput ?? [];
  let fluidOutput = centrifugeRecipe.fluidOutput ?? {
    fluid: "minecraft:empty",
    amount: 0,
  };
  let processTime = centrifugeRecipe.processTime ?? 200;
  let conditions = centrifugeRecipe.conditions ?? [];

  let baseRecipe = {
    "neoforge:conditions": [],
    type: "oritech:centrifuge_fluid",
    fluidInputAmount: 81*fluidInput["amount"],
    fluidInputVariant: fluidInput["fluid"],
    fluidOutputAmount: 81*fluidOutput["amount"],
    fluidOutputVariant: fluidOutput["fluid"],
    ingredients: [],
    results: [],
    time: processTime,
  };

  if (baseRecipe["fluidInputVariant"] == baseRecipe["fluidOutputVariant"] && baseRecipe["fluidOutputVariant"] =="minecraft:empty") {
    baseRecipe["type"] = "oritech:centrifuge";
  }


  if (itemInput != null) baseRecipe["ingredients"].push(itemInput);


  itemsOutput.forEach((item) => {
    baseRecipe["results"].push(item);
  });

  conditions.forEach((item) => {
    baseRecipe["results"].push(item);
  });


  event.custom(baseRecipe);
}
