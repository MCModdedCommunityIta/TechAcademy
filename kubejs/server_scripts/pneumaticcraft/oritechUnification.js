ServerEvents.recipes((event) => {
  addThermoPlant(event, {
    fluidInput: {
      amount: 1000,
      fluid: "oritech:still_oil",
    },
    fluidOutput: 
      {
        amount: 1000,
        id: "pneumaticcraft:oil",
      },
    speed: 1,
    pressure: 0
  });
});
