ServerEvents.recipes((event) => {
  addThermoPlant(event, {
    fluidInput: {
      amount: 1000,
      fluid: "oritech:still_oil",
    },
    fluidOutput: {
      amount: 1000,
      id: "pneumaticcraft:oil",
    },
    speed: 1,
    pressure: 0,
  });
  addThermoPlant(event, {
    fluidInput: {
      amount: 1000,
      fluid: "pneumaticcraft:oil",
    },
    fluidOutput: {
      amount: 1000,
      id: "oritech:still_oil",
    },
    speed: 1,
    pressure: 0,
  });
});
