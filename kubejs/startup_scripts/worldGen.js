WorldgenEvents.add(event => {
  event.removeOres(props => {
    props.blocks = ['minecraft:iron_ore', 'minecraft:copper_ore']
  })
})

