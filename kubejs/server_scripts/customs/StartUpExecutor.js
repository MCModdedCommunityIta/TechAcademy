PlayerEvents.loggedIn(event => {
  const retrivedAECMode = event.server.persistentData.getString('techacademy.channelmode')
  const possibleChannelMode = ["default", "infinite", "x2", "x3", "x4"];
  if (possibleChannelMode.includes(retrivedAECMode)) {
    event.server.runCommandSilent(`ae2 channelmode ${retrivedAECMode}`);
    console.warn(`Channel Mode: ${retrivedAECMode}`);
  }else{
    console.warn(`Channel Mode: NotSet/NotValid`);
  }
  
})
