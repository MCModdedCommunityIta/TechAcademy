// priority: 9999998

const createaddition_dir = "createaddition:recipe/compat/mekanism/";

ServerEvents.generateData("after_mods", (event) => {
  event.json(createaddition_dir + "rose_quartz_enriching", {
    "neoforge:conditions": [
      {
        type: "neoforge:mod_loaded",
        modid: "mekanism",
      },
    ],
    type: "mekanism:enriching",
    input: {
      count: 1,
      item: "create:rose_quartz",
    },
    output: {
      count: 1,
      id: "create:polished_rose_quartz",
    },
  });
  event.json(createaddition_dir + "rose_quartz_metallurgic_infusing", {
    "neoforge:conditions": [
      {
        type: "neoforge:mod_loaded",
        modid: "mekanism",
      },
    ],
    type: "mekanism:metallurgic_infusing",
    chemical_input: {
      amount: 10,
      tag: "mekanism:redstone",
    },
    item_input: {
      count: 1,
      tag: "c:gems/quartz",
    },
    output: {
      count: 1,
      id: "create:rose_quartz",
    },
    per_tick_usage: false,
  });
});
