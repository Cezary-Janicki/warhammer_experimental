import Datasheets_models from "@/app/(components)/dataFetching/Datasheets_models";
import Datsheets_damage from "@/app/(components)/dataFetching/Datasheets_Damage";

export async function createUnitTablesWithoutBrackets(props: number) {
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
  datasheetModels.map((item) => {
    if (item.datasheet_id === modelId(props)) {
      return filteredModels.push(item);
    }
  });
  let damageTables: any[] = [];
  datasheetsDamage.map((item) => {
    ``;
    if (item.datasheet_id === modelId(props)) {
      return damageTables.push(item);
    }
  });
  return filteredModels;
}
