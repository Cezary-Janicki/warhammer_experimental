import * as React from "react";
import getAllDatasheets from "../../dataFetching/Datasheets";
import BattlefieldRoles from "../../dataFetching/BattlefieldRoles";
import NavbarFactions from "./Factions";

// async function getUnitsByFaction() {
//   const data = await getAllDatasheets();
//   return data;
// }
export default function Navbar(unitsByFaction: any) {
  const roles = BattlefieldRoles();
  return <NavbarFactions units={unitsByFaction} roles={roles} />;
}
