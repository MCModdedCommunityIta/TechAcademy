// priority: 10000000

// /**
//  * Generates a unique recipe id from a given baseRecipe.
//  *
//  * The generated id is a concatenation of the baseRecipe type, fluid input/output variants, result item id, and ingredient item/tag id.
//  *
//  * @param {Object} baseRecipe - The baseRecipe object.
//  * @return {string} The generated recipe id.
//  */
// function recipeIdHelper(baseRecipe) {
//   let recipeIdComponents = [
//     baseRecipe["type"].replace(/:/g, "/"),
//     baseRecipe["fluidInputAmount"] > 0 ? baseRecipe["fluidInputVariant"] : "",
//     baseRecipe["fluidOutputAmount"] > 0 ? baseRecipe["fluidOutputVariant"] : "",
//     baseRecipe["results"].length == 1 ? baseRecipe["results"][0].id : "",
//     baseRecipe["ingredients"].length == 1 && "item" in baseRecipe["ingredients"][0] ? baseRecipe["ingredients"][0]["item"] : "",
//     baseRecipe["ingredients"].length == 1 && "tag" in baseRecipe["ingredients"][0] ? baseRecipe["ingredients"][0]["tag"] : "",
//   ];

//   let recipeId = recipeIdComponents[0]+"/";

//   for (let i = 1; i < recipeIdComponents.length; i++) {
//     if (recipeIdComponents[i] != "" && i < recipeIdComponents.length && i<=1)
//       recipeId = recipeId + "_";
//     recipeId = recipeId + String(recipeIdComponents[i]);
//   }

//   recipeId = recipeId.replace(/:/g, "_").replace(/#/g, "_").replace(/\/_/g, "/");

//   return recipeId;
// }

/**
 * Adds a centrifuge recipe to the game with specified inputs and outputs.
 *
 * @param {$RecipesKubeEvent} event - The event that triggered the script to run.
 *
 * @param {Object} centrifugeRecipe - The centrifuge recipe object.
 * @param {Object} centrifugeRecipe.itemsInput - The item input for the centrifuge recipe.
 * @param {string} centrifugeRecipe.itemsInput[].item - The item id for the input, defaults to "minecraft:empty".
 *
 * @param {Object} centrifugeRecipe.fluidInput - The fluid input for the centrifuge recipe.
 * @param {string} centrifugeRecipe.fluidInput.fluid - The fluid id for the input, defaults to "minecraft:empty".
 * @param {number} centrifugeRecipe.fluidInput.amount - The amount of fluid input, defaults to 0.
 *
 * @param {Array} centrifugeRecipe.itemsOutput - The list of item outputs for the centrifuge recipe.
 * @param {string} centrifugeRecipe.itemsOutput[].id - The item id for the output, defaults to "minecraft:empty".
 * @param {number} centrifugeRecipe.itemsOutput[].count - The count of the item output, defaults to 1.
 *
 * @param {Object} centrifugeRecipe.fluidOutput - The fluid output for the centrifuge recipe.
 * @param {string} centrifugeRecipe.fluidOutput.fluid - The fluid id for the output, defaults to "minecraft:empty".
 * @param {number} centrifugeRecipe.fluidOutput.amount - The amount of fluid output, defaults to 0.
 *
 * @param {number} centrifugeRecipe.processTime - The processing time for the centrifuge recipe in ticks, defaults to 200.
 * 
 * @return {$KubeRecipe} The centrifuge recipe.
 * 
 */
