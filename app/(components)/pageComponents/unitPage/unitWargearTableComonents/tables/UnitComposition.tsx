import React from "react";

export default function UnitComposition(props: any) {
  const cleanComp =
    props.datasheets[0].unit_composition === null ||
    props.datasheets[0].unit_composition === undefined
      ? ""
      : props.datasheets[0].unit_composition.replace(/<\/?[^>]+(>|$)/g, "");
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
