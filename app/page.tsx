import Link from "next/link";
import { Inter } from "@next/font/google";
import Navbar from "./(components)/pageComponents/navbar/Navbar";
import ArmiesByFaction from "./(components)/dataFetching/ArmiesByFaction";
import { getAllDatasheets } from "./(components)/dataFetching/Datasheets";
const inter = Inter({ subsets: ["latin"] });

async function getUnitsByFaction() {
  const data = await getAllDatasheets();
  return data;
}

export default async function Home() {
  const factions = ArmiesByFaction();
  const unitsByFaction = await getUnitsByFaction();

  return (
    <>
      <Navbar unitsByFaction={unitsByFaction} />
      <div className="flex">
        {Object.keys(factions).map((factionKeys: any, index) => {
          let factionArmies = Object.values(factions)[index];
          return (
            <ul key={index}>
              <h1 className="font-semibold">{factionKeys}</h1>
              {factionArmies.map((item: any) => {
                return (
                  <li className="list-none indent-6" key={item.faction_name}>
                    <Link href={`/factions/${item.faction_id}`}>
                      {item.faction_name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          );
        })}
      </div>
    </>
  );
}
