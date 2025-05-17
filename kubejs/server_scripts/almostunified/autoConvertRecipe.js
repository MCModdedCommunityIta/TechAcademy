ServerEvents.recipes(event => {

  // Recipe automatica per ottenere gli item unificati resitutendo l'item corretto
  // seguendo la priority list nei config della almost unified 
  let auxiliaryItem = `kubejs:ore_dictionary`

  event.shapeless(
    Item.of(auxiliaryItem),
    [
      Ingredient.of('minecraft:book'),
      Ingredient.of('#c:bookshelves'),
      Ingredient.of('#c:raw_materials'),
    ]
  )
  
  AlmostUnified.getTags().forEach((tag) => {
    let targetItem = AlmostUnified.getTagTargetItem(tag);

    // skippa gli item previsti dai config ma che all'effettivo non hanno cloni da unificare
    if (!targetItem.id.includes("air") && getIdsByTagPost(`#${tag}`).length > 1) {
      event.shapeless(
        AlmostUnified.getTagTargetItem(tag),
        [
          Ingredient.of(`#${tag}`),
          Ingredient.of(auxiliaryItem)
        ]
      ).keepIngredient(auxiliaryItem)
    }
  })

})