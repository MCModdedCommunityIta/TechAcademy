ServerEvents.generateData("after_mods", (event) => {
  //Fix Expanded Delight wrong disabled recipe

  event.json("farmersdelight:recipe/melon_juice", {
    "neoforge:conditions": [
      {
        // Inverts the result of the stored condition
        type: "neoforge:not",
        value: {
          type: "neoforge:mod_loaded",
          // Returns true if "examplemod" is loaded
          modid: "farmersdelight",
        },
      },
    ],
    type: "minecraft:crafting_shapeless",
    category: "misc",
    ingredients: [
      {
        item: "minecraft:melon_slice",
      },
      {
        item: "minecraft:melon_slice",
      },
      {
        item: "minecraft:sugar",
      },
      {
        item: "minecraft:melon_slice",
      },
      {
        item: "minecraft:melon_slice",
      },
      {
        item: "minecraft:glass_bottle",
      },
    ],
    result: {
      count: 1,
      id: "farmersdelight:melon_juice",
    },
  });

  event.json("farmersrespite:recipe/brewing/melon_juice_from_water", {
    "neoforge:conditions": [
      {
        type: "neoforge:false",
      },
    ],
    type: "minecraft:crafting_shapeless",
    category: "misc",
    ingredients: [
      {
        item: "minecraft:melon_slice",
      },
      {
        item: "minecraft:melon_slice",
      },
      {
        item: "minecraft:sugar",
      },
      {
        item: "minecraft:melon_slice",
      },
      {
        item: "minecraft:melon_slice",
      },
      {
        item: "minecraft:glass_bottle",
      },
    ],
    result: {
      count: 1,
      id: "farmersdelight:melon_juice",
    },
  });
});