function addCentrifuge(event, centrifugeRecipe) {
  let itemsInput = "itemsInput" in centrifugeRecipe ? centrifugeRecipe.itemsInput : [];
  let itemsOutput = "itemsOutput" in centrifugeRecipe ? centrifugeRecipe.itemsOutput : [];
  let fluidInput = "fluidInput" in centrifugeRecipe ? {"amount": centrifugeRecipe.fluidInput["amount"]*81, "fluid": centrifugeRecipe.fluidInput["fluid"]} : { fluid: "minecraft:empty", amount: 0 };
  let fluidOutput = "fluidOutput" in centrifugeRecipe ? {"amount": centrifugeRecipe.fluidOutput["amount"]*81, "fluid": centrifugeRecipe.fluidOutput["fluid"]} : { fluid: "minecraft:empty", amount: 0 };
  let processTime = "processTime" in centrifugeRecipe ? centrifugeRecipe.processTime : 200;
  let conditions = "conditions" in centrifugeRecipe ? centrifugeRecipe.conditions : [];

  let baseRecipe = {
    "neoforge:conditions": [],
    "type": "oritech:centrifuge_fluid",
    "fluidInputAmount": 0,
    "fluidInputVariant": "minecraft:empty",
    "fluidOutputAmount": 0,
    "fluidOutputVariant": "minecraft:empty",
    "ingredients": [],
    "results": [],
    "time": 200,
  };


  baseRecipe["fluidInputAmount"] = fluidInput["amount"];
  baseRecipe["fluidInputVariant"] = fluidInput["fluid"];
  baseRecipe["fluidOutputAmount"] = fluidOutput["amount"];
  baseRecipe["fluidOutputVariant"] = fluidOutput["fluid"];

  if (baseRecipe["fluidInputVariant"] == baseRecipe["fluidOutputVariant"] && baseRecipe["fluidOutputVariant"] =="minecraft:empty") {
    baseRecipe["type"] = "oritech:centrifuge";
  }

  itemsInput.forEach((item) => {
    baseRecipe["ingredients"].push(item);
  });

  itemsOutput.forEach((item) => {
    baseRecipe["results"].push(item);
  });

  conditions.forEach((item) => {
    baseRecipe["neoforge:conditions"].push(item);
  });

  baseRecipe["time"] = processTime;


  return event.custom(baseRecipe)
}


/**
 * Adds a pulverizer recipe to the game with specified material and target item.
 *
 * @param {$RecipesKubeEvent} event - The event that triggered the script to run.
 * @param {Object} pulverizerRecipe - The pulverizer recipe object.
 * @param {Object} pulverizerRecipe.itemsInput - The item input for the pulverizer recipe.
 * @param {string} pulverizerRecipe.itemsInput[].item - The item id for the pulverizer input, defaults to "minecraft:empty".
 * @param {string} pulverizerRecipe.itemsInput[].tag - The material tag for the pulverizer input, defaults to "default_material".
 * @param {Object} pulverizerRecipe.itemsOutput - The target item for the pulverizer output.
 * @param {string} pulverizerRecipe.itemsOutput[].id - The item id for the output, defaults to "minecraft:empty".
 * @param {number} pulverizerRecipe.itemsOutput[].count - The count of the item output, defaults to 1.
 * @param {number} pulverizerRecipe.processTime - The processing time for the pulverizer recipe in ticks, defaults to 200.
 * @param {Object} pulverizerRecipe.conditions - The conditions for the pulverizer recipe.
 * 
 * @return {$KubeRecipe} The pulverizer recipe.
 * 
 */
function addPulverizer(event, pulverizerRecipe) {
  let itemsInput = "itemsInput" in pulverizerRecipe ? pulverizerRecipe.itemsInput : {};
  let itemsOutput = "itemsOutput" in pulverizerRecipe ? pulverizerRecipe.itemsOutput : [];
  let processTime = "processTime" in pulverizerRecipe ? pulverizerRecipe.processTime : 200;
  let conditions = "conditions" in pulverizerRecipe ? pulverizerRecipe.conditions : [];


  let baseRecipe = {
    "neoforge:conditions": [],
    "type": "oritech:pulverizer",
    "fluidInputAmount": 0,
    "fluidInputVariant": "minecraft:empty",
    "fluidOutputAmount": 0,
    "fluidOutputVariant": "minecraft:empty",
    "ingredients": [],
    "results": [],
    "time": 200,
  };

  itemsInput.forEach((item) => {
    baseRecipe["ingredients"].push(item);
  })
  itemsOutput.forEach((item) => {
    baseRecipe["results"].push(item);
  })

  conditions.forEach((item) => {
    baseRecipe["neoforge:conditions"].push(item);
  });

  baseRecipe["time"] = processTime;


  return event.custom(baseRecipe)
}



/**
 * Adds a fragmentForge recipe to the game with specified material and target item.
 *
 * @param {$RecipesKubeEvent} event - The event that triggered the script to run.
 * @param {Object} fragmentForgeRecipe - The fragmentForge recipe object.
 * @param {Object} fragmentForgeRecipe.itemsInput - The item input for the fragmentForge recipe.
 * @param {string} fragmentForgeRecipe.itemsInput[].item - The item id for the fragmentForge input, defaults to "minecraft:empty".
 * @param {string} fragmentForgeRecipe.itemsInput[].tag - The material tag for the fragmentForge input, defaults to "default_material".
 * @param {Object} fragmentForgeRecipe.itemsOutput - The target item for the fragmentForge output.
 * @param {string} fragmentForgeRecipe.itemsOutput[].id - The item id for the output, defaults to "minecraft:empty".
 * @param {number} fragmentForgeRecipe.itemsOutput[].count - The count of the item output, defaults to 1.
 * @param {number} fragmentForgeRecipe.processTime - The processing time for the fragmentForge recipe in ticks, defaults to 200.
 * @param {Object} fragmentForgeRecipe.conditions - The conditions for the fragmentForge recipe.
 * 
 * @return {$KubeRecipe} The fragmentForge recipe.
 * 
 */
