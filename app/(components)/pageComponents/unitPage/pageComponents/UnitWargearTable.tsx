"use client";
import * as React from "react";
import MountCheck from "../../../mountCheck";
import WeaponStats from "../unitWargearTableComonents/tables/weaponStats";
import CombiWeaponStats from "../unitWargearTableComonents/tables/combiWeaponStats";
import OtherWargearOptions from "../unitWargearTableComonents/tables/otherWargearOptions";
import AbilitesTraits from "../unitWargearTableComonents/tables/abilitesTraits";
import PriestPsyker from "../unitWargearTableComonents/tables/priestPsyker";
import Keywords from "../unitWargearTableComonents/tables/keywords";
import UnitComposition from "../unitWargearTableComonents/tables/UnitComposition";
export default function UnitWargearTable(props: any) {
  const datasheets = props.datasheets;
  const allWargearList = props.allWargearList;
  const allCombiWeaponsList = props.allCombiWeaponsList;
  const allWargear = props.allWargear;
  const modelAbilites = props.modelAbilites;
  const otherWargear = props.otherWargear;
  const datasheets_options = props.datasheets_options;
  const unit_keywords = props.unit_keywords;
  const faction_keywords = props.faction_keywords;
  const factionAbilites = props.factionAbilites;
  const datasheet_abilities = props.datasheet_abilities;

  return (
    <div className={"relative z-0 drop-shadow-md"}>
      <MountCheck key={datasheets[0].id}>
        {/* Unit Composition  */}
        <UnitComposition datasheets={datasheets} />
        {/* Weapon stats table */}
        <WeaponStats allWargearList={allWargearList} allWargear={allWargear} />

        {/* Combi weapons table section */}
        <CombiWeaponStats
          allCombiWeaponsList={allCombiWeaponsList}
          allWargear={allWargear}
        />
        {/* Other wargear and wargear options  */}
        <OtherWargearOptions
          otherWargear={otherWargear}
          datasheets_options={datasheets_options}
          datasheet_abilities={datasheet_abilities}
        />
        {/* Abilites/traits table */}
        <AbilitesTraits
          modelAbilites={modelAbilites}
          facitonAbilities={factionAbilites}
        />
        {/* Priest/psyker table */}
        <PriestPsyker datasheets={datasheets} />
        {/* Faction and unit keywords tables*/}
        <Keywords
          unit_keywords={unit_keywords}
          faction_keywords={faction_keywords}
        />
      </MountCheck>
    </div>
  );
}
