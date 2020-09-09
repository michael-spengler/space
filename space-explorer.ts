
import { Persistence } from "https://deno.land/x/persistence@1.1.0/persistence.ts"

export class SpaceExplorer {

  // found out the transaction ID via https://x.nest.land/api/package/space/0.2.2
  private static planetsFileId = 'https://arweave.net/tx/PQ5YVI6bfAifozCnIGwx38sCbwDxkiwzKCq0cRg0Q1I/data.json'

  public static async getPlanetByName(name: string): Promise<any> {
    const planets: any[] = await SpaceExplorer.getPlanetsInOurSolarSystem()

    return planets.filter((p: any) => p.name === name)[0]
  }

  public static async getPlanetsInOurSolarSystem(): Promise<any[]> {

    return JSON.parse(await Persistence.readFromRemoteFile(SpaceExplorer.planetsFileId))
  }

}