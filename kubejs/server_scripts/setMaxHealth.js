PlayerEvents.loggedIn(e=> {
if (!e.player.stages.has('starting_items')) {
    // Add the stage
    e.player.stages.add('starting_items')
    e.player.give('30x minecraft:apple')
    e.player.setMaxHealth(6)
}
})
PlayerEvents.respawned(e=> {
    e.player.setMaxHealth(e.player.getMaxHealth-14)
   })