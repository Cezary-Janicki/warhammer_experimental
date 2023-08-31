import * as React from "react";

import NavbarFactions from "./Factions";

// async function getUnitsByFaction() {
//   const data = await getAllDatasheets();
//   return data;
// }
export default function Navbar(props: any) {
  return <NavbarFactions units={props.unitsByFaction} />;
}
