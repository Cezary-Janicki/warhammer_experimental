import stripHTML from "../../parseData/stripHTML";
export default function WeaponStats(props: any) {
  const allWargearList = props.allWargearList;
  const allWargear = props.allWargear;
  return (
    <div>
      <div
        className={
          "grid grid-cols-20 bg-neutral-500 border border-neutral-800 rounded-md p-2.5  text-neutral-50 font-semibold"
        }
      >
        <div className={"ml-2.5 col-span-4"}>Weapon</div>
        <div className={"col-span-2"}></div>
        <div className={"col-span-1 text-right"}>Range</div>
        <div className={"col-span-2 text-right"}>Type</div>
        <div className={"col-span-1 text-right"}>S</div>
        <div className={"col-span-1 text-right"}>AP</div>
        <div className={"col-span-1 text-right"}>D</div>
        <div className={"col-span-8 ml-4"}>Abilities</div>
      </div>
      {/* Unit weapon tables */}
      {allWargearList.map((wargear: any, index: number) => (
        <>
          {allWargear.map((item: any) => (
            <>
              {item.wargear_id == wargear.wargear_id ? (
                <div
                  className={
                    "grid grid-cols-20 border border-neutral-300 rounded-md p-2.5   odd:bg-neutral-200 even:bg-neutral-50 "
                  }
                >
                  <div className={"ml-2.5 col-span-4 font-semibold"}>
                    {wargear.name}
                  </div>
                  {item.cost > 0 ? (
                    <div
                      className={
                        "col-span-2 bg-red-700 text-center text-neutral-50 font-bold rounded-full h-7 w-16"
                      }
                    >
                      {item.cost} pts
                    </div>
                  ) : (
                    <div className={"col-span-2"}></div>
                  )}
                  <div className={"col-span-1 text-right"}>
                    {wargear?.Range}
                  </div>
                  <div className={"col-span-2 text-right"}>{wargear?.type}</div>
                  <div className={"col-span-1 text-right"}> {wargear?.S}</div>
                  <div className={"col-span-1 text-right"}> {wargear?.AP}</div>
                  <div className={"col-span-1 text-right"}> {wargear?.D}</div>
                  <div className={"col-span-8 ml-4 text-justify"}>
                    {stripHTML(wargear?.abilities)}
                  </div>
                </div>
              ) : (
                <></>
              )}
            </>
          ))}
        </>
      ))}
    </div>
  );
}
