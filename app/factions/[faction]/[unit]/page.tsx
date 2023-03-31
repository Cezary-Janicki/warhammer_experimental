import Link from "next/link";
import Datasheets from "../../../(components)/dataFetching/Datasheets";
import UnitStatsTable from "@/app/(components)/pageComponents/UnitStatsTable";
import { createUnitTables } from "@/app/(components)/createUnitTables";
export async function generateStaticParams() {
  const xxx = await createArray();
  return xxx;
}
async function createArray() {
  const units = await Datasheets();
  return units.map((item: { faction_id: string; name: string }) => ({
    faction: `${item.faction_id}`,
    unit: `${item.name}`,
  }));
}

async function getModelId(props: string) {
  const model = decodeURI(props);
  const models = await Datasheets();
  const filteredModels = models.filter(function (test: any) {
    if (test.name === model) {
      return test.id;
    }
  });
  return filteredModels[0].id;
}

export default async function Page({
  params,
}: {
  params: { faction: string; unit: string };
}) {
  const { faction, unit } = await params;
  const modelId = await getModelId(unit);
  const unitTables = await createUnitTables(modelId);

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
      <UnitStatsTable models={unitTables} />
    </>
  );
}
