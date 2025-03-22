

StartupEvents.registry('block', event => {
  const blocchiDaSostituire = [
    "railcraft:deepslate_silver_ore",
    "railcraft:deepslate_nickel_ore",
    "railcraft:deepslate_tin_ore",
    "railcraft:deepslate_zinc_ore",
    "railcraft:deepslate_lead_ore",
    "railcraft:nickel_ore",
    "railcraft:deepslate_sulfur_ore",
    "railcraft:zinc_ore",
    "railcraft:sulfur_ore",
    "railcraft:silver_ore",
    "railcraft:tin_ore",
    "railcraft:lead_ore",
    "railcraft:saltpeter_ore",
    "railcraft:minecart_rolling_stock",
    "railcraft:quarried_stone"
  ];

  blocchiDaSostituire.forEach(bid => {
    event.create(bid)
    .noDrops()
    .displayName("Fixing Stone - NoDrops")
    .hardness(0.0)
    .resistance(0.0)
    .texture(Direction.DOWN, "minecraft:block/stone")
    .texture(Direction.UP, "minecraft:block/stone")
    .texture(Direction.NORTH, "minecraft:block/stone")
    .texture(Direction.SOUTH, "minecraft:block/stone")
    .texture(Direction.WEST, "minecraft:block/stone")
    .texture(Direction.EAST, "minecraft:block/stone")
    .texture("particle", "minecraft:block/stone")
    .noItem();

  })

});