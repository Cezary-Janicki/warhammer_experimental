import * as React from "react";
import Link from "next/link";
import NavbarFactions from "./Factions";
import { getAllDatasheets } from "../../dataFetching/Datasheets";
async function getUnitsByFaction() {
  const data = await getAllDatasheets();
  return data;
}
export default async function Navbar() {
  const unitsByFaction = await getUnitsByFaction();
  return (
    <>
      <div className="">
        <NavbarFactions units={unitsByFaction} />
        <Link href={`/`}>Return to Main Page</Link>
      </div>
    </>
  );
}
