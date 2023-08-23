"use client";
import NavbarPopup from "./Popup";
import Link from "next/link";
import ArmiesByFaction from "../../dataFetching/ArmiesByFaction";
export default function NavbarFactions(props: any) {
  const units = props.units;
  const roles = props.roles;
  const factions = ArmiesByFaction();
  return (
    <>
      {Object.keys(factions).map((factionKeys: any, index) => {
        let factionArmies = Object.values(factions)[index];
        return (
          <div className="dropdown inline-block relative">
            <button className="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
              <span>{factionKeys}</span>
            </button>
            <ul className="dropdown-content absolute hidden text-gray-700 pt-1">
              {factionArmies.map((faction: any) => {
                return (
                  <>
                    <li className="dropdown">
                      <a
                        className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                        href="#"
                      >
                        <Link href={`/factions/${faction.faction_id}`}>
                          {faction.faction_name}
                        </Link>
                      </a>
                      <ul className="dropdown-content absolute hidden text-gray-700 pl-0 ml-24 -mt-10">
                        <li>
                          <NavbarPopup
                            units={units}
                            roles={roles}
                            faction={`${faction.faction_id}`}
                          />
                        </li>
                      </ul>
                    </li>
                  </>
                );
              })}
            </ul>
          </div>
        );
      })}
    </>
  );
}
