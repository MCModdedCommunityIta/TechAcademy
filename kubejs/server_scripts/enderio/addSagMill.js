ServerEvents.recipes((event) => {

  event.recipes.enderio
    .sag_milling(
      //outputs
      [
        SagMillOutput.of('1x ae2:certus_quartz_dust'),
        SagMillOutput.of('1x ae2:certus_quartz_dust', 0.1),
      ],
      //input
      Ingredient.of('#c:gems/certus_quartz', 1)
    )
    .energy(2400);

  event.recipes.enderio
    .sag_milling(
      //outputs
      [
        SagMillOutput.of('1x ae2:fluix_dust'),
        SagMillOutput.of('1x ae2:fluix_dust', 0.1),
      ],
      //input
      Ingredient.of('ae2:fluix_crystal', 1)
    )
    .energy(2400);
      
})