// // here i need to make an array that would be as follows
// // 1. faction id 2. faction name 3. unit name 4.unit id 5. unit role
// // so that I can use it to generate pages

// import {Factions} from "../(components)/dataFetching/Factions"
// import {Data}
import { MainFactions } from '../../../(components)/dataFetching/Factions'
import { getDatasheetByFaction } from '../../../(components)/dataFetching/Datasheets'

async function fetchFactions () {
  const data = await MainFactions()
  return data
}
async function fetchDatasheetByFaction ({ props: string }) {
  const data = await getDatasheetByFaction(props)
  return data
}

export default async function unitsByFaction () {
  const factions = await fetchFactions()
  // const units = ()=>{let data= await fetchDatasheetByFaction() return data}
  // factions.map((faction)=>{
  // const units = await fetchDatasheetByFaction()

  // })
  // here i need an function that would map each item in fetch factions and for each item it would map all datasheets and filter out the faction specific ones
}
