import UnitStatsTable from "@/app/(components)/pageComponents/UnitStatsTable";

import { createUnitTables } from "./createUnitTables";
import { createUnitTablesWithoutBrackets } from "./createUnitTablesWithoutBrackets";
import Datsheets_damage from "@/app/(components)/dataFetching/Datasheets_Damage";
export  async function selectUnitTables(props:any) {
    const datasheetsDamage = await Datsheets_damage();
  
    const modelId = (id: number) => {
    if (id.toString().length === 9) {
      return id;
    } else {
      return id.toString().padStart(9, "0");
    }
  };

    let damageTables: any[] = [];
  datasheetsDamage.map((item) => {
    ``;
    if (item.datasheet_id === modelId(props)) {
      return damageTables.push(item);
    }
  });
// console.log("datasheets damage",damageTables)
//         return createUnitTablesWithoutBrackets(props)

    if(Object.keys(damageTables).length>0){
        return createUnitTables(props)
    }
    else{
        return createUnitTablesWithoutBrackets(props)
    }
}