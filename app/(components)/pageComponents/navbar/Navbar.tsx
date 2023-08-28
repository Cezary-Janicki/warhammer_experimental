import getAllDatasheets from "../../dataFetching/Datasheets";
import BattlefieldRoles from "../../dataFetching/BattlefieldRoles";
import NavbarFactions from "./Factions";

async function getUnitsByFaction() {
  const data = await getAllDatasheets();
  return data;
}
export default async function Navbar() {
  const unitsByFaction = await getUnitsByFaction();
  const roles = BattlefieldRoles();
  // i could utilize useMemo to memoize the whole dataset so that it wouldn't need to be reloaded
  // the navbar popup works now i need to make a 2nd one that would filter factions and pass faction data
  return <NavbarFactions units={unitsByFaction} roles={roles} />;
}
