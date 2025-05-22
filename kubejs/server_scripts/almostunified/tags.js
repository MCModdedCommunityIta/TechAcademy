// priority: 9999999

ServerEvents.tags("item", (event) => {
  event.add("c:basalt", "/minecraft:.*basalt/g")

  let charcoalIds = getIdsByTagPre(event, "c:charcoal")
  let cokeIds = getIdsByTagPre(event, "c:coal_coke")

  getIdsByTagPre(event, "c:coal").forEach((id) => {
    if (charcoalIds.some((item) => item == id)) {
      event.add("c:coal/charcoal", String(id));
    } else if (cokeIds.some((item) => item == id)) {
      event.add("c:coal/coal_coke", String(id));
    } else {
      event.add("c:coal/coal", String(id));
    }
  });
});

ServerEvents.tags("block", (event) => {
  event.add("c:basalt", "/minecraft:.*basalt/g")
});

ServerEvents.tags("fluid", (event) => {
  event.add("c:fuels/biodiesel", "#c:biodiesel")
  event.add("c:fuels/biofuel", "#c:biofuel")
  event.add("c:fuels/high_power_biodiesel", "#c:high_power_biodiesel")
  event.add("c:fuels/creosote", "#c:creosote")
  event.add("c:fuels/ethanol", "#c:ethanol")
  event.add("c:fuels/bioethanol", "#c:bioethanol")
  event.add("immersiveengineering:drill_fuel", "#c:fuels/biodiesel")
  event.add("immersiveengineering:drill_fuel", "#c:fuels/diesel")
});