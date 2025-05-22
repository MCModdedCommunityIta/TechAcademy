const bno_dir = "bno:neoforge/biome_modifier/";

ServerEvents.generateData("after_mods", (event) => {
  const ores = [
    "ore_aluminum_nether",
    "ore_lead_nether",
    "ore_nickel_nether",
    "ore_osmium_nether",
    "ore_silver_nether",
    "ore_tin_nether",
    "ore_uranium_nether",
    "ore_zinc_nether",
  ];
  ores.forEach((ore) => {
    event.json(bno_dir + ore, {
      type: "neoforge:add_features",
      biomes: "#minecraft:is_nether",
      features: `bno:${ore}`,
      step: "underground_ores",
    });
  });
});
