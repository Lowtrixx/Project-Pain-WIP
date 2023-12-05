ItemEvents.modification((event) => {
  event.modify(/minecraft:(wooden|stone|golden|iron|diamond|netherite)_(sword|pickaxe|axe|shovel|hoe)/, (item) => {
    item.maxDamage = 1;
  });
});