function addFragmentForge(event, fragmentForgeRecipe) {
  let itemsInput = "itemsInput" in fragmentForgeRecipe ? fragmentForgeRecipe.itemsInput : {};
  let itemsOutput = "itemsOutput" in fragmentForgeRecipe ? fragmentForgeRecipe.itemsOutput : [];
  let processTime = "processTime" in fragmentForgeRecipe ? fragmentForgeRecipe.processTime : 140;
  let conditions = "conditions" in fragmentForgeRecipe ? fragmentForgeRecipe.conditions : [];

  let baseRecipe = {
    "neoforge:conditions": [],
    "type": "oritech:grinder",
    "fluidInputAmount": 0,
    "fluidInputVariant": "minecraft:empty",
    "fluidOutputAmount": 0,
    "fluidOutputVariant": "minecraft:empty",
    "ingredients": [],
    "results": [],
    "time": 140,
  };

  itemsInput.forEach((item) => {
    baseRecipe["ingredients"].push(item);
  })

  itemsOutput.forEach((item) => {
    baseRecipe["results"].push(item);
  })

  conditions.forEach((item) => {
    baseRecipe["neoforge:conditions"].push(item);
  });

  baseRecipe["time"] = processTime;

  return event.custom(baseRecipe)
}



/**
 * Adds an atomicForge recipe to the game with specified material and target item.
 *
 * @param {$RecipesKubeEvent} event - The event that triggered the script to run.
 * @param {Object} atomicForgeRecipe - The atomicForge recipe object.
 * @param {Object} atomicForgeRecipe.itemsInput - The item input for the atomicForge recipe.
 * @param {string} atomicForgeRecipe.itemsInput[].item - The item id for the atomicForge input, defaults to "minecraft:empty".
 * @param {string} atomicForgeRecipe.itemsInput[].tag - The material tag for the atomicForge input, defaults to "default_material".
 * @param {Object} atomicForgeRecipe.itemsOutput - The target item for the atomicForge output.
 * @param {string} atomicForgeRecipe.itemsOutput[].id - The item id for the output, defaults to "minecraft:empty".
 * @param {number} atomicForgeRecipe.itemsOutput[].count - The count of the item output, defaults to 1.
 * @param {number} atomicForgeRecipe.processTime - The processing time for the atomicForge recipe in ticks, defaults to 200.
 * @param {Object} atomicForgeRecipe.conditions - The conditions for the atomicForge recipe.
 * 
 * @return {$KubeRecipe} The atomicForge recipe.
 * 
 */
function addAtomicForge(event, atomicForgeRecipe) {
  let itemsInput = "itemsInput" in atomicForgeRecipe ? atomicForgeRecipe.itemsInput : [];
  let itemsOutput = "itemsOutput" in atomicForgeRecipe ? atomicForgeRecipe.itemsOutput : {};
  let processTime = "processTime" in atomicForgeRecipe ? atomicForgeRecipe.processTime : 200;
  let conditions = "conditions" in atomicForgeRecipe ? atomicForgeRecipe.conditions : [];

  let baseRecipe = {
    "neoforge:conditions": [],
    "type": "oritech:atomic_forge",
    "fluidInputAmount": 0,
    "fluidInputVariant": "minecraft:empty",
    "fluidOutputAmount": 0,
    "fluidOutputVariant": "minecraft:empty",
    "ingredients": [],
    "results": [],
    "time": 200,
  };


//   {
//   "type": "oritech:atomic_forge",
//   "fluidInputAmount": 0,
//   "fluidInputVariant": "minecraft:empty",
//   "fluidOutputAmount": 0,
//   "fluidOutputVariant": "minecraft:empty",
//   "ingredients": [
//     {
//       "item": "oritech:copper_gem"
//     },
//     {
//       "item": "oritech:fluxite"
//     },
//     {
//       "item": "oritech:fluxite"
//     }
//   ],
//   "results": [
//     {
//       "count": 2,
//       "id": "oritech:copper_dust"
//     }
//   ],
//   "time": 20
//  }

  itemsInput.forEach((item) => {
    baseRecipe["ingredients"].push(item);
  })

  itemsOutput.forEach((item) => {
    baseRecipe["results"].push(item);
  })

  conditions.forEach((item) => {
    baseRecipe["neoforge:conditions"].push(item);
  });

  baseRecipe["time"] = processTime;

  return event.custom(baseRecipe)
}

