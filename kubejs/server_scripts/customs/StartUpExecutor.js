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
});

const mcj = Java.loadClass("net.minecraft.client.Minecraft")
const mc = mcj.getInstance()

FTBQuestsEvents.completed("316EE6AEF21EA4DF", (event) => {
  if (!event.data.isCompleted("6CE00D9DF699753D")) {
	  
    mc.gui.setTitle("Benvenuto nella §6Tech Academy!")
    mc.gui.setTimes(10,20,10)
	
    event.server.scheduleInTicks(timeToTicks(3, "seconds"), (_) => {
      event.server.runCommandSilent(
        // `execute as @a run ftbquests open_book 6CE00D9DF699753D`
        `tellraw @a [ "Se sei nuovo, apri la chat con ",{"keybind":"key.chat","bold":true,"color":"red"}," e clicca ", { "text": "qui!", "color": "green", "underlined": true, "clickEvent": { "action": "run_command", "value": "/ftbquests open_book 6CE00D9DF699753D" } } ]`
      );
    });
  }
  event.data.getData().
  event.server.scheduleInTicks(timeToTicks(2, "seconds"), (_) => {
    event.data.reset("316EE6AEF21EA4DF");
  });
});
// /title @a times 10t 1s 10t
// /title @a title [ "Benvenuto nella ", { "text": "Tech Academy!", "color": "gold"} ]
// [ "Se sei nuovo, apri la chat con ",{"keybind":"key.chat","bold":true,"color":"red"}," e clicca ", { "text": "qui!", "color": "green", "underlined": true, "clickEvent": { "action": "run_command", "value": "/ftbquests open_book 6CE00D9DF699753D" } } ]
