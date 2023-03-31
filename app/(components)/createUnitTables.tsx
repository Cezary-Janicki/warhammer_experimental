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

  function createDamageBracketArrays() {
    // creating the model keys array
    let modelsKeys = Object.keys(filteredModels[0]);
    // creating the bracket damage keys array
    let damageKeys = Object.values(damageTables[0]);
    damageKeys[0] = "datasheet_id";
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
        let damageArrayWithKeys = {};
        damageKeys.forEach((key, index) => {
          damageArrayWithKeys[key] = Object.values(damage)[index];
        });
        allBracketsWithKeys.push(damageArrayWithKeys);
      });

      return allBracketsWithKeys;
    };
    function clearName(props) {
      let data = props;
      data["name"] = "";
      data["line"] = "";
      data["base_size"] = "";
      return data;
    }
    let testObject: any[] = [];
    filteredModels.map((model, modelIndex) => {
      const damageBracketValues = damageBrackets();
      const bracketingModelName = damageBracketValues[1]["Model"];
      if (model["name"] === bracketingModelName) {
        let tempModel = { ...model };
        clearName(tempModel);
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
          clearName(tempModel); // without this line the code displays only the last iteration
        });
      }
    });
    return testObject;
  }

  const damageBracketArrays = await createDamageBracketArrays();

  damageBracketArrays.map((damageBracketArray, index) => {
    // first damage bracket array is the full strength one so we always want to ommit it
    if (index > 0) {
      filteredModels.splice(filteredModels.length - 1, 0, damageBracketArray);
      return;
    }
  });
  return filteredModels;
}
