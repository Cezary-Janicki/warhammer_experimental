"use client";
import { StringToHtml } from "@/app/(components)/stringToHtml";
import UnitStratagemHeader from "./UnitStratagemHeader";

export default function UnitStratagems(props: any) {
  const stratagems = props.stratagems;
  const phases = props.phases;
  return (
    <div className="pb-5">
      <div
        className={
          Object.keys(stratagems).length >= 1
            ? "border border-neutral-300 bg-neutral-50 rounded-lg my-3  drop-shadow-2xl pb-5"
            : "hidden"
        }
      >
        <div className="bg-neutral-800 text-neutral-50 text-center text-2xl  tracking-widest font-bold rounded-md p-2.5 ">
          Datasheet related stratagems
        </div>
        <div className="columns-2 gap-8 break-inside-avoid-column pt-4 px-3">
          {stratagems.map((stratagem: any, index: any) => {
            return (
              <ul
                key={index}
                className="block break-inside-avoid-column mb-6 rounded-lg border-l-4 border-neutral-200"
              >
                <div className="text-slate-100 text-lg font-bold tracking-widest subpixel-antialiased">
                  <UnitStratagemHeader stratagem={stratagem} phases={phases} />
                </div>
                <div className="divide-y-2">
                  <li className="font-bold my-1">{stratagem.type}</li>
                  <li className="italic my-1">{stratagem.legend}</li>
                  <li className="text-justify my-1">
                    {StringToHtml(stratagem.description)}
                  </li>
                </div>
              </ul>
            );
          })}
        </div>
      </div>
    </div>
  );
}
