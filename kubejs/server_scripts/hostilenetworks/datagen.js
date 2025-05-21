const hostilenetworks_dir = "hostilenetworks:data_models/";

ServerEvents.generateData("after_mods", (event) => {
  //Ender dragon model
  event.json(hostilenetworks_dir + "ender_dragon", {
    entity: "minecraft:ender_dragon",
    variants: [],
    name: {
      translate: "entity.minecraft.ender_dragon",
      color: "#CC00CC",
    },
    display: {
      y_offset: 0.5,
      scale: 0.25,
    },
    sim_cost: 4096,
    input: {
      item: "hostilenetworks:prediction_matrix",
    },
    base_drop: {
      id: "hostilenetworks:end_prediction",
    },
    trivia: "hostilenetworks.trivia.ender_dragon",
    fabricator_drops: [
      {
        id: "minecraft:dragon_breath",
        count: 16,
      },
      {
        id: "minecraft:dragon_egg",
        count: 1,
      },
      {
        id: "minecraft:dragon_head",
        count: 1,
      },
    ],
    data_per_kill: {
      faulty: 3,
      basic: 12,
      advanced: 30,
      superior: 45,
    },
  });
  //Zombified Piglin model
  event.json(hostilenetworks_dir + "zombified_piglin", {
    entity: "minecraft:zombified_piglin",
    variants: ["minecraft:piglin"],
    name: {
      translate: "entity.minecraft.zombified_piglin",
      color: "#3B992F",
    },
    display: {},
    sim_cost: 256,
    input: {
      item: "hostilenetworks:prediction_matrix",
    },
    base_drop: {
      id: "hostilenetworks:nether_prediction",
    },
    trivia: "hostilenetworks.trivia.zombified_piglin",
    fabricator_drops: [
      {
        id: "minecraft:rotten_flesh",
        count: 64,
      },
      {
        id: "minecraft:gold_ingot",
        count: 8,
      },
      {
        id: "minecraft:piglin_head",
        count: 2,
      },
    ],
  });
  //Enderman model
  event.json(hostilenetworks_dir + "enderman", {
    entity: "minecraft:enderman",
    variants: [
      "endermanoverhaul:badlands_enderman",
      "endermanoverhaul:cave_enderman",
      "endermanoverhaul:coral_enderman",
      "endermanoverhaul:crimson_forest_enderman",
      "endermanoverhaul:dark_oak_enderman",
      "endermanoverhaul:desert_enderman",
      "endermanoverhaul:end_enderman",
      "endermanoverhaul:end_islands_enderman",
      "endermanoverhaul:flower_fields_enderman",
      "endermanoverhaul:ice_spikes_enderman",
      "endermanoverhaul:mushroom_fields_enderman",
      "endermanoverhaul:nether_wastes_enderman",
      "endermanoverhaul:savanna_enderman",
      "endermanoverhaul:snowy_enderman",
      "endermanoverhaul:soulsand_valley_enderman",
      "endermanoverhaul:swamp_enderman",
      "endermanoverhaul:warped_forest_enderman",
      "endermanoverhaul:windswept_hills_enderman",
    ],
    name: {
      translate: "entity.minecraft.enderman",
      color: "#161616",
    },
    display: {
      scale: 0.75,
    },
    sim_cost: 512,
    input: {
      item: "hostilenetworks:prediction_matrix",
    },
    base_drop: {
      id: "hostilenetworks:end_prediction",
    },
    trivia: "hostilenetworks.trivia.enderman",
    fabricator_drops: [
      {
        id: "minecraft:ender_pearl",
        count: 16,
      },
      {
        id: "minecraft:end_crystal",
        count: 1,
      },
      {
        id: "enderio:enderman_head",
        optional: true,
        count: 2,
      },
      {
        id: "evilcraft:ender_tear",
        optional: true,
        count: 4,
      },
      {
        id: "reliquary:nebulous_heart",
        optional: true,
        count: 2,
      },
    ],
  });
  //Zombie model
  event.json(hostilenetworks_dir + "zombie", {
    entity: "minecraft:zombie",
    variants: [
      "minecraft:husk",
      "minecraft:zombie_villager",
      "twilightforest:rising_zombie",
    ],
    name: {
      translate: "entity.minecraft.zombie",
      color: "#3B622F",
    },
    display: {},
    sim_cost: 128,
    input: {
      item: "hostilenetworks:prediction_matrix",
    },
    base_drop: {
      id: "hostilenetworks:overworld_prediction",
    },
    trivia: "hostilenetworks.trivia.zombie",
    fabricator_drops: [
      {
        id: "minecraft:rotten_flesh",
        count: 64,
      },
      {
        id: "minecraft:iron_ingot",
        count: 8,
      },
      {
        id: "minecraft:carrot",
        count: 16,
      },
      {
        id: "minecraft:potato",
        count: 16,
      },
      {
        id: "minecraft:zombie_head",
        count: 3,
      },
      {
        id: "reliquary:zombie_heart",
        optional: true,
        count: 2,
      },
    ],
  });
});
