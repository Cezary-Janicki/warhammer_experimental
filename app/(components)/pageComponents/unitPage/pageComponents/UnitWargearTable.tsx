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
export default function UnitWargearTable({
  datasheets,
  allWargearList,
  allCombiWeaponsList,
  modelAbilites,
  otherWargear,
  datasheets_options,
  unit_keywords,
  faction_keywords,
  factionAbilites,
}: any) {
  return (
    <div className={"relative z-0 drop-shadow-md"}>
      <MountCheck key={datasheets[0].id}>
        {/* Unit Composition  */}
        <UnitComposition datasheets={datasheets} />
        {/* Weapon stats table */}
        <WeaponStats allWargearList={allWargearList} />

        {/* Combi weapons table section */}
        <CombiWeaponStats allCombiWeaponsList={allCombiWeaponsList} />
        {/* Other wargear and wargear options  */}
        <OtherWargearOptions
          otherWargear={otherWargear}
          datasheets_options={datasheets_options}
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
