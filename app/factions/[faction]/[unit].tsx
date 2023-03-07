import { MainFactions } from "../../(components)/dataFetching/Factions";
export async function generateStaticParams() {
  // const data = await MainFactions();
  // let factionNames = [];
  // data.map((item, index) => {
  //   factionNames.push(item.name);
  // });
  // return factionNames.map((factionName) => ({
  //   slug: factionName.slug,
  // }));
  return [
    { faction: "a", unit: "1" },
    { faction: "b", unit: "2" },
    { faction: "c", unit: "3" },
  ];
}

// export default function Page() {
//   const { slug } = params;
//   console.log("params", params);
//   return <div>My Post</div>;
// }
export default function Page({
  params,
}: {
  params: { faction: string; unit: string };
}) {
  const { faction, unit } = params;
  return (
    <>
      <p>Faction</p> {faction}
      <p>Unit</p> {unit}
    </>
  );
}
