import Image from "next/image";
import Link from "next/link";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import { MainFactions } from "./(components)/dataFetching/Factions";
const inter = Inter({ subsets: ["latin"] });

async function getMainFactions() {
  const factions = await MainFactions();
  return factions;
}

export default async function Home() {
  const factions = await getMainFactions();
  return (
    <>
      <p className="text-3xl font-bold underline"> Hello next 13!</p>
<div className="flex">
  
            <div>
              <h1 className="underline">Imperium</h1>
              <ul>
                  <li className="list-none indent-6"><Link  href="/factions/AS">Adepta Sororitas</Link></li>
                  <li className="list-none indent-6"><Link href="/factions/AC">Adeptus Custodes</Link></li>
                  <li className="list-none indent-6"><Link href="/factions/AdM">Adeptus Mechanicus</Link></li>
                  <li className="list-none indent-6"><Link href="/facitons/AoI">Agents of the Imperium</Link></li>
                  <li className="list-none indent-6"><Link href="/factions/AM">Astra Militarum</Link></li>
                  <li className="list-none indent-6"><Link href="/factions/GK">Grey Knights</Link></li>
                  <li className="list-none indent-6"><Link href="/factions/IK">Imperial Knights</Link></li>
                  <li className="list-none indent-6"><Link href="/factions/RT">Rogue Traders</Link></li>
                  <li className="list-none indent-6"><Link href="/factions/SM">Space Marines</Link></li>
                  <li className="list-none indent-6"><Link href="/factions/TL">Titan Legions</Link></li>
              </ul>
            </div>
<div>
              <h1 className="underline">Chaos</h1>
                <ul>
                    <li className="list-none indent-6"><Link href="/factions/CD">Chaos Daemons</Link></li>
                    <li className="list-none indent-6"><Link href="/factions/CK">Chaos Knights</Link></li>
                    <li className="list-none indent-6"><Link href="/factions/CSM">Chaos Space Marines</Link></li>
                    <li className="list-none indent-6"><Link href="/factions/DG">Death Guard</Link></li>
                    <li className="list-none indent-6"><Link href="/factions/HTL">Heretic Titan Legions</Link></li>
                    <li className="list-none indent-6"><Link href="/factions/RaH">Renegades and Heretics</Link></li>
                    <li className="list-none indent-6"><Link href="/factions/TS">Thousand Sons</Link></li>
                    <li className="list-none indent-6"><Link href="/factions/WE">World Eaters</Link></li>
                </ul>
</div>
<div>
              <h1 className="underline">Xenos</h1>
                  <ul>
                    <li className="list-none indent-6"><Link href="/factions/AE">Aeldari</Link></li>
                    <li className="list-none indent-6"><Link href="/factions/DRU">Drukhari</Link></li>
                    <li className="list-none indent-6"><Link href="/factions/GSC">Genestealer Cults</Link></li>
                    <li className="list-none indent-6"><Link href="/factions/LoV">Leagues of Votann</Link></li>
                    <li className="list-none indent-6"><Link href="/factions/NEC">Necrons</Link></li>
                    <li className="list-none indent-6"><Link href="/facitons/ORK">Orks</Link></li>
                    <li className="list-none indent-6"><Link href="/factions/TAU">T’au Empire</Link></li>
                    <li className="list-none indent-6"><Link href="/factions/TYR">Tyranids</Link></li>
                  </ul>
</div>
</div>
      {/* {factions.map((faction: any, factionIndex: number) => {
        return (
          <h1 key={factionIndex}>
            <Link href={`/factions/${faction.id}`}>{faction.name}</Link>
          </h1>
        );
      })} */}
    </>
  );
}
{
  /* {roles.map((role, roleIndex) => {
        return <h1 key={roleIndex}>{role}</h1>;
      })} */
}