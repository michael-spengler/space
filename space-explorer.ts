import { readJsonSync } from "https://deno.land/std/fs/mod.ts"

export class SpaceExplorer {


  public static getPlanetByName(name: string): any {
    const planets: any[] = (readJsonSync(`${Deno.cwd()}/planets.json`) as any[])
    
    return planets.filter((p: any) => p.name === name)[0]
  }


  public static getPlanetsInOurSolarSystem(): any[] {
    
    return (readJsonSync("./planets.json") as any[])
  }

}