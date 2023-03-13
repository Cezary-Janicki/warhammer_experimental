import Link from "next/link";
import { MainFactions } from "../../../(components)/dataFetching/Factions";
import Datasheets, {
  getDatasheetByFactionAndRole,
} from "../../../(components)/dataFetching/Datasheets";
import { getDatasheetByFaction } from "../../../(components)/dataFetching/Datasheets";
import BattlefieldRoles from "../../../(components)/dataFetching/BattlefieldRoles";
import UnitStatsTable from "@/app/(components)/pageComponents/UnitStatsTable";
async function getUnitsByFaction(props: string) {
  const data = await getDatasheetByFaction(props);
  return data;
}

async function createArray() {
  const units = await Datasheets();
  return units.map((item: { faction_id: string; name: string }) => ({
    faction: `${item.faction_id}`,
    unit: `${item.name}`,
  }));
}
export async function generateStaticParams() {
  const xxx = await createArray();
  return xxx;
}

export default async function Page({
  params,
}: {
  params: { faction: string; unit: string };
}) {
  const { faction, unit } = await params;
  // const unitsByFaction = await getUnitsByFaction(`${faction}`);
  // const roles = BattlefieldRoles();
  return (
    <>
      <p>Faction: {faction}</p>
      <p>Unit: {decodeURI(unit)}</p>
      <p>
        <Link href={`./factions/${faction}`}>Return to Faction Page</Link>
      </p>
      <p>
        <Link href={`./`}>Return to Main Page</Link>
      </p>
      <UnitStatsTable />
    </>
  );
}
