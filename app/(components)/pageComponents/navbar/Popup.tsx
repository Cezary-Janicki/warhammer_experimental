// "use client";
import Link from "next/link";
export default function NavbarPopup(props: any) {
  let units = props.units;
  let roles = props.roles;
  let faction = props.faction;

  function countRoles() {
    let result = units.reduce(function (acc, val) {
      if (faction == val.faction_id) {
        acc[val.role] = (acc[val.role] || 0) + 1;
      }
      return acc;
    }, {});
    return result;
  }
  // i need to reduce here to find out what roles are being used and which shouldnt be displayed
  return (
    <>
      {console.log("count roles", Object.keys(countRoles()).includes("Troops"))}
      <div>
        <ul className="dropdown-content absolute text-gray-700 pt-1">
          {roles.map((role: string, index: number) => {
            return (
              <li className="dropdown">
                {Object.keys(countRoles()).includes(role) == true ? (
                  <a
                    className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
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
                            className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
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
