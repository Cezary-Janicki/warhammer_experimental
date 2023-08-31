import React from "react";

export default function UnitComposition(datasheets: any) {
  const cleanComp =
    datasheets[0].unit_composition === null ||
    datasheets[0].unit_composition === undefined
      ? ""
      : datasheets[0].unit_composition.replace(/<\/?[^>]+(>|$)/g, "");
  return (
    <div
      className={
        "bg-neutral-50 border border-neutral-300 rounded-md p-2.5  drop-shadow-md"
      }
    >
      <p className={"ml-2.5"}>{cleanComp}</p>
    </div>
  );
}
