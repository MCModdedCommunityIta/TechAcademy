// priority: 9999999

ServerEvents.tags('item', event => {
  event.add('c:plastics', 'immersiveengineering:plate_duroplast')

  Ingredient.of("#c:rods/treated_wood").itemIds.forEach((id) => {
      event.remove("c:rods/wooden", String(id));
  });
})