// priority: 9999998

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
  addCentrifuge(event, {
    fluidInput: {
      fluid: "oritech:still_oil",
      amount: 1000,
    },
    fluidOutput: {
      fluid: "pneumaticcraft:oil",
      amount: 1000,
    },
    processTime: 60,
  });
  addCentrifuge(event, {
    fluidInput: {
      fluid: "bigreactors:steam",
      amount: 1000,
    },
    fluidOutput: {
      fluid: "oritech:still_steam",
      amount: 1000,
    },
    processTime: 60,
  });
  addCentrifuge(event, {
    fluidInput: {
      fluid: "mekanism:steam",
      amount: 1000,
    },
    fluidOutput: {
      fluid: "oritech:still_steam",
      amount: 1000,
    },
    processTime: 60,
  });
  addCentrifuge(event, {
    fluidInput: {
      fluid: "oritech:still_steam",
      amount: 1000,
    },
    fluidOutput: {
      fluid: "bigreactors:steam",
      amount: 1000,
    },
    itemsInput: [{
      item: "bigreactors:graphite_ingot",
    }],
    itemsOutput: [{
      id: "bigreactors:graphite_ingot",
      count: 1,
    }],
    processTime: 60,
  });
  addCentrifuge(event, {
    fluidInput: {
      fluid: "oritech:still_steam",
      amount: 1000,
    },
    fluidOutput: {
      fluid: "mekanism:steam",
      amount: 1000,
    },
    itemsInput: [{
      item: "mekanism:ingot_osmium",
    }],
    itemsOutput: [{
      id: "mekanism:ingot_osmium",
      count: 1,
    }],
    processTime: 60,
  });

});
