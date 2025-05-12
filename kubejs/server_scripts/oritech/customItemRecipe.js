// priority: 9999999
ServerEvents.recipes((event) => {
  const materials = global.missingOritechMaterials;

  materials.forEach((mt) => {
    event.shaped(
      Item.of(AlmostUnified.getTagTargetItem(`c:clumps/${mt}`).id, 1),
      [
        "CCC", 
        "CCC", 
        "CCC"
      ],
      {
        C: `oritech:small_${mt}_clump`,
      }
    );
    event.shaped(
      Item.of(AlmostUnified.getTagTargetItem(`c:dusts/${mt}`).id, 1),
      [
        "DDD", 
        "DDD", 
        "DDD"
      ],
      {
        D: `oritech:small_${mt}_dust`,
      }
    );
  });
});
