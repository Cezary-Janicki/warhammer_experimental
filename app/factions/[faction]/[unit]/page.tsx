import Link from "next/link";
import Datasheets from "../../../(components)/dataFetching/Datasheets";
// import { getDatasheetByFaction } from "../../../(components)/dataFetching/Datasheets";
import UnitStatsTable from "@/app/(components)/pageComponents/UnitStatsTable";
import Datasheets_models from "@/app/(components)/dataFetching/Datasheets_models";
import Datsheets_damage from "@/app/(components)/dataFetching/Datasheets_Damage";
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

async function getDatasheetModelsById(props: number) {
  // const unitId = props.toString();
  // console.log("props", props); // props return a number as they should
  const datasheetModels = await Datasheets_models();
  const datasheetsDamage = await Datsheets_damage();
  const modelId = (id: number) => {
    if (id.toString().length === 9) {
      return id;
    } else {
      return id.toString().padStart(9, "0");
    }
  };
  let filteredModels: any[] = [];
  datasheetModels.map((item, index) => {
    if (item.datasheet_id === modelId(props)) {
      return filteredModels.push(item);
    }
  });
  datasheetsDamage.map((item, index) => {
    if (item.datasheet_id === modelId(props)) {
      return filteredModels.push(item);
    }
  }); // the datasheetsDamage array needs to be restructured to fit with other arrays
  // I need to make it into an object with multiple arrays first returned array being the key
  console.log("filtered models", filteredModels);
  return filteredModels; // getDatasheetModelsById function needs to check if a model is in the datasheets_damage table and if it is so
  // then it needs to add additional objects to the array
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
  const modelsById = await getDatasheetModelsById(modelId);
  // console.log("models by id", modelsById);

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
      <UnitStatsTable models={modelsById} />
      {/* all of the data needed for Unit Stats Table would need to be fetched here and passed into the component as props
          This also goes for any other data that other client side component could need */}
    </>
  );
}
