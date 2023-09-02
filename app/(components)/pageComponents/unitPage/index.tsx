import Header from "./unitWargearTableComonents/tables/Header";
import UnitStatsTable from "./pageComponents/UnitStatsTable";
import UnitWargearTable from "./pageComponents/UnitWargearTable";
export default function UnitPage(props: {
  unit: string;
  datasheets: any;
  datasheets_options: any;
  unit_keywords: any;
  faction_keywords: any;
  wargear: any;
  models: any;
}) {
  const unit = props.unit;
  const datasheets = props.datasheets;
  const datasheets_options = props.datasheets_options;
  const unit_keywords = props.unit_keywords;
  const faction_keywords = props.faction_keywords;
  const wargear = props.wargear;
  const selectTables = props.models;

  return (
    <div>
      <Header unit={unit} />
      <UnitStatsTable models={selectTables} datasheets={datasheets} />

      <UnitWargearTable
        allWargear={wargear.allWargear}
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
