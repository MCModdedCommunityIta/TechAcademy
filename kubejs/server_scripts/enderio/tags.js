// priority: 9999999

ServerEvents.tags('item', event => {
  event.add('minecraft:skulls', 'enderio:enderman_head')
  event.add("c:dusts/flour", "enderio:flour")
  event.add("c:dusts/pulsating_crystal", "enderio:pulsating_powder")
  event.add("c:dusts/vibrant_crystal", "enderio:vibrant_powder")
  event.add("c:dusts/ender_crystal", "enderio:ender_crystal_powder")
  event.add("c:dusts/prescient_crystal", "enderio:prescient_powder")
})

ServerEvents.tags('block', event => {
  event.add('c:skulls', 'enderio:enderman_head')
  
})