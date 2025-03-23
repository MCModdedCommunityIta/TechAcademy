ServerEvents.tags("block", (event) => {
  //più item
  event.get("minecraft:dirt").getObjectIds().forEach((id) => {
    event.add("actuallyadditions:worm_drop", id);
  })

});
