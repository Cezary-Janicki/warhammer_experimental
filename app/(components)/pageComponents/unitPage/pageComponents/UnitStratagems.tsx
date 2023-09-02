"use client";
import { StringToHtml } from "@/app/(components)/stringToHtml";

export default function UnitStratagems(props: any) {
  const stratagems = props.stratagems;
  return (
    <>
      <div className="">Datasheet related stratagems</div>
      {stratagems.map((stratagem: any, index: any) => {
        return (
          <div>
            <div className="block border-2 border-cyan-300">
              <div className="inline-block">{stratagem.name}</div>
              <div className="inline-block">{stratagem.cp_cost}</div>
              <div className="">{stratagem.type}</div>
              <div className="italic">{stratagem.legend}</div>
              <div className="">{StringToHtml(stratagem.description)}</div>
            </div>
          </div>
        );
      })}
    </>
  );
}
