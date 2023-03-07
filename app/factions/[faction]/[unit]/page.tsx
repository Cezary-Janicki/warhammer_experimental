import { MainFactions } from "../../../(components)/dataFetching/Factions";
// import Datasheets from "../../../(components)/dataFetching/Datasheets";
import { getDatasheetByFaction } from "../../../(components)/dataFetching/Datasheets";

async function fetch(props) {
  const data = await getDatasheetByFaction(props);
  return data;
}

export async function generateStaticParams() {
  const data = await MainFactions();
  let factionNames = [];
  data.map((item, index) => {
    factionNames.push(item.name);
  });
  // return factionNames.map((factionName) => ({
  //   slug: factionName.slug,
  // }));
  return [
    { faction: "Orks", unit: "Boyz" },
    { faction: "Orks", unit: "Warboss" },
    { faction: "SpaceMarines", unit: "Dreadnought" },
  ];
}

export default async function Page({
  params,
}: {
  params: { faction: any; unit: any };
}) {
  const { faction, unit } = params;
  console.log("unit ", unit);
  const data = await fetch("ORK");
  // console.log("data", data);

  return (
    <>
      <p>Faction: {faction}</p>
      <p>Unit: {unit}</p>
    </>
  );
}
