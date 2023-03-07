// // import { MainFactions } from "../../(components)/dataFetching/Factions";
// export async function generateStaticParams() {
//   // const data = await MainFactions();
//   // let factionNames = [];
//   // data.map((item, index) => {
//   //   factionNames.push(item.name);
//   // });
//   // return factionNames.map((factionName) => ({
//   //   slug: factionName.slug,
//   // }));
//   return [
//     { faction: "a", unit: "1" },
//     { faction: "b", unit: "2" },
//     { faction: "c", unit: "3" },
//   ];
// }

// export default function Page({
//   params,
// }: {
//   params: { faction: string; unit: string };
// }) {
//   const { faction, unit } = params;
//   return (
//     <>
//       <p>Faction</p> {faction}
//       <p>Unit</p> {unit}
//     </>
//   );
// }
//////////////////
export function generateStaticParams() {
  const params = [
    { category: "a", product: "1" },
    { category: "b", product: "2" },
    { category: "c", product: "3" },
  ];

  return params;
}
// Three versions of this page will be statically generated
// using the `params` returned by `generateStaticParams`
// - /product/a/1
// - /product/b/2
// - /product/c/3
export default function Page({
  params,
}: {
  params: { category: string; product: string };
}) {
  const { category, product } = params;
  return (
    <>
      <p>Category</p> {category}
      <p>Product</p> {product}
    </>
  );
}
