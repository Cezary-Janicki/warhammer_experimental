import { Tooltip } from "../tooltip";
import { StringToHtml } from "@/app/(components)/stringToHtml";
export default function AbilitesTraits(props) {
  const modelAbilites = props.modelAbilites;
  const factionAbilites = props.facitonAbilities;
  return (
    <div>
      {" "}
      {Object.keys(modelAbilites).length >= 1 ? (
        <div
          className={
            "flex flex-row gap-1 bg-neutral-50 border border-neutral-300 rounded-md p-2.5 "
          }
        >
          <p className={"basis-1/5 p-2 font-semibold"}>Abilities</p>
          <div
            className={"columns-3 gap-8 break-inside-avoid-column basis-4/5"}
          >
            <Tooltip factionAbilites={factionAbilites} />
            {modelAbilites.map((ability: any, index: number) => (
              <div key={ability.name} className="break-inside-avoid-column">
                <div className="text-red-700 font-semibold">{ability.name}</div>
                <div>{StringToHtml(ability.description)}</div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p></p>
      )}
    </div>
  );
}
