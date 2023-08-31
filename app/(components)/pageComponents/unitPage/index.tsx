import Header from "./unitWargearTableComonents/tables/Header";
import UnitStatsTable from "./pageComponents/UnitStatsTable";
import UnitWargearTable from "./pageComponents/UnitWargearTable";
export default function UnitPage({
  unit,
  datasheets,
  datasheets_options,
  unit_keywords,
  faction_keywords,
  wargear,
  models,
}: {
  unit: string;
  datasheets: any;
  datasheets_options: any;
  unit_keywords: any;
  faction_keywords: any;
  wargear: any;
  models: any;
}) {
  return (
    <div>
      <Header unit={unit} />
      <UnitStatsTable models={models} />

      <UnitWargearTable
        allWargearList={wargear.allWargearList}
        allCombiWeaponsList={wargear.allCombiWeaponsList}
        modelAbilites={wargear.modelAbilites}
        otherWargear={wargear.otherWargear}
        datasheets_options={datasheets_options}
        unit_keywords={unit_keywords}
        faction_keywords={faction_keywords}
        factionAbilites={wargear.factionAbilites}
        datasheets={datasheets}
      />
    </div>
  );
}
