import Link from "next/link";
import Datasheets from "../../../(components)/dataFetching/Datasheets";
// import { getDatasheetByFaction } from "../../../(components)/dataFetching/Datasheets";
import UnitStatsTable from "@/app/(components)/pageComponents/UnitStatsTable";
import Datasheets_models from "@/app/(components)/dataFetching/Datasheets_models";

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
// async function getUnitsByFaction(faction: string) {
//   const data = await getDatasheetByFaction(faction);
//   return data; // prodoably redundant right now but going to keep it
// }

async function getDatasheetModels(props: string) {
  const datasheetModels = await Datasheets_models();
  const filteredModels = datasheetModels.filter(function (test: any) {
    return test.name === props;
  });
  return filteredModels;
}

async function getModelId(model: string) {
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
  const models = await getDatasheetModels(decodeURI(unit));
  const modelId = await getModelId(unit);

  // console.log("unit id", modelId);
  // console.log("unit name", decodeURI(unit));
  // console.log("models", models); // this properly fetches all of the model stats

  // const unitsByFaction = await getUnitsByFaction(`${faction}`);
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
      <UnitStatsTable models={models} />
      {/* all of the data needed for Unit Stats Table would need to be fetched here and passed into the component as props
          This also goes for any other data that other client side component could need */}
    </>
  );
}
