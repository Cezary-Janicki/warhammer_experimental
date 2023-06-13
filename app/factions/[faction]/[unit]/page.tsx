import Link from "next/link";
import Datasheets from "../../../(components)/dataFetching/Datasheets";
import UnitStatsTable from "@/app/(components)/pageComponents/UnitStatsTable";
import UnitWargearTable from "@/app/(components)/pageComponents/UnitWargearTable";
import { datasheetOptions } from "@/app/(components)/datasheetOptions";
import { createUnitTables } from "@/app/(components)/createUnitTables";
import { selectUnitTables } from "@/app/(components)/selectUnitTables";
import { datasheetsWargear } from "@/app/(components)/wargearOptions";
import parse from "node-html-parser";
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
async function getDatasheetDataByModel(props: string) {
  const data = await Datasheets();
  const unitName = decodeURI(props);
  let filteredDatasheets: any[] = [];
  data.map((item) => {
    if (item.name === unitName) {
      return filteredDatasheets.push(item);
    }
  });
  return filteredDatasheets;
}
export default async function Page({
  params,
}: {
  params: { faction: string; unit: string };
}) {
  const { faction, unit } = await params;
  const modelId = await getModelId(unit);
  // const unitTables = await createUnitTables(modelId);
  const selectTables = await selectUnitTables(modelId);
  const datasheets = await getDatasheetDataByModel(unit);
  const datasheets_options = await datasheetOptions(modelId); // this doesn't filter options
  const cleanComp = datasheets[0].unit_composition.replace(/<\/?[^>]+(>|$)/g, "");
  const wargear = await datasheetsWargear(modelId);
  // const htmlDoc = parse(test);
  // console.log("html doc", htmlDoc);
// console.log("select tables", SelectUnitTables(modelId))
  return (
    // to get all of the wargear i need to search datasheets_wargear for model i want
    // and then get all of the wargear id's
    // to get options for a model import datasheets_options by id
    // weapons/psyker powers are listed in datasheets.csv
    <>
      <p>Faction: {faction}</p>
      <p>Unit: {decodeURI(unit)}</p>
      <p>
        <Link href={`./factions/${faction}`}>Return to Faction Page</Link>
      </p>
      <p>
        <Link href={`./`}>Return to Main Page</Link>
      </p>
      <p>{cleanComp}</p>
      {/* <UnitStatsTable models={unitTables} /> */}
      <UnitStatsTable models={selectTables} /> 
      <UnitWargearTable allWargear={wargear.allWargear}
                        allWargearList={wargear.allWargearList} />
      
    </>
  );
}
