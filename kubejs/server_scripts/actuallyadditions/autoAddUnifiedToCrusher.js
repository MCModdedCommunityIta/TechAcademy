// priority: 9999998
ServerEvents.recipes((event) => {
  const noRawsToDust = [];

  getAtoB("c:raw_materials", "c:dusts").forEach((entry) => {
    if (!noRawsToDust.includes(`${entry["input"]}`.split("/")[1])) {
      event.recipes.actuallyadditions.crushing(
        [
          CrushingResult.of(getTagOutput(entry["output"]).withCount(1), 1),
          CrushingResult.of(getTagOutput(entry["output"]).withCount(1), 0.2),
        ],
        Ingredient.of(`#${entry["input"]}`, 1)
      );
    }
  });

  const noIngotsToDust = [];

  getAtoB("c:ingots", "c:dusts").forEach((entry) => {
    if (!noIngotsToDust.includes(`${entry["input"]}`.split("/")[1])) {
      event.recipes.actuallyadditions.crushing(
        [CrushingResult.of(getTagOutput(entry["output"]).withCount(1), 1)],
        Ingredient.of(`#${entry["input"]}`, 1)
      );
    }
  });

  const noOresToRaw = ["iron", "copper", "gold"];

  getAtoB("c:ores", "c:raw_materials").forEach((entry) => {
    if (!noOresToRaw.includes(`${entry["input"]}`.split("/")[1])) {
      event.recipes.actuallyadditions.crushing(
        [CrushingResult.of(getTagOutput(entry["output"]).withCount(2), 1)],
        Ingredient.of(`#${entry["input"]}`, 1)
      );
    }
  });

  const noOresToGem = ["diamond", "lapis", "quartz", "emerald", "black_quartz"];

  getAtoB("c:ores", "c:gems").forEach((entry) => {
    if (!noOresToGem.includes(`${entry["input"]}`.split("/")[1])) {
      event.recipes.actuallyadditions.crushing(
        [CrushingResult.of(getTagOutput(entry["output"]).withCount(2), 1)],
        Ingredient.of(`#${entry["input"]}`, 1)
      );
    }
  });

  const noGemToDust = ["prismarine"];

  getAtoB("c:gems", "c:dusts").forEach((entry) => {
    if (!noGemToDust.includes(`${entry["input"]}`.split("/")[1])) {
      event.recipes.actuallyadditions.crushing(
        [CrushingResult.of(getTagOutput(entry["output"]).withCount(1), 1)],
        Ingredient.of(`#${entry["input"]}`, 1)
      );
    }
  });

  const notRawsStoragesToDust = [];

  getUnifiedSubTags("c:storage_blocks")
    .filter(
      (entry) =>
        entry.includes("/raw_") &&
        getUnifiedSubTags("c:dusts").some((dust) =>
          dust.includes(String(entry).split("raw_")[1])
        )
    )
    .forEach((entry) => {
      if (!noGemToDust.includes(`${entry}`.split("raw_")[1])) {
        event.recipes.actuallyadditions.crushing(
          [
            CrushingResult.of(
              getTagOutput(
                `c:dusts/${String(entry).split("raw_")[1]}`
              ).withCount(10),
              1
            ),
            CrushingResult.of(
              getTagOutput(
                `c:dusts/${String(entry).split("raw_")[1]}`
              ).withCount(2),
              0.2
            ),
          ],
          Ingredient.of(`#${entry}`, 1)
        );
      }
    });

  // Custom

  event.recipes.actuallyadditions.crushing(
    [
      CrushingResult.of(getTagOutput("c:gems/amethyst").withCount(4), 1),],
    Ingredient.of(`#c:storage_blocks/amethyst`, 1)
  );

  event.recipes.actuallyadditions.crushing(
    [
      CrushingResult.of(getTagOutput("c:dusts/coal").withCount(1), 1),
      CrushingResult.of(getTagOutput("c:dusts/sulfur").withCount(1), 0.1),
    ],
    Ingredient.of(`#c:coal/coal`, 1)
  );

  event.recipes.actuallyadditions.crushing(
    [
      CrushingResult.of(getTagOutput("c:dusts/charcoal").withCount(1), 1),
      CrushingResult.of(getTagOutput("c:dusts/sulfur").withCount(1), 0.1),
    ],
    Ingredient.of(`#c:coal/charcoal`, 1)
  );

  event.recipes.actuallyadditions.crushing(
    [
      CrushingResult.of(getTagOutput("c:dusts/coal_coke").withCount(1), 1),
      CrushingResult.of(getTagOutput("c:dusts/sulfur").withCount(1), 0.1),
    ],
    Ingredient.of(`#c:coal/coal_coke`, 1)
  );

  event.recipes.actuallyadditions.crushing(
    [
      CrushingResult.of(Item.of("create:cinder_flour").withCount(1), 1)],
    Ingredient.of(`#c:netherracks`, 1)
  );

  event.recipes.actuallyadditions.crushing(
    [
      CrushingResult.of(getTagOutput("c:dusts/flour").withCount(1), 1),
      CrushingResult.of(Item.of("minecraft:wheat_seeds").withCount(1), 0.2),
    ],
    Ingredient.of(`#c:crops/wheat`, 1)
  );

  event.recipes.actuallyadditions.crushing(
    [
      CrushingResult.of(getTagOutput("c:dusts/prismarine").withCount(6), 1),
      CrushingResult.of(getTagOutput("c:dusts/prismarine").withCount(2), 0.5),
    ],
    Ingredient.of("minecraft:dark_prismarine", 1)
  );

  event.recipes.actuallyadditions.crushing(
    [
      CrushingResult.of(getTagOutput("c:dusts/prismarine").withCount(7), 1),
      CrushingResult.of(getTagOutput("c:dusts/prismarine").withCount(2), 0.5),
    ],
    Ingredient.of("minecraft:prismarine_bricks", 1)
  );

  event.recipes.actuallyadditions.crushing(
    [
      CrushingResult.of(getTagOutput("c:dusts/prismarine").withCount(2), 1),
      CrushingResult.of(getTagOutput("c:dusts/prismarine").withCount(2), 0.5),
    ],
    Ingredient.of("minecraft:prismarine", 1)
  );

  event.recipes.actuallyadditions.crushing(
    [
      CrushingResult.of(Item.of("minecraft:cobblestone").withCount(1), 1),
      CrushingResult.of(getTagOutput("c:dusts/grains_of_infinity").withCount(1), 0.12),
    ],
    Ingredient.of("minecraft:cobbled_deepslate", 1)
  );
});
