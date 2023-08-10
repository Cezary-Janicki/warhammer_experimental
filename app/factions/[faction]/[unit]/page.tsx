import Link from "next/link";
import Datasheets from "../../../(components)/dataFetching/Datasheets";
import UnitStatsTable from "@/app/(components)/pageComponents/UnitStatsTable";
import UnitWargearTable from "@/app/(components)/pageComponents/UnitWargearTable";
import Datasheets_keywords from "@/app/(components)/dataFetching/Datasheets_keywords";
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
async function getUnitKeywords(props: string) {
  const keywords = await Datasheets_keywords();
  let filteredKeywords: any[] = [];
  const filter = keywords.filter(function (keyword: any) {
    if (
      keyword.datasheet_id == props &&
      keyword.is_faction_keyword == "false"
    ) {
      return filteredKeywords.push(keyword);
    }
  });
  filter;
  return filteredKeywords;
}

async function getFactionKeywords(props: string) {
  const keywords = await Datasheets_keywords();
  let filteredKeywords: any[] = [];
  const filter = keywords.filter(function (keyword: any) {
    if (keyword.datasheet_id == props && keyword.is_faction_keyword == "true") {
      return filteredKeywords.push(keyword);
    }
  });
  filter;
  return filteredKeywords;
}

async function getModelId(props: string) {
  const model = decodeURI(props).replaceAll("%3A", ":");
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
  const unitName = decodeURI(props).replaceAll("%3A", ":");
  let filteredDatasheets: any[] = [];
  data.map((item: { name: string }) => {
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
  const datasheets_options = await datasheetOptions(modelId);
  const unit_keywords = await getUnitKeywords(modelId);
  const faction_keywords = await getFactionKeywords(modelId);
  // const cleanComp = datasheets[0].unit_composition.replace(/<\/?[^>]+(>|$)/g, "");
  const cleanComp =
    datasheets[0].unit_composition === null ||
    datasheets[0].unit_composition === undefined
      ? ""
      : datasheets[0].unit_composition.replace(/<\/?[^>]+(>|$)/g, "");
  const wargear = await datasheetsWargear(modelId, faction);
  return (
    <>
      <p>Faction: {faction}</p>
      <p>Unit: {decodeURI(unit)}</p>
      <p>Model id: {modelId}</p>
      <p>
        <Link href={`./factions/${faction}`}>Return to Faction Page</Link>
      </p>
      <p>
        <Link href={`./`}>Return to Main Page</Link>
      </p>
      <div
        className={
          "bg-neutral-800 text-neutral-50 text-center text-2xl font-bold rounded-md p-2.5 drop-shadow-md"
        }
      >
        {decodeURI(unit)}
      </div>
      <UnitStatsTable models={selectTables} />
      <div
        className={
          "bg-neutral-50 border border-neutral-300 rounded-md p-2.5  drop-shadow-md"
        }
      >
        <p className={"ml-2.5"}>{cleanComp}</p>
      </div>
      <UnitWargearTable
        allWargear={wargear.allWargear}
        allWargearList={wargear.allWargearList}
        allCombiWeaponsList={wargear.allCombiWeaponsList}
        modelAbilites={wargear.modelAbilites}
        otherWargear={wargear.otherWargear}
        datasheets_options={datasheets_options}
        unit_keywords={unit_keywords}
        faction_keywords={faction_keywords}
        factionAbilites={wargear.factionAbilites}
        datasheets={datasheets}
      />
    </>
  );
}
