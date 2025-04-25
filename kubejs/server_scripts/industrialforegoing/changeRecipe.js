ServerEvents.recipes(event => {
  
  event.remove({ id: "industrialforegoing:dissolution_chamber/xp_bottles" });
  event.custom({
    "neoforge:conditions": [
      {
        type: "neoforge:item_exists",
        item: "minecraft:experience_bottle",
      },
    ],
    type: "industrialforegoing:dissolution_chamber",
    input: [
      {
        item: "minecraft:glass_bottle",
      },
    ],
    inputFluid: {
      amount: 250,
      tag: "c:experience",
    },
    output: {
      count: 1,
      id: "minecraft:experience_bottle",
    },
    processingTime: 5,
  });

})
