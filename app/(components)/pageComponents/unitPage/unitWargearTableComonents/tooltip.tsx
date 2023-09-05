import { StringToHtml } from "../../../stringToHtml";
export function Tooltip(props: any) {
  let factionAbilites = props.factionAbilites;

  return (
    <>
      {factionAbilites.map((ability: any, index: number) => (
        <span className="has-tooltip">
          <span>
            <span className={"underline decoration-dotted"}>
              {ability.name}
            </span>{" "}
          </span>
          <div className="tooltip roundedbg bg-neutral-50 border-2 border-neutral-600 rounded-md p-2.5 shadow-lg shadow-neutral-600 mx-16 mt-3">
            <p className={"font-bold text-red-700"}>{ability.name}</p>
            <p className="font-light italic">{ability.legend}</p>
            {StringToHtml(ability.description)}
          </div>
        </span>
      ))}
    </>
  );
}
