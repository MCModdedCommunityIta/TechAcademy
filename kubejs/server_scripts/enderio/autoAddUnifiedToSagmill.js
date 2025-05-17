// priority: 9999998

// Basato su KubeJS EnderIO: https://www.curseforge.com/minecraft/mc-mods/kubejs-enderio
// Recipes Docs: https://github.com/AlmostReliable/kubejs-enderio/wiki/Recipes060
// (tecnicamente è la documentazione vecchia ma perchè quella nuova non è ancora uscita)

// SagMillOutput (elemento di output per il SagMill) è attualmente senza documentazione,
// il suo utulizzo è esplicato qui:
// https://github.com/AlmostReliable/kubejs-enderio/issues/12#issuecomment-2674632329

ServerEvents.recipes((event) => {
  const noRawsToDust = ["copper", "gold", "iron"];

  getAtoB("c:raw_materials", "c:dusts").forEach((entry) => {
    if (!noRawsToDust.includes(`${entry["input"]}`.split("/")[1])) {
      event.recipes.enderio
        .sag_milling(
          [
            SagMillOutput.of(getTagOutput(entry["output"]).withCount(1), 1),
            SagMillOutput.of(getTagOutput(entry["output"]).withCount(1), 0.25),
          ],
          Ingredient.of(`#${entry["input"]}`, 1)
        )
        .energy(2400);
    }
  });

  const noIngotsToDust = ["iron", "gold"];

  getAtoB("c:ingots", "c:dusts").forEach((entry) => {
    if (!noIngotsToDust.includes(`${entry["input"]}`.split("/")[1])) {
      event.recipes.enderio
        .sag_milling(
          [SagMillOutput.of(getTagOutput(entry["output"]).withCount(1), 1)],
          Ingredient.of(`#${entry["input"]}`, 1)
        )
        .energy(2400)
        .bonus(SagMillBonus.NONE);
    }
  });

  const noOresToRaw = ["copper", "gold", "iron"];

  getAtoB("c:ores", "c:raw_materials").forEach((entry) => {
    if (!noOresToRaw.includes(`${entry["input"]}`.split("/")[1])) {
      event.recipes.enderio
        .sag_milling(
          [
            SagMillOutput.of(getTagOutput(entry["output"]).withCount(1), 1),
            SagMillOutput.of(getTagOutput(entry["output"]).withCount(1), 0.33),
            SagMillOutput.of(`minecraft:cobblestone`, 0.15),
          ],
          Ingredient.of(`#${entry["input"]}`, 1)
        )
        .energy(2400);
    }
  });

  const noOresToGem = ["diamond", "lapis", "quartz", "emerald"];

  getAtoB("c:ores", "c:gems").forEach((entry) => {
    if (!noOresToGem.includes(`${entry["input"]}`.split("/")[1])) {
      event.recipes.enderio
        .sag_milling(
          [
            SagMillOutput.of(getTagOutput(entry["output"]).withCount(2), 1),
            SagMillOutput.of(getTagOutput(entry["output"]).withCount(1), 0.33),
            SagMillOutput.of(`minecraft:cobblestone`, 0.15),
          ],
          Ingredient.of(`#${entry["input"]}`, 1)
        )
        .energy(2400);
    }
  });

  const noGemToDust = [
    "lapis",
    "quartz",
    "prismarine",
    "pulsanting_crystal",
    "vibrant_crystal",
    "ender_crystal",
    "prescient_crystal",
  ];

  getAtoB("c:gems", "c:dusts").forEach((entry) => {
    if (!noGemToDust.includes(`${entry["input"]}`.split("/")[1])) {
      event.recipes.enderio
        .sag_milling(
          [SagMillOutput.of(getTagOutput(entry["output"]).withCount(1), 1)],
          Ingredient.of(`#${entry["input"]}`, 1)
        )
        .energy(2400)
        .bonus(SagMillBonus.NONE);
    }
  });

  // Custom

  event.recipes.enderio
    .sag_milling(
      [SagMillOutput.of(getTagOutput("c:gems/amethyst").withCount(4), 1)],
      Ingredient.of(`#c:storage_blocks/amethyst`, 1)
    )
    .energy(2400)
    .bonus(SagMillBonus.NONE);

  event.recipes.enderio
    .sag_milling(
      [
        SagMillOutput.of(getTagOutput("c:dusts/charcoal").withCount(1), 1),
        SagMillOutput.of(getTagOutput("c:dusts/charcoal").withCount(1), 0.1),
        SagMillOutput.of(getTagOutput("c:dusts/sulfur").withCount(1), 0.1)
      ],
      Ingredient.of(`#c:coal/charcoal`, 1)
    )
    .energy(2400);

  event.recipes.enderio
    .sag_milling(
      [
        SagMillOutput.of(getTagOutput("c:dusts/coal_coke").withCount(1), 1),
        SagMillOutput.of(getTagOutput("c:dusts/coal_coke").withCount(1), 0.1),
        SagMillOutput.of(getTagOutput("c:dusts/sulfur").withCount(1), 0.1)
      ],
      Ingredient.of(`#c:coal/coal_coke`, 1)
    )
    .energy(2400);

  event.remove({ id: "enderio:sag_milling/coal" })
  event.recipes.enderio
    .sag_milling(
      [
        SagMillOutput.of(getTagOutput("c:dusts/coal").withCount(1), 1),
        SagMillOutput.of(getTagOutput("c:dusts/coal").withCount(1), 0.1),
        SagMillOutput.of(getTagOutput("c:dusts/sulfur").withCount(1), 0.1)
      ],
      Ingredient.of(`#c:coal/coal`, 1)
    )
    .energy(2400);

  event.recipes.enderio
    .sag_milling(
      [
        SagMillOutput.of(Item.of("create:cinder_flour").withCount(1), 1),
        SagMillOutput.of(Item.of("create:cinder_flour").withCount(1), 0.5),
      ],
      Ingredient.of("#c:netherracks", 1)
    )
    .energy(2400);

  event.recipes.enderio
    .sag_milling(
      [
        SagMillOutput.of(getTagOutput("c:dusts/prismarine").withCount(6), 1),
        SagMillOutput.of(getTagOutput("c:dusts/prismarine").withCount(2), 0.5),
      ],
      Ingredient.of("minecraft:dark_prismarine", 1)
    )
    .energy(2400);

  event.recipes.enderio
    .sag_milling(
      [
        SagMillOutput.of(getTagOutput("c:dusts/prismarine").withCount(7), 1),
        SagMillOutput.of(getTagOutput("c:dusts/prismarine").withCount(2), 0.5),
      ],
      Ingredient.of("minecraft:prismarine_bricks", 1)
    )
    .energy(2400);

  event.recipes.enderio
    .sag_milling(
      [
        SagMillOutput.of(getTagOutput("c:dusts/prismarine").withCount(2), 1),
        SagMillOutput.of(getTagOutput("c:dusts/prismarine").withCount(2), 0.5),
      ],
      Ingredient.of("minecraft:prismarine", 1)
    )
    .energy(2400);

});
