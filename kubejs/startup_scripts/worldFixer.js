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

// Test soluzione alternativa

// let ResourceLocation = Java.loadClass("net.minecraft.resources.ResourceLocation");
// let DeferredRegister = Java.loadClass('net.neoforged.neoforge.registries.DeferredRegister');
// let BuiltInRegistries = Java.loadClass('net.minecraft.core.registries.BuiltInRegistries');
// let StringClass = Java.loadClass("java.lang.String");
// // Nome della mod (modifica con il tuo namespace)
// let MODID = "railcraft"; 

// let blockRegistryKey = BuiltInRegistries.BLOCK.key();

// // Forza l'overload corretto di DeferredRegister.create
// let BLOCKS_REGISTER = DeferredRegister["create(net.minecraft.resources.ResourceLocation,java.lang.String)"](blockRegistryKey, MODID);



// // Registra l'alias al momento giusto
// StartupEvents.registry('block', event => {
//   const blocchiDaSostituire = [
//     "deepslate_silver_ore",
//     "deepslate_nickel_ore",
//     "deepslate_tin_ore",
//     "deepslate_zinc_ore",
//     "deepslate_lead_ore",
//     "nickel_ore",
//     "deepslate_sulfur_ore",
//     "zinc_ore",
//     "sulfur_ore",
//     "silver_ore",
//     "tin_ore",
//     "lead_ore",
//     "saltpeter_ore",
//     "minecart_rolling_stock"
//   ];

  
//   let airBlockId = ResourceLocation.parse("minecraft:air");



//   blocchiDaSostituire.forEach(bid => {
//     // Definisci l'alias
//     let missingBlockId = ResourceLocation.parse(`railcraft:${bid}`);
//     BLOCKS_REGISTER.addAlias(missingBlockId, airBlockId);
    
//     console.log(`[KubeJS] Alias registrato: ${missingBlockId} → ${airBlockId}`);
//   })

// });