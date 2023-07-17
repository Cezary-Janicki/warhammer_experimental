import Datasheets_wargear from "@/app/(components)/dataFetching/Datasheets_wargear";
import Wargear from "@/app/(components)/dataFetching/Wargear"
import Wargear_list from "@/app/(components)/dataFetching/Wargear_list"
import Abilites from "@/app/(components)/dataFetching/Abilities"
import Datasheets_abilities from "@/app/(components)/dataFetching/Datasheets_abilities"
async function getDatasheetsWargear() {
  const data = await Datasheets_wargear();
  return data;
}
async function getWargear(){
  const data= await Wargear()
  return data
}
async function getWargearList(){
  const data = await Wargear_list()
  return data
}
async function getAbilites(){
  const data = await Abilites()
  return data
}
async function getDatasheetsAbilites(){
  const data = await Datasheets_abilities()
  return data  
}
export async function datasheetsWargear(props: string) {
  const getModelId = (id: string) => {
    if (id.toString().length === 9) {
      return id;
    } else {
      return id.toString().padStart(9, "0");
    }
  };
  const modelId = getModelId(props);

  const datasheetsWargear = await getDatasheetsWargear(); // wargear id's
  const wargear = await getWargear()   // wargear
  const wargearList = await getWargearList()
  let allWargear: any[] = [];
  let allWargearList: any[] = [];
  let allCombiWeapons :any[] =[]; // all weapons with duped combi guns
  let testArray:any[]=[] // filtered combi weapons
  let testArray2:any[]=[];




  datasheetsWargear.map((item: { datasheet_id: string; }) => {
    if (item.datasheet_id === modelId) {
      return allWargear.push(item);
    }
  });


   allWargear.map((item) => {
    wargearList.map((item2: { wargear_id: any; })=>{
    if (item.wargear_id === item2.wargear_id) {
        allWargearList.push(item2);
    }})
  });

  // i need to write the function that would seperate the combi weapons from others
  // the function would need to look up the wargear_id, if the ID within allWargearList repeats then 
  // push both of items with repeating id into another object

allWargearList.map((item,index)=>{
let filterResults = wargearList.filter(function(entry:any){return entry.wargear_id===item.wargear_id})
allCombiWeapons.filter(function(entry){
  if(entry[0].wargear_id===filterResults[0].wargear_id){
    // console.log("item", item,index)
    testArray.push(filterResults)
    allWargearList.splice(index-1,2)
    allWargearList.splice(index-1,2) // this doesnt work as inteneded

  }
})

// console.log("dupe check", testArray)
allCombiWeapons.push(filterResults)
})
// console.log("all wargear list ",  allWargearList)

//  let filterResults = wargearList.filter(function(entry){return entry.wargear_id==="000000015"})
//  console.log("filter results", filterResults)

  const datasheetsAbilites = await getDatasheetsAbilites()
  const abilites = await getAbilites()
  let modelAbilites: any [] =[];
  let otherWargear: any[]=[];
  let keyWords: any[]=[];
  datasheetsAbilites.map((item: { datasheet_id: string; ability_id: any; })=>{
   abilites.map((item2: { id: any; is_other_wargear: string; type: string; })=>{
     if(item.datasheet_id=== modelId && item2.id===item.ability_id){
      //  modelAbilites.push(item2)
      if(item2.is_other_wargear==='true'){
        otherWargear.push(item2)
      }
      if(item2.type==='' && item2.is_other_wargear==='false'){
        modelAbilites.push(item2)
      }
      else{keyWords.push(item2)}
      }
    })
  })
  // console.log("testing", allWargearList)
  // combi weapons need to be sperated i could use MUI collapsible table for that


  // i need to get all of the abilites from datasheets_abilites, then if it is wargear display it in other wargear
  // if it is an ability then display it in abilities below 
  // 
return {allWargearList ,allWargear,modelAbilites,otherWargear}
}
