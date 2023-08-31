import Datasheets_models from "@/app/(components)/dataFetching/Datasheets_models";
import Datsheets_damage from "@/app/(components)/dataFetching/Datasheets_Damage";

export async function createUnitTables(props: number) {
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
  datasheetModels.map((item: { datasheet_id: string | number }) => {
    if (item.datasheet_id === modelId(props)) {
      return filteredModels.push(item);
    }
  });
  let damageTables: any[] = [];
  datasheetsDamage.map((item: { datasheet_id: string | number }) => {
    ``;
    if (item.datasheet_id === modelId(props)) {
      return damageTables.push(item);
    }
  });
  function createDamageBracketArrays() {
    // creating the model keys array
    let modelsKeys = Object.keys(filteredModels[0]);
    // creating the bracket damage keys array
    let damageKeys: string[] = Object.values(damageTables[0]);
    damageKeys[0] = "datasheet_id"; // also trukkdoesnt bracket but it should
    damageKeys[1] = "line";
    damageKeys[2] = "W";

    let damageBrackets = () => {
      let bracketData = () => {
        let data = damageTables;
        data.shift();
        return data;
      };
      let allBracketsWithKeys: any[] = [];
      bracketData().map((damage, i) => {
        let damageArrayWithKeys: { [key: string]: any } = {};
        damageKeys.forEach((key, index) => {
          damageArrayWithKeys[key] = Object.values(damage)[index]; // this causes an error i need to read into this
        });
        allBracketsWithKeys.push(damageArrayWithKeys);
      });
      return allBracketsWithKeys;
    };

    function clearName(unitTable: any) {
      let data = unitTable;
      data["name"] = "";
      data["line"] = "";
      data["base_size"] = "";
      return data;
    }

    let testObject: any[] = [];
    filteredModels.map((model, modelIndex) => {
      const damageBracketValues = damageBrackets();
      const bracketingModelName =
        typeof damageBracketValues[1]["Model"] === "undefined"
          ? model["name"]
          : damageBracketValues[1]["Model"];
      // Line above omits the name check if there is only one model (name is undefied then)
      if (model["name"] === bracketingModelName) {
        let tempModel = { ...model };
        damageBracketValues.map((damageValue, damageValueIndex) => {
          damageKeys.map((damageKey, damageKeyIndex) => {
            modelsKeys.map((modelsKey, modelKeyIndex) => {
              if (damageKey !== "") {
                if (
                  damageKey === modelsKey &&
                  model["name"] === bracketingModelName &&
                  damageKey !== "line" &&
                  damageKey !== "name"
                ) {
                  tempModel[modelsKey] = damageValue[damageKey];
                  return;
                }
              }
            });
          }); //dmg keys
          testObject.push(tempModel);
          tempModel = { ...model };
          clearName(tempModel); // without this lin with e the code displays only the last iteration
        });
      }
    });
    return testObject;
  }

  const damageBracketArrays = await createDamageBracketArrays();
  if (filteredModels.length === 1) {
    return damageBracketArrays;
  } else {
    damageBracketArrays.push(filteredModels[1]);
    return damageBracketArrays;
  }
}
