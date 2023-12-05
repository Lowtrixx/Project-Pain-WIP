WorldgenEvents.add(event => {
  event.removeOres(props => {
   
    props.blocks = [/ore\b/]
  })
})




