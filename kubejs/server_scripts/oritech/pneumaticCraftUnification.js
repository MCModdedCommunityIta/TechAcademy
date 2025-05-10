ServerEvents.recipes((event) => {
  addCentrifuge(event, {
    fluidInput: {
      fluid: "pneumaticcraft:oil",
      amount: 1000,
    },
    fluidOutput: {
      fluid: "oritech:still_oil",
      amount: 1000,
    },
    processTime: 60,
  });

});
