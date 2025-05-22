ServerEvents.tags('item', event => {
  // completamento assegnamento tag parazile della ori sulla create
  Ingredient.of('#create:crushed_raw_materials').getItemIds().forEach((id) => {
    let material = id.split('_').pop()
    event.add(`c:clumps/${material}`, id)
  })
})