import Datasheets_wargear from "@/app/(components)/dataFetching/Datasheets_wargear";
import Wargear from "@/app/(components)/dataFetching/Wargear"
import Wargear_list from "@/app/(components)/dataFetching/Wargear_list"
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
export async function datasheetsWargear(props: string) {
  const getModelId = (id: number) => {
    if (id.toString().length === 9) {
      return id;
    } else {
      return id.toString().padStart(9, "0");
    }
  };
  const modelId = getModelId(props);
  //   console.log("props", modelId);

  const datasheetsWargear = await getDatasheetsWargear(); // wargear id's
  const wargear = await getWargear()   // wargear
  const wargearList = await getWargearList()
  let allWargear: any[] = [];
  let allWargearList: any[] = [];

  datasheetsWargear.map((item, index) => {
    if (item.datasheet_id === modelId) {
      return allWargear.push(item);
    }
  });


   allWargear.map((item, index) => {
    wargearList.map((item2,index2)=>{
    if (item.wargear_id === item2.wargear_id) {
        allWargearList.push(item2);
    }})
  });

  // i need to get all of the abilites from datasheets_abilites, then if it is wargear display it in other wargear
  // if it is an ability then display it in abilities below
  // 
return {allWargearList ,allWargear}
}
