// priority: 9999999

ServerEvents.tags("block", (event) => {
  //più item
  event.get("minecraft:dirt").getObjectIds().forEach((id) => {
    event.add("actuallyadditions:worm_drop", id);
  })

});


ServerEvents.tags('item', event => {
  event.add('c:tiny/charcoal', 'actuallyadditions:tiny_charcoal')
  event.add('c:tiny/coal', 'actuallyadditions:tiny_coal')
})