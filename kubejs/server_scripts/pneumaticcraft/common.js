// priority: 10000000
function addRefinery(event, centrifugeRecipe) {
  let fluidInput = centrifugeRecipe.fluidInput ?? {};
  let fluidOutput = centrifugeRecipe.fluidOutput ?? [];
  let minTemperature = Math.floor(centrifugeRecipe.minTemperature) ?? Math.floor(30);
  let maxTemperature = Math.floor(centrifugeRecipe.maxTemperature) ?? NaN;

  let baseRecipe = {
  "type": "pneumaticcraft:refinery",
  "input": {},
  "outputs": [],
  "temperature": {}
};


  // "type": "pneumaticcraft:refinery",
  // "input": {
  //   "amount": 10,
  //   "tag": "c:fuels/crude_oil"
  // },
  // "outputs": [
  //   {
  //     "amount": 4,
  //     "id": "pneumaticcraft:diesel"
  //   }
  // ],
  // "temperature": {
  //   "min": 373
  // }


  baseRecipe["input"]=fluidInput;
  baseRecipe["temperature"]["min"]=minTemperature;
  if (maxTemperature != NaN) {
    baseRecipe["temperature"]["max"] = maxTemperature;
  }

  fluidOutput.forEach((item) => {
    baseRecipe["outputs"].push(item);
  });


  console.error(baseRecipe)

  event.custom(baseRecipe);
}

function addThermoPlant(event, centrifugeRecipe) {
  let itemInput = centrifugeRecipe.itemInput ?? {};
  let itemOutput = centrifugeRecipe.itemOutput ?? {};
  let fluidInput = centrifugeRecipe.fluidInput ?? {};
  let fluidOutput = centrifugeRecipe.fluidOutput ?? {};
  let pressure = centrifugeRecipe.pressure ?? 0;
  let speed = centrifugeRecipe.speed ?? 1;
  let minTemperature = centrifugeRecipe.minTemperature ?? NaN;
  let maxTemperature = centrifugeRecipe.maxTemperature ?? NaN;

  let baseRecipe = {
  "type": "pneumaticcraft:thermo_plant",
  "inputs": {},
  "outputs": {},
  "pressure": 2.0,
  "speed": 1,
};


  // {
  //   "type": "pneumaticcraft:thermo_plant",
  //   "inputs": {
  //     "fluid": {
  //       "amount": 1000,
  //       "fluid": "minecraft:water"
  //     },
  //     "item": {
  //       "tag": "c:mushrooms"
  //     }
  //   },
  //   "outputs": {
  //     "item_output": {
  //       "count": 4,
  //       "id": "pneumaticcraft:chips"
  //     },
  //     "fluid_output": {
  //       "amount": 250,
  //       "id": "pneumaticcraft:yeast_culture"
  //     }
  //   },
  //   "pressure": 2.0,
  //   "speed": 0.1,
  //   "temperature": {
  //     "max": 333,
  //     "min": 303
  //   }
  // }

  if (Object.keys(fluidInput).length > 0) {
    baseRecipe["inputs"]["fluid"] = fluidInput;
  }
  if (Object.keys(itemInput).length > 0) {
    baseRecipe["inputs"]["item"] = itemInput;
  }
  if (Object.keys(fluidOutput).length > 0) {
    baseRecipe["outputs"]["fluid_output"] = fluidOutput;
  }
  if (Object.keys(itemOutput).length > 0) {
    baseRecipe["outputs"]["item_output"] = itemOutput;
  }

  baseRecipe["pressure"]=pressure;
  baseRecipe["speed"]=speed;

  if (minTemperature != NaN) {
    baseRecipe["temperature"]["min"] = minTemperature;
  }
  if (maxTemperature != NaN) {
    baseRecipe["temperature"]["max"] = maxTemperature;
  }

  event.custom(baseRecipe);
}
