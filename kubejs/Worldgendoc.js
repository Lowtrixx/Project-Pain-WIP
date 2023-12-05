WorldgenEvents.add(event => {
    // use the anchors helper from the event
    const { anchors } = event
  
    event.addOre(ore => {
      ore.id = 'kubejs:glowstone_test_lmao' // (optional, but recommended) custom id for the feature
      ore.biomes = {
        not: 'minecraft:savanna' // biome filter, see above (technically also optional)
      }
  
      // examples on how to use targets
      ore.addTarget('#minecraft:stone_ore_replaceables', 'minecraft:glowstone') // replace anything in the vanilla stone_ore_replaceables tag with Glowstone
      ore.addTarget('minecraft:deepslate', 'minecraft:nether_wart_block')       // replace Deepslate with Nether Wart Blocks
      ore.addTarget([
        'minecraft:gravel',     // replace gravel...
        /minecraft:(.*)_dirt/   // or any kind of dirt (including coarse, rooted, etc.)...
      ], 'minecraft:tnt')       // with TNT (trust me, it'll be funny)
  
      ore.count([15, 50])             // generate between 15 and 50 veins (chosen at random), you could use a single number here for a fixed amount of blocks
        .squared()                    // randomly spreads the ores out across the chunk, instead of generating them in a column
        .triangleHeight(				      // generate the ore with a triangular distribution, this means it will be more likely to be placed closer to the center of the anchors
          anchors.aboveBottom(32),    // the lower bound should be 32 blocks above the bottom of the world, so in this case, Y = -32 since minY = -64
          anchors.absolute(96)	      // the upper bound, meanwhile is set to be just exactly at Y = 96
        )								              // in total, the ore can be found between Y levels -32 and 96, and will be most likely at Y = (96 + -32) / 2 = 32
  
      // more, optional parameters (default values are shown here)
      ore.size = 9                            // max. vein size
      ore.noSurface = 0.5                     // chance to discard if the ore would be exposed to air
      ore.worldgenLayer = 'underground_ores'  // what generation step the ores should be generated in (see below)
      ore.chance = 0							            // if != 0 and count is unset, the ore has a 1/n chance to generate per chunk
    })

  })
  
  WorldgenEvents.remove(event => {
    // print all features for a given biome filter
    event.printFeatures('', 'minecraft:plains')
  
    event.removeOres(props => {
      // much like ADDING ores, this supports filtering by worldgen layer...
      props.worldgenLayer = 'underground_ores'
      // ...and by biome
      props.biomes = [
        { category: 'icy' },
        { category: 'savanna' },
        { category: 'mesa' }
      ]
  
      // BlockStatePredicate to remove iron and copper ores from the given biomes
      // Note tags may NOT be used here, unfortunately...
      props.blocks = ['minecraft:iron_ore', 'minecraft:copper_ore']
    })
  
    // remove features by their id (first argument is a generation step)
    event.removeFeatureById('underground_ores', ['minecraft:ore_coal_upper', 'minecraft:ore_coal_lower'])
  })