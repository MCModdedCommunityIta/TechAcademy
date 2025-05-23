const mcj = Java.loadClass("net.minecraft.client.Minecraft");
const mc = mcj.getInstance();

PlayerEvents.loggedIn((event) => {
  const retrivedAECMode = event.server.persistentData.getString(
    "techacademy.channelmode"
  );
  const possibleChannelMode = ["default", "infinite", "x2", "x3", "x4"];
  if (possibleChannelMode.includes(retrivedAECMode)) {
    event.server.runCommandSilent(`ae2 channelmode ${retrivedAECMode}`);
    console.warn(`Channel Mode: ${retrivedAECMode}`);
  } else {
    console.warn(`Channel Mode: NotSet/NotValid`);
  }

  if (!event.player.stages.has("welcome")) {
  if (!event.player.data["ftbquests"].isCompleted("6CE00D9DF699753D")) {
    mc.gui.setTitle("Benvenuto nella §6Tech Academy!");
    mc.gui.setTimes(10, timeToTicks(3, "seconds"), 10);
    event.player.runCommandSilent(`playsound minecraft:ui.toast.challenge_complete master`);

    event.server.scheduleInTicks(timeToTicks(3, "seconds"), (_) => {
      event.player.runCommandSilent(
        // `execute as @a run ftbquests open_book 6CE00D9DF699753D`
        `tellraw @a [ "Se sei nuovo, apri la chat con ",{"keybind":"key.chat","bold":true,"color":"red"}," e clicca ", { "text": "qui!", "color": "green", "underlined": true, "clickEvent": { "action": "run_command", "value": "/ftbquests open_book 6CE00D9DF699753D" } } ]`
      );
    });
  }else { 
    event.player.stages.add("starting_items");
  }
    event.player.stages.add("welcome");
  }

  if (!event.player.stages.has("starting_items")) {
    event.player.give(Item.of("ftbquests:book", 1));
    event.player.give(Item.of("miningutility:mining_helmet", 1));
    event.player.give(Item.of("miningutility:escape_rope", 1));
    event.player.stages.add("starting_items");
  }
});

// /title @a times 10t 1s 10t
// /title @a title [ "Benvenuto nella ", { "text": "Tech Academy!", "color": "gold"} ]
// [ "Se sei nuovo, apri la chat con ",{"keybind":"key.chat","bold":true,"color":"red"}," e clicca ", { "text": "qui!", "color": "green", "underlined": true, "clickEvent": { "action": "run_command", "value": "/ftbquests open_book 6CE00D9DF699753D" } } ]
