// priority: 9999998

const compactmachines_dir = "compactmachines:compactmachines/room_templates/";

ServerEvents.generateData("after_mods", (event) => {
  compactsMachines.forEach((compactMachine) => {
    let baseJson = {
      color: compactMachine["color"],
      dimensions: compactMachine["dimension"],
    };

    if ("floor" in compactMachine) {
      baseJson["floor"] = compactMachine["floor"];
    }

    event.json(compactmachines_dir + compactMachine["name"], baseJson);
  });
});
