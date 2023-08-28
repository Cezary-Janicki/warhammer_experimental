// "use client";
import Link from "next/link";
export default function NavbarPopup(props: any) {
  let units = props.units;
  let roles = props.roles;
  let faction = props.faction;

  function countRoles() {
    let result = units.reduce(function (
      acc: { [x: string]: any },
      val: { faction_id: any; role: string | number }
    ) {
      if (faction == val.faction_id) {
        acc[val.role] = (acc[val.role] || 0) + 1;
      }
      return acc;
    },
    {});
    return Object.keys(result);
  }
  return (
    <>
      <div>
        <ul className="dropdown-content absolute border-4 border-l-0 border-neutral-400 divide-y divide-neutral-300 text-gray-700">
          {roles.map((role: string, index: number) => {
            return (
              <li className="dropdown">
                {countRoles().includes(role) == true ? (
                  <a
                    className="bg-neutral-200 hover:bg-neutral-400 py-2 px-4 block whitespace-no-wrap"
                    href="#"
                    key={index}
                  >
                    {role}
                  </a>
                ) : (
                  <></>
                )}

                <ul className="dropdown-content absolute hidden text-gray-700 pl-5 ml-24 -mt-10">
                  {units.map((unit: any) => {
                    if (unit.role == role && faction == unit.faction_id) {
                      return (
                        <li key={unit.name}>
                          <a
                            className="bg-neutral-200 hover:bg-neutral-400 py-2 px-4 block whitespace-no-wrap"
                            href="#"
                          >
                            <Link
                              href={`/factions/${unit.faction_id}/${unit.name}`}
                            >
                              {unit.name}
                            </Link>
                          </a>
                        </li>
                      );
                    }
                  })}
                </ul>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
