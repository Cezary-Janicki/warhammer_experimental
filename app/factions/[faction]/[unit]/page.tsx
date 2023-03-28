import Link from "next/link";
import Datasheets from "../../../(components)/dataFetching/Datasheets";
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

async function getDatasheetModelsById(props: number) {
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
    if (item.datasheet_id === modelId(props)) {
      return damageTables.push(item);
    }
  });

  // function createDamageArray(bracketStats: any) {
  //   const damageArray = {};
  //   const keys = filteredModels[1];
  //   const values = bracketStats;
  //   Object.values(keys).forEach(
  //     (key, i) => (damageArray[key] = Object.values(values)[i])
  //   );
  //   // now i need to find a way to somwhow modify the damage stats into a new array
  //   // i need to make a copy of the old array with the basic stats in it and then replace the stats that bracket
  //   // return console.log("new arraty", damageArray);
  // }
  // const test = filteredModels.map((model: any, index: number) => {
  //   // i think that this function would need to map the damageTables
  //   console.log("filtered models", damageTables);
  //   const keys = filteredModels[1];
  //   const originalStats = Object.values(filteredModels)[0];
  //   const testFunction = () => {
  //     if (index <= 0) {
  //       return;
  //     } else {
  //       // the else function needs to go not nessesary right now
  //       let newArray = Object.values(filteredModels)[0];
  //       originalStats.map((newArrayItem, index) => {
  //         // return console.log("new array item", newArrayItem);
  //         // this map loops over every element of the original array
  //         // this map would need to check for every element in "model" and if it isn't present in damagebracket table(ie undefined) then it would replace the old value with new one
  //         model.map((damageTableItem, index) => {
  //           // this map replaces it if nessesary
  //           return console.log("nested map original stats item", newArrayItem); // why those lines return nothing? is it cos the else has no return?
  //         });
  //       });
  //     }
  //   };
  //   console.log("testfunction", testFunction());
  //   // return originalStats;

  //   // To prevent the script from selecting a nob/other model in the unit i could pass two seperate arrays with two tables

  //   // i could also use Object.fromEntries() function to do this I
  //   // Object would be created via map, the map would need to skip the first entry but then it would look like
  //   //damage.map(()=>{
  //   //entries <create a map here for a single damage bracket>
  //   //return push map to filteredModels
  // });

  function testArray() {
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
      // console.log("damage tables", bracketData());
      // console.log("damageKeys", damageKeys);
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

    // testModels.map((model) => { this is a working basic nested map
    //   // return console.log("this is unit", model.name);
    //   testDamage.map((damage) => {
    //     if (model.name === damage.name) {
    //       return console.log("this is damage for", model.name, damage);
    //     } else {
    //       return console.log("this model doesnt bracket");
    //     }
    //   });
    // });

    // console.log("damageKeys", damageKeys);
    // console.log("modelsKeys", modelsKeys);

    let testObject: any[] = [];
    filteredModels.map((model, modelIndex) => {
      const damageBracketValues = damageBrackets();
      const bracketingModelName = damageBracketValues[1]["Model"];
      if (model["name"] === bracketingModelName) {
        let tempModel = { ...model };
        damageBracketValues.map((damageValue, damageValueIndex) => {
          damageKeys.map((damageKey, damageKeyIndex) => {
            // make a copy array here
            modelsKeys.map((modelsKey, modelKeyIndex) => {
              // here i would need to loop damageBrackets to change each and every bracket
              if (damageKey !== "") {
                if (
                  damageKey === modelsKey &&
                  model["name"] === bracketingModelName
                ) {
                  tempModel[modelsKey] = damageValue[damageKey];

                  // if a change is detected swap the value here from damage brackets by index
                  // console.log(
                  //   "this model brackets:",
                  //   model.name,
                  //   "with a stat of",
                  //   modelsKey,
                  //   "at model index of ",
                  //   modelKeyIndex,
                  //   "stat value being changed is",
                  //   damageValue[damageKey],
                  //   "from",
                  //   model[damageKey]
                  // );

                  return;
                } else {
                  //   return testing.push(model.modelKey);
                }
              }
            });
          }); //dmg keys
          testObject.push(tempModel);
          tempModel = { ...model }; // without this line the code displays only the last iteration
        }); // dmg bracket values
      } // if loop
    }); // models loop
    console.log("test object", testObject);
    return testObject;
  }
  console.log("test array", testArray());
  // console.log("filtered models", filteredModels);
  return filteredModels;
  // return testArray(); //this throws up undefined
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
