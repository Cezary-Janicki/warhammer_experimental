"use client";
import { StringToHtml } from "@/app/(components)/stringToHtml";
import UnitStratagemHeader from "./UnitStratagemHeader";

export default async function UnitStratagems(props: any) {
  const stratagems = props.stratagems;
  const phases = props.phases;
  return (
    <>
      <div className="">Datasheet related stratagems</div>
      <div className="columns-2 gap-8 break-inside-avoid-column">
        {stratagems.map((stratagem: any, index: any) => {
          return (
            <ul className="block break-inside-avoid-column my-3 rounded-lg border-l-2 border-neutral-200">
              <div className="text-slate-100 text-lg font-bold">
                <UnitStratagemHeader stratagem={stratagem} phases={phases} />
              </div>
              <div className="divide-y-2">
                <li className="font-bold my-1">{stratagem.type}</li>
                {/* <li className="italic my-1 bg-neutral-200  rounded-lg border-2 border-neutral-400"> */}
                <li className="italic my-1">{stratagem.legend}</li>
                <li className="text-justify my-1">
                  {StringToHtml(stratagem.description)}
                </li>
              </div>
            </ul>
          );
        })}
      </div>
    </>
  );
}
