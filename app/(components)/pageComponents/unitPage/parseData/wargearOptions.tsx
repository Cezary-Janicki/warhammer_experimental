import Datasheets_wargear from "@/app/(components)/dataFetching/Datasheets_wargear";
import Wargear from "@/app/(components)/dataFetching/Wargear";
import Wargear_list from "@/app/(components)/dataFetching/Wargear_list";
import Abilites from "@/app/(components)/dataFetching/Abilities";
import Datasheets_abilities from "@/app/(components)/dataFetching/Datasheets_abilities";
async function getDatasheetsWargear() {
  const data = await Datasheets_wargear();
  return data;
}
async function getWargear() {
  const data = await Wargear();
  return data;
}
async function getWargearList() {
  const data = await Wargear_list();
  return data;
}
async function getAbilites() {
  const data = await Abilites();
  return data;
}
async function getDatasheetsAbilites() {
  const data = await Datasheets_abilities();
  return data;
}
export async function datasheetsWargear(props: string, faction: string) {
  const getModelId = (id: string) => {
    if (id.toString().length === 9) {
      return id;
    } else {
      return id.toString().padStart(9, "0");
    }
  };
  const modelId = getModelId(props);
  const factionId = faction;
  const datasheetsWargear = await getDatasheetsWargear(); // wargear id's
  const wargear = await getWargear(); // wargear
  const wargearList = await getWargearList();
  let allWargear: any[] = [];
  interface IAllWargearList {
    wargear_id: number;
    line: number;
    name: string;
    Range: string;
    type: string;
    S: number;
    AP: number;
    D: number;
    abilities: string;
  }
  let allWargearList: IAllWargearList[] = [];
  interface IWeapons {
    wargear_id: number;
    line: number;
    name: string;
    Range: string;
    type: string;
    S: number;
    AP: number;
    D: number;
    abilities: string;
  }
  interface ICombiHeader {
    id: number;
    name: string;
    type: string;
    description: string;
    source_id: number;
    is_relic: string; // should be boolean
    faction_id: string;
    faction_name: string;
    legend: string;
  }
  let allCombiWeapons: any[] = []; // all weapons with duped combi guns
  let allCombiWeaponsList: any[] = []; // filtered combi weapons
  let testArray2: any[] = [];

  datasheetsWargear.map((item: { datasheet_id: string }) => {
    if (item.datasheet_id === modelId) {
      return allWargear.push(item);
    }
  });

  allWargear.map((item) => {
    wargearList.map((item2: IAllWargearList) => {
      if (item.wargear_id === item2.wargear_id) {
        item2.wargear_id = Number(item2.wargear_id);
        item2.line = Number(item2.line);
        item2.S = Number(item2.S);
        item2.AP = Number(item2.AP);
        item2.D = Number(item2.D);
        allWargearList.push(item2);
      }
    });
  });

  allWargearList.map((item, index) => {
    let filterResults = wargearList.filter(function (entry: IWeapons) {
      return entry.wargear_id === item.wargear_id;
    });
    allCombiWeapons.filter(function (entry) {
      if (entry[0].wargear_id === filterResults[0].wargear_id) {
        entry.forEach((item: IWeapons) => {
          testArray2.push(item);
        });
        allCombiWeaponsList.push(filterResults);
      }
    });

    allCombiWeapons.push(filterResults);
  });
  allWargearList.filter((item) => !testArray2.includes(item));

  function filterObjectArray(arrayOfObjects: any[]) {
    let filteredObject = arrayOfObjects.forEach((record, recordIndex) => {
      arrayOfObjects.forEach((rec, recIndex) => {
        if (
          record[1]?.wargear_id == rec[1]?.wargear_id &&
          record[1]?.name == rec[1]?.name &&
          recIndex != recordIndex
        ) {
          arrayOfObjects.splice(recIndex, 1);
        }
      });
    });
    return filteredObject;
  }
  // removing duplicate combi weapon entries from all wargearlist object
  filterObjectArray(allCombiWeaponsList);
  allWargearList = allWargearList.filter((item) => !testArray2.includes(item));

  // adding combi weapon headers
  allCombiWeaponsList.forEach((combi) => {
    wargear.forEach((combiHeader: ICombiHeader) => {
      if (combiHeader.id == combi[0].wargear_id) {
        combiHeader.id = Number(combiHeader.id);
        combiHeader.source_id = Number(combiHeader.source_id);
        combi.unshift(combiHeader);
      }
    });
  });

  const datasheetsAbilites = await getDatasheetsAbilites();
  const abilites = await getAbilites();
  interface IAbilities {
    id: number;
    type: string;
    name: string;
    legend: string;
    is_other_wargear: string;
    faction_id: string;
    description: string;
  }
  let modelAbilites: any[] = [];
  let factionAbilites: any[] = [];
  let otherWargear: any[] = [];
  let keyWords: any[] = [];
  datasheetsAbilites.map((item: { datasheet_id: string; ability_id: any }) => {
    abilites.map((item2: IAbilities) => {
      if (
        item.datasheet_id === modelId &&
        item2.id === item.ability_id &&
        item2.faction_id == factionId
      ) {
        if (item2.is_other_wargear === "true") {
          item2.id = Number(item2.id);
          otherWargear.push(item2);
        }
        if (item2.type === "" && item2.is_other_wargear === "false") {
          item2.id = Number(item2.id);
          modelAbilites.push(item2);
        }
        if (item2.type === "Abilities") {
          item2.id = Number(item2.id);
          factionAbilites.push(item2);
        } else {
          keyWords.push(item2);
        }
      }
    });
  });
  return {
    allWargearList,
    allWargear,
    allCombiWeaponsList,
    modelAbilites,
    otherWargear,
    factionAbilites,
  };
}
