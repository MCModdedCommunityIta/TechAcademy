// priority: 9999998

ServerEvents.recipes((event) => {

  const noClumpToIngot = [
    "copper",
    "gold",
    "iron",
    "nickel",
    "platinum",
    "uranium",
  ];

  Ingredient.of("@oritech").itemIds.filter(id => id.includes("_gem")).forEach((id) => {
    let material = id.split("_")[0].split(":")[1];
    if (!noClumpToIngot.includes(material)) {
      let targetItem = AlmostUnified.getTagTargetItem(`c:ingots/${material}`);
      event.smelting(!targetItem.id.includes("air") ? targetItem.id : Ingredient.of(`c:ingots/${material}`).itemIds[0], id)}
  })

});