
import { Persistence } from "https://deno.land/x/persistence@1.1.0/persistence.ts"

export class SpaceExplorer {

  private static planetsFileId = 'https://raw.githubusercontent.com/michael-spengler/space/master/planets.json'

  public static async getPlanetByName(name: string): Promise<any> {
    const planets: any[] = await SpaceExplorer.getPlanetsInOurSolarSystem()

    return planets.filter((p: any) => p.name === name)[0]
  }


  public static async getPlanetsInOurSolarSystem(): Promise<any[]> {

    return JSON.parse(await Persistence.readFromRemoteFile(SpaceExplorer.planetsFileId))
  }

}