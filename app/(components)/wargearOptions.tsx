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
  let allWargearList: any[] = [];
  let allCombiWeapons: any[] = []; // all weapons with duped combi guns
  let allCombiWeaponsList: any[] = []; // filtered combi weapons
  let testArray2: any[] = [];

  datasheetsWargear.map((item: { datasheet_id: string }) => {
    if (item.datasheet_id === modelId) {
      return allWargear.push(item);
    }
  });

  allWargear.map((item) => {
    wargearList.map((item2: { wargear_id: any }) => {
      if (item.wargear_id === item2.wargear_id) {
        allWargearList.push(item2);
      }
    });
  });

  allWargearList.map((item, index) => {
    let filterResults = wargearList.filter(function (entry: any) {
      return entry.wargear_id === item.wargear_id;
    });
    allCombiWeapons.filter(function (entry) {
      if (entry[0].wargear_id === filterResults[0].wargear_id) {
        entry.forEach((item: any) => {
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
          record[1].wargear_id == rec[1].wargear_id && //
          record[1].name == rec[1].name &&
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
    wargear.forEach((item) => {
      if (item.id == combi[0].wargear_id) {
        combi.unshift(item);
      }
    });
  });

  const datasheetsAbilites = await getDatasheetsAbilites();
  const abilites = await getAbilites();
  let modelAbilites: any[] = [];
  let otherWargear: any[] = [];
  let keyWords: any[] = [];
  datasheetsAbilites.map((item: { datasheet_id: string; ability_id: any }) => {
    abilites.map(
      (item2: {
        id: any;
        is_other_wargear: string;
        type: string;
        faction_id: string;
      }) => {
        if (
          item.datasheet_id === modelId &&
          item2.id === item.ability_id &&
          item2.faction_id == factionId
        ) {
          //  modelAbilites.push(item2)
          if (item2.is_other_wargear === "true") {
            otherWargear.push(item2);
          }
          if (item2.type === "" && item2.is_other_wargear === "false") {
            modelAbilites.push(item2);
          } else {
            keyWords.push(item2);
          }
        }
      }
    );
  });

  return {
    allWargearList,
    allWargear,
    allCombiWeaponsList,
    modelAbilites,
    otherWargear,
  };
}
