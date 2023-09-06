// "use client";
import Link from "next/link";
import BattlefieldRoles from "../../dataFetching/BattlefieldRoles";
import sortArrayOfObjects from "../../sortObject";
import countRoles from "../../countRoles";
export default function NavbarPopup(props: any) {
  const units = props.units;
  const sortedUnits = sortArrayOfObjects(units, "name");
  const faction = props.faction;
  const roles = BattlefieldRoles();

  return (
    <ul className="dropdown-content absolute border-4  border-neutral-400 divide-y divide-neutral-300 text-gray-700 w-44">
      {roles.map((role: string, index: number) => {
        return (
          <li className="dropdown" key={index}>
            {countRoles(units, faction).includes(role) == true ? (
              <p
                className="bg-neutral-200 hover:bg-neutral-400 py-2 px-4 block "
                key={index}
              >
                {role}
              </p>
            ) : (
              <></>
            )}

            <ul className="dropdown-content absolute hidden ml-36 -mt-10 border-4 bg-neutral-200 text-gray-700 border-neutral-500 p-2 max-h-96 overflow-y-auto">
              <div className="columns-2 2xl:columns-3 divide-y divide-neutral-300">
                {sortedUnits.map((unit: any) => {
                  if (unit.role == role && faction == unit.faction_id) {
                    return (
                      <li key={unit.link}>
                        <div className="hover:bg-neutral-400 block w-48 break-inside-avoid-column">
                          <Link
                            href={`/factions/${
                              unit.faction_id
                            }/${unit.name.replaceAll(" ", "_")}`}
                          >
                            {unit.name}
                          </Link>
                        </div>
                      </li>
                    );
                  }
                })}
              </div>
            </ul>
          </li>
        );
      })}
    </ul>
  );
}
