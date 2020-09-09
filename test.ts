import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { SpaceExplorer } from "./space-explorer.ts";

Deno.test("get planet by name", async (): Promise<void> => {

    const planet = SpaceExplorer.getPlanetByName('Earth') 

    assertEquals(planet.orbitalPeriod, 365.2)
    
});

Deno.test("get planets in our solarsystem", async (): Promise<void> => {

    const planets = SpaceExplorer.getPlanetsInOurSolarSystem() 

    assertEquals(planets.length, 9)
    
});
