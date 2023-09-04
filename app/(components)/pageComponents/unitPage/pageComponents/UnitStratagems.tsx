"use client";
import { StringToHtml } from "@/app/(components)/stringToHtml";

export default function UnitStratagems(props: any) {
  const stratagems = props.stratagems;
  return (
    <>
      <div className="">Datasheet related stratagems</div>
      <div className="columns-2 gap-8 break-inside-avoid-column">
        {stratagems.map((stratagem: any, index: any) => {
          return (
            <ul className="block border-2 border-cyan-300 break-inside-avoid-column">
              <li className="">
                {stratagem.name}
                <span className="float-right block">{stratagem.cp_cost}</span>
              </li>
              <li className="">{stratagem.type}</li>
              <li className="italic">{stratagem.legend}</li>
              <li className="text-justify">
                {StringToHtml(stratagem.description)}
              </li>
            </ul>
          );
        })}
      </div>
    </>
  );
}
