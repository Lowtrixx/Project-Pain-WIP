WorldgenEvents.remove(event => {
  event.removeOres(props => {
    props.blocks = [/ore(\b)/]
  })
})

