import Link from "next/link";
import { MainFactions } from "../../(components)/dataFetching/Factions";
import getFactionName from "@/app/(components)/getFactionName";
import { getDatasheetByFaction } from "../../(components)/dataFetching/Datasheets";
import countRoles from "@/app/(components)/countRoles";
import BattlefieldRoles from "../../(components)/dataFetching/BattlefieldRoles";
import sortArrayOfObjects from "@/app/(components)/sortObject";

async function getUnitsByFaction(props: string) {
  const data = await getDatasheetByFaction(props);
  const sortedUnits = sortArrayOfObjects(data, "name");

  return sortedUnits;
}

export async function generateStaticParams() {
  const factions = await MainFactions();
  return factions.map((item: any) => ({
    faction: `${item.id}`,
  }));
}

export default async function Page({
  params,
}: {
  params: { faction: string; unit: string };
}) {
  const { faction } = await params;
  const unitsByFaction = await getUnitsByFaction(`${faction}`);
  const roles = BattlefieldRoles();
  return (
    <>
      <div className="bg-neutral-800 text-neutral-50 text-center text-2xl tracking-widest font-bold rounded-md p-2.5 drop-shadow-md mb-6">
        {getFactionName(faction)}
      </div>
      <div className="columns-3 gap-3 ">
        {roles.map((role, roleIndex) => {
          if (countRoles(unitsByFaction, faction).includes(role) == true) {
            return (
              <div
                key={roleIndex}
                className="border-2 border-neutral-300 bg-neutral-200 mb-6 p-2.5 break-inside-avoid-column rounded-md  "
              >
                <h1 className="font-semibold">{role}</h1>
                <ul>
                  {unitsByFaction.map(
                    (
                      unit1: {
                        faction_id: string;
                        role: string;
                        name: string;
                      },
                      unitIndex: number
                    ) => {
                      if (unit1.role === role) {
                        return (
                          <li key={unitIndex} className="list-none indent-6">
                            <Link
                              href={`/factions/${
                                unit1.faction_id
                              }/${unit1.name.replaceAll(" ", "_")}`}
                            >
                              {unit1.name}
                            </Link>
                          </li>
                        );
                      }
                    }
                  )}
                </ul>
              </div>
            );
          }
        })}
      </div>
    </>
  );
}
