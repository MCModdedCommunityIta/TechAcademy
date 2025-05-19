ServerEvents.recipes((event) => {
  var BreakException = {};

  try {
    Ingredient.of("#c:plates/brass").itemIds.forEach((id) => {
      event.shapeless(Item.of(id), [
        Ingredient.of("#c:ingots/brass"),
        Ingredient.of("immersiveengineering:hammer"),
      ]);
      throw BreakException;
    });
  } catch (e) {
    if (e !== BreakException) throw e;
  }

  event.custom({
    "neoforge:conditions": [
      {
          type: "neoforge:and",
          values: [
            {
              type: "neoforge:item_exists",
              item: "pneumaticcraft:etching_acid_bucket",
            },
            {
              type: "neoforge:item_exists",
              item: "pneumaticcraft:plastic_bucket",
            },
          ],
        },
    ],
    type: "immersiveengineering:mixer",
    energy: 1600,
    fluid: {
      amount: 1000,
      tag: "pneumaticcraft:plastic",
    },
    inputs: [
      {
        basePredicate: {
          tag: "c:gunpowders",
        },
        count: 2,
      },
      {
        basePredicate: {
          item: "minecraft:rotten_flesh",
        },
        count: 2,
      },
      {
        basePredicate: {
          item: "minecraft:spider_eye",
        },
        count: 2,
      },
    ],
    result: {
      amount: 1000,
      id: "pneumaticcraft:etching_acid",
    },
  });
});
