// priority: 9999998

ServerEvents.recipes((event) => {
  compactsMachines.forEach((compactMachine) => {
    event.custom({
      type: "minecraft:crafting_shaped",
      category: "misc",
      key: {
        E: {
          item: "compactmachines:enlarging_module",
        },
        P: compactMachine["core"],
        S: {
          item: "compactmachines:shrinking_module",
        },
        W: {
          item: "compactmachines:wall",
        },
      },
      pattern: [
        "WWW",
        "EPS",
        "WWW"
      ],
      result: {
        components: {
          "compactmachines:machine_color": compactMachine["color"],
          "compactmachines:room_template": `compactmachines:${compactMachine["name"]}`,
        },
        count: 1,
        id: "compactmachines:new_machine",
      },
    });
  });
});
