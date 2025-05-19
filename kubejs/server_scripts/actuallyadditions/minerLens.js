// priority: 9999998
ServerEvents.recipes((event) => {
  // removes all mining lens recipes
  event.remove({ type: "actuallyadditions:mining_lens" });

  let ores = Ingredient.of("#c:ores").itemIds;
  let netherOres = [];
  let endOres = [];
  let soulOres = [];
  let basaltOres = [];
  let stoneOres = [];
  let deepOres = [];

  ores.forEach((ore) => {
    if (ore.includes("nether")) {
      netherOres.push(ore);
    } else if (ore.includes("end")) {
      endOres.push(ore);
    } else if (ore.includes("soul")) {
      soulOres.push(ore);
    } else if (ore.includes("basalt")) {
      basaltOres.push(ore);
    } else if (ore.includes("deepslate")) {
      deepOres.push(ore);
    } else {
      stoneOres.push(ore);
    }
  });


  let custom = [
    { id: "minecraft:ancient_debris", base: "#c:netherracks", weight: 200 },
    { id: "bigreactors:benitoite_ore", base: "#c:netherracks", weight: 200 },
    { id: "bigreactors:anglesite_ore", base: "#c:end_stones", weight: 200 },
  ]

  custom.forEach((ore) => {
    event.recipes.actuallyadditions.mining_lens(ore["id"], ore["base"]).weight(ore["weight"])
  })

  stoneOres.forEach((ore) => {
    if (!custom.some((c) => c["id"].includes(String(ore)))) {
      event.recipes.actuallyadditions.mining_lens(ore, "#actuallyadditions:stone_ore_replaceables").weight(200)
    }
  })

  deepOres.forEach((ore) => {
    if (!custom.some((c) => c["id"].includes(String(ore)))) {
      event.recipes.actuallyadditions.mining_lens(ore, "#actuallyadditions:deepslate_ore_replaceables").weight(200)
    }
  })

  basaltOres.forEach((ore) => {
    if (!custom.some((c) => c["id"].includes(String(ore)))) {
      event.recipes.actuallyadditions.mining_lens(ore, "#c:basalt").weight(200)
    }
  })

  soulOres.forEach((ore) => {
    if (!custom.some((c) => c["id"].includes(String(ore)))) {
      event.recipes.actuallyadditions.mining_lens(ore, "#minecraft:soul_fire_base_blocks").weight(200)
    }
  })

  endOres.forEach((ore) => {
    if (!custom.some((c) => c["id"].includes(String(ore)))) {
      event.recipes.actuallyadditions.mining_lens(ore, "#c:end_stones").weight(200)
    }
  })

  netherOres.forEach((ore) => {
    if (!custom.some((c) => c["id"].includes(String(ore)))) {
      event.recipes.actuallyadditions.mining_lens(ore, "#c:netherracks").weight(200)
    }
  })
});
