RecipeViewerEvents.removeEntriesCompletely("item", (event) => {

  // Con questo script (e il config material.json > recipe_viewer_hiding=false) 
  // è possibile rimuovere tutti gli oggetti unificati dalla JEI/EMI, ma non dalle recipe,
  // ciò dovrebbe rendere più facile capire cosa farne dei vecchi item,
  // al contrario del suddetto config che altrimenti li avrebbe nascosti anche dalle recipe

  AlmostUnified.getTags().forEach((tag) => {
    AlmostUnified.getTagEntries(tag).forEach((item) => {
      let mainItem = AlmostUnified.getVariantItemTarget(item).id;

      if (!mainItem == "minecraft:air" || mainItem != item) {
        event.remove(item);
        console.log(`${item} rimosso dopo l'unificazione dalla JEI/EMI`);
      }
    });
  });
  
});
