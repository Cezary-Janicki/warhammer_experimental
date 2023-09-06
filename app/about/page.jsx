import { MainFactions } from "../(components)/dataFetching/Factions";

async function fetchFactions() {
  const data = await MainFactions();
  return data;
}

export default async function about() {
  const data = await fetchFactions();

  const factionNames = [];
  data.map((item, index) => {
    factionNames.push(item.name);
  });
  return (
    <>
      <p>about</p>
      {factionNames.map((factionName, FactionIndex) => {
        return <div key={FactionIndex}>Faction: {factionName}</div>;
      })}
    </>
  );
}
