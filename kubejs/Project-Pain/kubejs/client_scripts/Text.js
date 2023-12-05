ItemEvents.tooltip(event => {
    event.add(/minecraft:(wooden|stone|golden|iron|diamond|netherite)_(sword|pickaxe|axe|shovel|hoe)/, [
        [Text.of('DONT USE').red()]
    ])
})