ServerEvents.commandRegistry((event) => {
  const { commands: Commands, arguments: Arguments } = event;

  

  event.register(
    Commands.literal("commandRewardFix").then(
      Commands.argument("ogCommand", Arguments.STRING.create(event)).executes(
        (ctx) => {
          const ogCommand = Arguments.STRING.getResult(ctx, "ogCommand");

          ctx.source.server.runCommand(`${ogCommand}`);
          ctx.source.player.tell(`Command Executed: ${ogCommand}`);
          ctx.source.player.tell(`If not work check the logs`);
          return 1;
        }
      )
    )
  );
});