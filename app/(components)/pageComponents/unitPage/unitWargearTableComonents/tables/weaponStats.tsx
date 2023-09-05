import stripHTML from "../../parseData/stripHTML";
export default function WeaponStats(props: any) {
  const allWargearList = props.allWargearList;
  return (
    <div>
      <div
        className={
          "grid grid-cols-20 bg-neutral-500 border border-neutral-800 rounded-md p-2.5  text-neutral-50 font-semibold"
        }
      >
        <div className={"ml-2.5 col-span-5"}>Weapon</div>
        <div className={"col-span-1"}>cost</div>
        <div className={"col-span-1"}>Range</div>
        <div className={"col-span-2"}>Type</div>
        <div className={"col-span-1"}>S</div>
        <div className={"col-span-1"}>AP</div>
        <div className={"col-span-1"}>D</div>
        <div className={"col-span-6"}>Abilities</div>
      </div>
      {/* Unit weapon tables */}
      {allWargearList.map((wargear: any, index: number) => (
        <div
          className={
            "grid grid-cols-20 border border-neutral-300 rounded-md p-2.5   odd:bg-neutral-200 even:bg-neutral-50 "
          }
        >
          <div className={"ml-2.5 col-span-5 font-semibold"}>
            {wargear.name}
          </div>
          <div className={"col-span-1"}> cost</div>
          <div className={"col-span-1"}> {wargear?.Range}</div>
          <div className={"col-span-2"}> {wargear?.type}</div>
          <div className={"col-span-1"}> {wargear?.S}</div>
          <div className={"col-span-1"}> {wargear?.AP}</div>
          <div className={"col-span-1"}> {wargear?.D}</div>
          <div className={"col-span-6"}>{stripHTML(wargear?.abilities)}</div>
        </div>
      ))}
    </div>
  );
}
