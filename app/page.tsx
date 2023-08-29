import Link from "next/link";
import { Inter } from "@next/font/google";
import Navbar from "./(components)/pageComponents/navbar/Navbar";
import ArmiesByFaction from "./(components)/dataFetching/ArmiesByFaction";
const inter = Inter({ subsets: ["latin"] });

export default async function Home() {
  const factions = ArmiesByFaction();

  return (
    <>
      <Navbar />
      <div className="flex">
        {Object.keys(factions).map((factionKeys: any, index) => {
          let factionArmies = Object.values(factions)[index];
          return (
            <ul key={index}>
              <h1 className="font-semibold">{factionKeys}</h1>
              {factionArmies.map((item: any) => {
                return (
                  <li className="list-none indent-6" key={item.faction_name}>
                    <a>
                      <Link href={`/factions/${item.faction_id}`}>
                        {item.faction_name}
                      </Link>
                    </a>
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
