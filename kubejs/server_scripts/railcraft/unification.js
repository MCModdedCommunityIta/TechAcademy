ServerEvents.tags('item', event => {
  event.add('c:ores/firestone', 'railcraft:firestone_ore')
})


ServerEvents.tags('block', event => {
  event.add('c:ores/firestone', 'railcraft:firestone_ore')
})


ServerEvents.recipes(event => {

  event.custom({
    "type": "immersiveengineering:shaped_fluid",
    "category": "misc",
    "key": {
      "a": {
        "type": "immersiveengineering:fluid_stack",
        "amount": 1000,
        "tag": "c:creosote"
      },
      "b": {
        "tag": "minecraft:wooden_slabs"
      }
    },
    "pattern": [
      " a ",
      "bbb"
    ],
    "result": {
      "count": 3,
      "id": "railcraft:wooden_tie"
    }
  }).id("railcraft:wooden_tie")

})