import Link from "next/link";
import { Inter } from "@next/font/google";
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
      <div className="">
        {Object.keys(factions).map((factionKeys: any, index) => {
          let factionArmies = Object.values(factions)[index];
          return (
            <div key={index} className="pb-6">
              <div className="bg-neutral-800 text-neutral-50 text-center text-2xl tracking-widest font-bold rounded-md p-2.5 drop-shadow-md mb-6 ">
                {factionKeys}
              </div>
              <ul className="columns-3 space-y-4 pb-9 ">
                {factionArmies.map((item: any) => {
                  return (
                    <li
                      className="border-2 border-neutral-300 bg-neutral-200 p-2.5 break-inside-avoid-column rounded-md tracking-wider"
                      key={item.faction_name}
                    >
                      <Link href={`/factions/${item.faction_id}`}>
                        {item.faction_name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </>
  );
}
