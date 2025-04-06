ServerEvents.commandRegistry((event) => {
  const { commands: Commands, arguments: Arguments, builtInSuggestions: Suggestions } = event;

  event.register(
    Commands.literal("techacademyAE2ChannelPersist").then(
      Commands.argument("mode", Arguments.STRING.create(event))
      .suggests((context, builder) => {
        const suggestions = ["default", "infinite", "x2", "x3", "x4"];
        suggestions.forEach((suggestion) => {builder.suggest(suggestion)});
        return builder.buildFuture();
      })
      .executes(
        (ctx) => {
          const mode = Arguments.STRING.getResult(ctx, "mode");
          ctx.source.server.persistentData.putString('techacademy.channelmode', mode)

          const modeRetrived = ctx.source.server.persistentData.getString('techacademy.channelmode')
          ctx.source.server.runCommand(`ae2 channelmode ${modeRetrived}`);
          ctx.source.player.tell(`Channel Mode: ${modeRetrived}`);

          return 1;
        }
      )
    )
  );

  event.register(
    Commands.literal("techacademyPersist")
    .then(
      Commands.argument("key", Arguments.STRING.create(event))
      .suggests((context, builder) => {
        const suggestions = ["techacademy.channelmode"];
        suggestions.forEach((suggestion) => {builder.suggest(suggestion)});
        return builder.buildFuture();
      })
      .then(
        Commands.argument("data", Arguments.STRING.create(event))
        .executes(
        (ctx) => {
          const key = Arguments.STRING.getResult(ctx, "key");
          const data = Arguments.STRING.getResult(ctx, "data");
          ctx.source.server.persistentData.put(key, data)

          ctx.source.player.tell(`Executed: ${ctx.source.server.persistentData.get(key)}`);
          return 1;
        }
        )
      )
    )
  );


});
