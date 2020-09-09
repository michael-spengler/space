import { SpaceExplorer } from "https://x.nest.land/space@0.2.1/mod.ts";

const planet = await SpaceExplorer.getPlanetByName('Earth') 

console.log(planet)
