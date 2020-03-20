let mock = {
  taskflows: [
    {
    name: "Minecraft Project Phase 1",
    id: "mc-phase-1",
    tasks: [{
      id: "wood",
      name: "Get wood",
      dependencies: [],
      complete: false
    },{
      id: "tools",
      name: "Get basic tools",
      dependencies: ["wood"],
      complete: false
    },{
      id: "deep-mine",
      name: "Create deep mine",
      dependencies: ["tools"],
      complete: false
    },{
      id: "diamond",
      name: "Collect diamonds",
      dependencies: ["deep-mine"],
      complete: false
    },{
      id: "nether",
      name: "Build the Nether Portal",
      dependencies: ["diamond"],
      complete: false
    },{
      id: "fortress",
      name: "Find the Nether Fortress",
      dependencies: ["nether"],
      complete: false
    },{
      id: "blaze-rods",
      name: "Gather blaze rods",
      dependencies: ["fortress"],
      complete: false
    },{
      id: "base",
      name: "Construct rudimentary base",
      dependencies: ["tools"],
      complete: false
    },{
      id: "farm",
      name: "Begin Farming",
      dependencies: ["base"],
      complete: false
    },{
      id: "combat",
      name: "Construct Combat Outpost",
      dependencies: ["farm"],
      complete: false
    },{
      id: "pearls",
      name: "Gather Ender Pearls",
      dependencies: ["combat"],
      complete: false
    },{
      id: "stronghold",
      name: "Locate the Stronghold",
      dependencies: ["blaze-rods", "pearls"],
      complete: false
    },{
      id: "snow",
      name: "Get Snow",
      dependencies: ["tools"],
      complete: false
    },{
      id: "flint-and-gravel",
      name: "Get flint and gravel",
      dependencies: ["tools"],
      complete: false
    },{
      id: "chickens",
      name: "Farm Chickens",
      dependencies: ["farm"],
      complete: false
    },{
      id: "bows-and-arrows",
      name: "Craft bows and arrows",
      dependencies: ["chickens", "flint-and-gravel"],
      complete: false
    },{
      id: "dragon",
      name: "Slay the Ender Dragon",
      dependencies: ["bows-and-arrows", "snow", "stronghold"],
      complete: false
    }]
  },{
    name: "Minecraft Project Phase 2",
    id: "mc-phase-2",
    tasks: [
    {
      id: "phase-1",
      name: "Complete Phase 1",
      dependencies: [],
      complete: false
    },{
      id: "creepers",
      name: "Hunt creepers extensively",
      dependencies: ["phase-1"],
      complete: false
    },{
      id: "sugar",
      name: "Grow sugar cane",
      dependencies: ["phase-1"],
      complete: false
    },{
      id: "fireworks",
      name: "Make fireworks",
      dependencies: ["creepers", "sugar"],
      complete: false
    },{
      id: "make-maps",
      name: "Make maps",
      dependencies: ["sugar"],
      complete: false
    },{
      id: "sheep",
      name: "Farm sheep",
      dependencies: ["phase-1"],
      complete: false
    },{
      id: "banners",
      name: "Make banners",
      dependencies: ["sheep"],
      complete: false
    },{
      id: "start-exploring",
      name: "Initiate exploration",
      dependencies: ["banners", "make-maps"],
      complete: false
    },{
      id: "map-end",
      name: "Begin mapping The End",
      dependencies: ["start-exploring"],
      complete: false
    },{
      id: "map-overworld",
      name: "Begin mapping the Overworld",
      dependencies: ["start-exploring"],
      complete: false
    },{
      id: "elytra",
      name: "Obtain Elytra",
      dependencies: ["map-end"],
      complete: false
    },{
      id: "village-location",
      name: "Secure village location",
      dependencies: ["map-overworld"],
      complete: false
    },{
      id: "build-village",
      name: "Construct village",
      dependencies: ["village-location"],
      complete: false
    },{
      id: "farm-zombies",
      name: "Create zombie farm",
      dependencies: ["village-location"],
      complete: false
    },{
      id: "heal-zombies",
      name: "Heal zombie villagers",
      dependencies: ["farm-zombies"],
      complete: false
    },{
      id: "complete-village",
      name: "Organize and finalize village",
      dependencies: ["build-village", "heal-zombies"],
      complete: false
    },{
      id: "mending",
      name: "Obtain mending books",
      dependencies: ["complete-village"],
      complete: false
    },{
      id: "flight",
      name: "Unlimited Flight",
      dependencies: ["fireworks", "elytra", "mending"],
      complete: false
    }]
  }]
}