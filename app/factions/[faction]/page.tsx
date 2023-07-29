import Link from "next/link";
import { MainFactions } from "../../(components)/dataFetching/Factions";
import Datasheets, {
  getDatasheetByFactionAndRole,
} from "../../(components)/dataFetching/Datasheets";
import { getDatasheetByFaction } from "../../(components)/dataFetching/Datasheets";
import BattlefieldRoles from "../../(components)/dataFetching/BattlefieldRoles";

async function getUnitsByFaction(props: string) {
  const data = await getDatasheetByFaction(props);
  return data;
}

async function createArray() {
  const units = await Datasheets();
  return units.map((item: { faction_id: string; name: string }) => ({
    faction: `${item.faction_id}`,
    unit: `${item.name}`,
  }));
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
      <p>Faction: {faction}</p>
      {/* <p>Unit: {unit}</p> */}
      <p>
        <Link href={`./`}>Return to main page</Link>
      </p>
      <p>All Faction units links</p>

 <div className="flex flex-wrap">
        {roles.map((role, roleIndex) => {
          return (
            <div key={roleIndex}>
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
                              href={`/factions/${unit1.faction_id}/${unit1.name}`}
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
        })}
 </div>
    </>
  );
}
