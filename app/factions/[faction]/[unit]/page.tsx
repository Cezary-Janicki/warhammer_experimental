import Datasheets from "../../../(components)/dataFetching/Datasheets";
import UnitPage from "@/app/(components)/pageComponents/unitPage/index";
import Datasheets_keywords from "@/app/(components)/dataFetching/Datasheets_keywords";
import { datasheetOptions } from "@/app/(components)/pageComponents/unitPage/parseData/datasheetOptions";
import { selectUnitTables } from "@/app/(components)/pageComponents/unitPage/parseData/selectUnitTables";
import { datasheetsWargear } from "@/app/(components)/pageComponents/unitPage/parseData/wargearOptions";
import Datasheets_stratagems from "@/app/(components)/dataFetching/Datasheets_stratagems";
import Stratagems from "@/app/(components)/dataFetching/Stratagems";
import StratagemPhases from "@/app/(components)/dataFetching/StratagemPhases";
export async function generateStaticParams() {
  const data = await createArray();
  return data;
}
async function createArray() {
  const units = await Datasheets();
  return units.map((item: { faction_id: string; name: string }) => ({
    faction: `${item.faction_id}`,
    unit: `${item.name.replaceAll(" ", "_")}`,
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
  const model = decodeURI(props).replaceAll("%3A", ":").replaceAll("_", " ");
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
async function getStratagems(datasheetId: string) {
  const stratagemList = await Datasheets_stratagems();
  const stratagems = await Stratagems();
  let filteredStratagemsList: any[] = [];
  stratagemList.map((item: { datasheet_id: string; stratagem_id: string }) => {
    if (datasheetId == item.datasheet_id) {
      stratagems.forEach((stratagem: { id: string }) => {
        if (stratagem.id === item.stratagem_id) {
          return filteredStratagemsList.push(stratagem);
        }
      });
    }
  });

  return filteredStratagemsList;
}
export default async function Page({
  params,
}: {
  params: { faction: string; unit: string };
}) {
  const faction = await params.faction;
  const unit = await params.unit.replaceAll("_", " ");
  const modelId = await getModelId(unit);
  const selectTables = await selectUnitTables(modelId);
  const datasheets = await getDatasheetDataByModel(unit);
  const datasheets_options = await datasheetOptions(modelId);
  const unit_keywords = await getUnitKeywords(modelId);
  const faction_keywords = await getFactionKeywords(modelId);
  const wargear = await datasheetsWargear(modelId, faction);
  const stratagems = await getStratagems(selectTables[0].datasheet_id);
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
        stratagems={stratagems}
      />
    </>
  );
}
