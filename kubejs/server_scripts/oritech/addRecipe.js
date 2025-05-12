// priority: 9999998

ServerEvents.recipes((event) => {
  addCooler(event, {
    fluidInput: {
      fluid: "minecraft:lava",
      amount: 1000,
    },
    itemsOutput: [{
      id: "obsidian",
      count : 1
    }]
  });

});