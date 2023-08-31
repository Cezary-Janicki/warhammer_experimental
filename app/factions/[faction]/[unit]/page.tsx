import Link from "next/link";
import Datasheets from "../../../(components)/dataFetching/Datasheets";
import UnitStatsTable from "@/app/(components)/pageComponents/unitPage/pageComponents/UnitStatsTable";
import UnitWargearTable from "@/app/(components)/pageComponents/unitPage/pageComponents/UnitWargearTable";
import UnitPage from "@/app/(components)/pageComponents/unitPage/index";
import Datasheets_keywords from "@/app/(components)/dataFetching/Datasheets_keywords";
import { datasheetOptions } from "@/app/(components)/pageComponents/unitPage/parseData/datasheetOptions";
import { selectUnitTables } from "@/app/(components)/pageComponents/unitPage/parseData/selectUnitTables";
import { datasheetsWargear } from "@/app/(components)/pageComponents/unitPage/parseData/wargearOptions";
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
  const selectTables = await selectUnitTables(modelId);
  const datasheets = await getDatasheetDataByModel(unit);
  const datasheets_options = await datasheetOptions(modelId);
  const unit_keywords = await getUnitKeywords(modelId);
  const faction_keywords = await getFactionKeywords(modelId);
  const wargear = await datasheetsWargear(modelId, faction);
  return (
    <>
      <UnitPage
        unit={unit}
        wargear={wargear}
        datasheets_options={datasheets_options}
        unit_keywords={unit_keywords}
        faction_keywords={faction_keywords}
        datasheets={datasheets}
        models={selectTables}
      />
    </>
  );
}
