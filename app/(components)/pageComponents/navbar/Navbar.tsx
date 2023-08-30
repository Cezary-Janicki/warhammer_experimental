import * as React from "react";
import getAllDatasheets from "../../dataFetching/Datasheets";
import BattlefieldRoles from "../../dataFetching/BattlefieldRoles";
import NavbarFactions from "./Factions";

// async function getUnitsByFaction() {
//   const data = await getAllDatasheets();
//   return data;
// }
export default function Navbar(props: { unitsByFaction: any }) {
  const unitsByFaction = props.unitsByFaction;
  const roles = BattlefieldRoles();
  return <NavbarFactions units={unitsByFaction} roles={roles} />;
}
