import Link from "next/link";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import { MainFactions } from "./(components)/dataFetching/Factions";
import Navbar from "./(components)/pageComponents/navbar/Navbar";
import ArmiesByFaction from "./(components)/dataFetching/ArmiesByFaction";
const inter = Inter({ subsets: ["latin"] });

async function getMainFactions() {
  const factions = await MainFactions();
  return factions;
}

export default async function Home() {
  // const factions = await getMainFactions();
  // type factions = {
  //   faction_name: string;
  //   faction_id: string;
  // };
  const factions = ArmiesByFaction();
  ``;
  const chaos = factions.Chaos;
  const imperium = factions.Imperium;
  const xenos = factions.Xenos;
  return (
    <>
      <Navbar />
      {/* I need to rewrite this into a for loop with length that matches factionValues.length */}
      {Object.keys(factions).map((factionKeys: any) => {
        return Object.values(factions).map(
          (factionValues: any, index: number) => {
            // console.log("fac", factionValues.length);
            return (
              <>
                <div>
                  <h1 className="font-semibold">{factionKeys}</h1>
                  <ul>
                    <li className="list-none indent-6">
                      <a>
                        <Link
                          href={`/factions/${factionValues[index].faction_id}`}
                        >
                          {factionValues[index].faction_name}
                        </Link>
                      </a>
                    </li>
                  </ul>
                </div>
              </>
            );
          }
        );
      })}

      {/* <div className="flex">
        <div>
          <h1 className="font-semibold">Imperium</h1>
          <ul>
            {imperium.map((faction: any) => {
              return (
                <li className="list-none indent-6">
                  <a>
                    <Link href={`/factions/${faction.faction_id}`}>
                      {faction.faction_name}
                    </Link>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <h1 className="font-semibold">Chaos</h1>
          <ul>
            {chaos.map((faction: any) => {
              return (
                <li className="list-none indent-6">
                  <Link href={`/factions/${faction.faction_id}`}>
                    {faction.faction_name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <h1 className="font-semibold">Xenos</h1>
          <ul>
            {xenos.map((faction: any) => {
              return (
                <li className="list-none indent-6">
                  <Link href={`/factions/${faction.faction_id}`}>
                    {faction.faction_name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div> */}
    </>
  );
}
