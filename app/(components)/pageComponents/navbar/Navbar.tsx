import * as React from "react";
import Link from "next/link";
import NavbarFactions from "./Factions";
import { getAllDatasheets } from "../../dataFetching/Datasheets";
// async function getUnitsByFaction() {
//   const data = await getAllDatasheets();
//   return data;
// }
export default function Navbar(props: any) {
  // all of this is really really terrible but a quick fix
  const unitsByFaction = props.units;
  // const unitsByFaction = await getUnitsByFaction();
  return (
    <div className="flex flex-row overscroll-none ">
      <NavbarFactions className="" units={unitsByFaction} />

      <button className=" bg-neutral-400 text-neutral-50 font-semibold py-2 px-4 rounded items-center w-[12rem] ml-auto">
        <Link href={`/`}>Return to Main Page</Link>
      </button>
    </div>
  );
}
