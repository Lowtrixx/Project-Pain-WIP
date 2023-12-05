PlayerEvents.loggedIn((e) => {
  if (!e.player.stages.has("starting_items")) {
    // Add the stage
    e.player.setMaxHealth(6);

    e.player.stages.add("starting_items");
  }
});
