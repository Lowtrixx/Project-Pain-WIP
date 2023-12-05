WorldgenEvents.remove(event => {
  event.removeOres(props => {
    props.worldgenLayer = 'underground_ores'
    props.blocks = ['minecraft:iron_ore', 'minecraft:copper_ore']
  })
})

