import { MainFactions } from "../../../(components)/dataFetching/Factions";
import Datasheets from "../../../(components)/dataFetching/Datasheets";
import { getDatasheetByFaction } from "../../../(components)/dataFetching/Datasheets";

async function fetch(props: string) {
  const data = await getDatasheetByFaction(props);
  return data;
}
async function createArray() {
  const units = await Datasheets();
  console.log("units", units[0].id); // i somehow need to get the id from a file i dont know why it's invalid
  // even when fist header is changed it still returns in apostrophes https://github.com/mholt/PapaParse/issues/407#issuecomment-388314710

  return units.map((item: { faction_id: string; name: string }) => ({
    faction: `${item.faction_id}`,
    unit: `${item.name}`,
  }));
}
export async function generateStaticParams() {
  const factions = await MainFactions();
  const xxx = await createArray();
  return xxx;
}

export default async function Page({
  params,
}: {
  params: { faction: string; unit: string };
}) {
  const { faction, unit } = await params;
  const data = await fetch("ORK");

  return (
    <>
      <p>Faction: {faction}</p>
      <p>Unit: {unit}</p>
    </>
  );
}