/**
 * Adds a foundry recipe to the game with specified material and target item.
 *
 * @param {$RecipesKubeEvent} event - The event that triggered the script to run.
 * @param {Object} foundryRecipe - The foundry recipe object.
 * @param {Object} foundryRecipe.itemsInput - The item input for the foundry recipe.
 * @param {string} foundryRecipe.itemsInput[].item - The item id for the foundry input, defaults to "minecraft:empty".
 * @param {string} foundryRecipe.itemsInput[].tag - The material tag for the foundry input, defaults to "default_material".
 * @param {Object} foundryRecipe.itemsOutput - The target item for the foundry output.
 * @param {string} foundryRecipe.itemsOutput[].id - The item id for the output, defaults to "minecraft:empty".
 * @param {number} foundryRecipe.itemsOutput[].count - The count of the item output, defaults to 1.
 * @param {number} foundryRecipe.processTime - The processing time for the foundry recipe in ticks, defaults to 200.
 * 
 * @return {$KubeRecipe} The foundry recipe.
 * 
 * 
 */
function addFoundry(event, foundryRecipe) {
  let itemsInput = "itemsInput" in foundryRecipe ? foundryRecipe.itemsInput : [];
  let itemsOutput = "itemsOutput" in foundryRecipe ? foundryRecipe.itemsOutput : {};
  let processTime = "processTime" in foundryRecipe ? foundryRecipe.processTime : 200;
  let conditions = "conditions" in foundryRecipe ? foundryRecipe.conditions : [];

  let baseRecipe = {
    "neoforge:conditions": [],
    "type": "oritech:foundry",
    "fluidInputAmount": 0,
    "fluidInputVariant": "minecraft:empty",
    "fluidOutputAmount": 0,
    "fluidOutputVariant": "minecraft:empty",
    "ingredients": [],
    "results": [],
    "time": 200,
  };

// {
//   "type": "oritech:foundry",
//   "fluidInputAmount": 0,
//   "fluidInputVariant": "minecraft:empty",
//   "fluidOutputAmount": 0,
//   "fluidOutputVariant": "minecraft:empty",
//   "ingredients": [
//     {
//       "item": "oritech:copper_gem"
//     },
//     {
//       "item": "oritech:copper_gem"
//     }
//   ],
//   "results": [
//     {
//       "count": 3,
//       "id": "minecraft:copper_ingot"
//     }
//   ],
//   "time": 200
// }

  itemsInput.forEach((item) => {
    baseRecipe["ingredients"].push(item);
  })

  itemsOutput.forEach((item) => {
    baseRecipe["results"].push(item);
  })

  conditions.forEach((item) => {
    baseRecipe["neoforge:conditions"].push(item);
  });

  baseRecipe["time"] = processTime;


  return event.custom(baseRecipe)
}


/**
 * Adds an assembler recipe to the game with specified material and target item.
 *
 * @param {$RecipesKubeEvent} event - The event that triggered the script to run.
 * @param {Object} assemblerRecipe - The assembler recipe object.
 * @param {Object} assemblerRecipe.itemsInput - The item input for the assembler recipe.
 * @param {string} assemblerRecipe.itemsInput[].item - The item id for the assembler input, defaults to "minecraft:empty".
 * @param {string} assemblerRecipe.itemsInput[].tag - The material tag for the assembler input, defaults to "default_material".
 * @param {Object} assemblerRecipe.itemsOutput - The target item for the assembler output.
 * @param {string} assemblerRecipe.itemsOutput[].id - The item id for the output, defaults to "minecraft:empty".
 * @param {number} assemblerRecipe.itemsOutput[].count - The count of the item output, defaults to 1.
 * @param {number} assemblerRecipe.processTime - The processing time for the assembler recipe in ticks, defaults to 200.
 * 
 * @return {$KubeRecipe} The assembler recipe.
 * 
 * 
 */
