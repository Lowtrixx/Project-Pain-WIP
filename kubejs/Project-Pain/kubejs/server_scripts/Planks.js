ServerEvents.recipes(e => { 
  e.forEachRecipe({ type: 'minecraft:crafting_shapeless', input: '#minecraft:logs', output: '#minecraft:planks' }, r => {
     let ingredients = r.originalRecipeIngredients
     let output = r.originalRecipeResult
     e.shapeless(Item.of(output.id, 2), ingredients[0]).id(r.getOrCreateId())
   })
   e.forEachRecipe({ type: 'minecraft:crafting_shaped', output: '#minecraft:slabs' }, r => {
    let ingredients = r.originalRecipeIngredients 
    let output = r.originalRecipeResult           
  e.shaped(ingredients[0], ['S', 'S'], { S: output })
  })
})

  ServerEvents.recipes(event => {
  let potting = (output, pottedInput1, pottedInput2) => {
    event.shaped(output, [
      'LPL',
      'PIP',
      'LPL'

    ], {
      P: '#minecraft:planks',
      I: pottedInput1,
      L: pottedInput2
    })
  }

  //Now we can make many 'potting' recipes without typing that huge block over and over!
  potting('create:andesite_casing', 'create:andesite_alloy','create:zinc_nugget')
  potting('create:brass_casing', 'create:brass_ingot','create:brass_nugget')
  potting('create:copper_casing', 'minecraft:copper_ingot','create:copper_nugget')
  potting('create:railway_casing', 'create:sturdy_sheet','mekanism:nugget_refined_obsidian')
})