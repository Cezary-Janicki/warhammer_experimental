// "use client";
import Link from "next/link";
export default function NavbarPopup(props: any) {
  let units = props.units;
  let roles = props.roles;
  let faction = props.faction;

  return (
    <>
      <ul className="dropdown-content absolute text-gray-700 pt-1">
        {roles.map((role: string, index: number) => {
          return (
            <li className="dropdown">
              <a
                className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                href="#"
                key={index}
              >
                {role}
              </a>
              <ul className="dropdown-content absolute hidden text-gray-700 pl-5 ml-24 -mt-10">
                {units.map((unit: any) => {
                  if (unit.role == role && faction == unit.faction_id) {
                    return (
                      <li>
                        <a
                          className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                          href="#"
                        >
                          <Link
                            href={`/factions/${unit.faction_id}/${unit.name}`}
                          >
                            {unit.name}
                          </Link>
                        </a>{" "}
                      </li>
                    );
                  }
                })}
              </ul>
            </li>
          );
        })}
      </ul>
      {/* </div> */}
    </>
  );
}
