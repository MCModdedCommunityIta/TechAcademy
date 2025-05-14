// priority: 9999998

ServerEvents.recipes((event) => {

  const noClumpToIngot = [
    "copper",
    "gold",
    "iron",
    "nickel",
    "platinum"
  ];

  Ingredient.of("@oritech").itemIds.filter(id => id.includes("_gem")).forEach((id) => {
    let material = id.split("_")[0].split(":")[1];
    if (!noClumpToIngot.includes(material)) {
      event.smelting(getTagOutput(`c:ingots/${material}`), id)
      event.blasting(getTagOutput(`c:ingots/${material}`), id)
    }
  })
  const noSmallDustToNugget = [
    "copper",
    "gold",
    "iron",
    "nickel",
    "platinum",
    "plutonium",
  ];

  Ingredient.of("@oritech").itemIds.filter(id => id.includes("_dust") && id.includes("small_")).forEach((id) => {
    let material = id.split("_")[1];
    if (!noSmallDustToNugget.includes(material)) {
      event.smelting(getTagOutput(`c:nuggets/${material}`), id)
      event.blasting(getTagOutput(`c:nuggets/${material}`), id)
    }
  })

});