function addAssembler(event, assemblerRecipe) {
  let itemsInput = "itemsInput" in assemblerRecipe ? assemblerRecipe.itemsInput : [];
  let itemsOutput = "itemsOutput" in assemblerRecipe ? assemblerRecipe.itemsOutput : {};
  let processTime = "processTime" in assemblerRecipe ? assemblerRecipe.processTime : 140;
  let conditions = "conditions" in assemblerRecipe ? assemblerRecipe.conditions : [];

  let baseRecipe = {
    "neoforge:conditions": [],
    "type": "oritech:assembler",
    "fluidInputAmount": 0,
    "fluidInputVariant": "minecraft:empty",
    "fluidOutputAmount": 0,
    "fluidOutputVariant": "minecraft:empty",
    "ingredients": [],
    "results": [],
    "time": 140,
  };

  // {
//   "type": "oritech:assembler",
//   "fluidInputAmount": 0,
//   "fluidInputVariant": "minecraft:empty",
//   "fluidOutputAmount": 0,
//   "fluidOutputVariant": "minecraft:empty",
//   "ingredients": [
//     {
//       "item": "oritech:adamant_ingot"
//     },
//     {
//       "tag": "c:carbon_fibre"
//     },
//     {
//       "item": "oritech:enderic_compound"
//     },
//     {
//       "item": "oritech:enderic_compound"
//     }
//   ],
//   "results": [
//     {
//       "count": 1,
//       "id": "oritech:enderic_lens"
//     }
//   ],
//   "time": 240
// }

  itemsInput.forEach((item) => {
    baseRecipe["ingredients"].push(item);
  })

  itemsOutput.forEach((item) => {
    baseRecipe["results"].push(item);
  })

  conditions.forEach((item) => {
    baseRecipe["neoforge:conditions"].push(item);
  });

  baseRecipe["time"] = processTime;

  return event.custom(baseRecipe)
}



/**
 * Adds a cooler recipe to the game with specified inputs and outputs.
 *
 * @param {$RecipesKubeEvent} event - The event that triggered the script to run.
 * @param {Object} coolerRecipe - The cooler recipe object.
 * @param {Object} coolerRecipe.fluidInput - The fluid input for the cooler recipe.
 * @param {string} coolerRecipe.fluidInput.fluid - The fluid id for the input, defaults to "minecraft:empty".
 * @param {number} coolerRecipe.fluidInput.amount - The amount of fluid input, defaults to 0.
 *
 * @param {Array} coolerRecipe.itemsOutput - The list of item outputs for the cooler recipe.
 * @param {string} coolerRecipe.itemsOutput[].id - The item id for the output, defaults to "minecraft:empty".
 * @param {number} coolerRecipe.itemsOutput[].count - The count of the item output, defaults to 1.
 *
 * @param {number} coolerRecipe.processTime - The processing time for the cooler recipe in ticks, defaults to 200.
 * 
 * @return {$KubeRecipe} The cooler recipe.
 * 
 */
function addCooler(event, coolerRecipe) {
  let fluidInput = "fluidInput" in coolerRecipe ? {"amount": coolerRecipe.fluidInput["amount"]*81, "fluid": coolerRecipe.fluidInput["fluid"]} : { fluid: "minecraft:empty", amount: 0 };
  let itemsOutput = "itemsOutput" in coolerRecipe ? coolerRecipe.itemsOutput : [];
  let processTime = "processTime" in coolerRecipe ? coolerRecipe.processTime : 200;
  let conditions = "conditions" in coolerRecipe ? coolerRecipe.conditions : [];

  let baseRecipe = {
    "neoforge:conditions": [],
    "type": "oritech:cooler",
    "fluidInputAmount": 0,
    "fluidInputVariant": "minecraft:empty",
    "fluidOutputAmount": 0,
    "fluidOutputVariant": "minecraft:empty",
    "ingredients": [],
    "results": [],
    "time": 200,
  };

  // {
  //   "type": "oritech:cooler",
  //   "fluidInputAmount": 81000,
  //   "fluidInputVariant": "oritech:still_steam",
  //   "fluidOutputAmount": 0,
  //   "fluidOutputVariant": "minecraft:empty",
  //   "ingredients": [],
  //   "results": [
  //     {
  //       "count": 3,
  //       "id": "minecraft:snow_block"
  //     }
  //   ],
  //   "time": 200
  // }

  baseRecipe["fluidInputAmount"] = fluidInput.amount;
  baseRecipe["fluidInputVariant"] = fluidInput.fluid;

  itemsOutput.forEach((item) => {
    baseRecipe["results"].push(item);
  })

  conditions.forEach((item) => {
    baseRecipe["neoforge:conditions"].push(item);
  });

  baseRecipe["time"] = processTime;

  return event.custom(baseRecipe)
}

