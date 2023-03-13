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
      <p> Hello next 13!</p>
      {factions.map((faction: any, factionIndex: number) => {
        return (
          <h1 key={factionIndex}>
            <Link href={`/factions/${faction.id}`}>{faction.name}</Link>
          </h1>
        );
      })}
    </>
  );
}
{
  /* {roles.map((role, roleIndex) => {
        return <h1 key={roleIndex}>{role}</h1>;
      })} */
}
