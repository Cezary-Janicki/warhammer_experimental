import ArmiesByFaction from "@/app/(components)/dataFetching/ArmiesByFaction";

export default function getFactionName(props: string) {
  const factions = ArmiesByFaction();
  let factionName = "";
  Object.keys(factions).map((factionKeys: any, index) => {
    let factionArmies = Object.values(factions)[index];
    factionArmies.map((item: any) => {
      if (item.faction_id == props) {
        factionName = item.faction_name;
      }
    });
  });
  return factionName;
}
