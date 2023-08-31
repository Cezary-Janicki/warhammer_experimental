import stripHTML from "../../parseData/stripHTML";
export default function CombiWeaponStats(allCombiWeaponsList: any) {
  return (
    <div>
      {allCombiWeaponsList.map((wargear: any, combiIndex: number) => (
        <div
          className={
            "grid grid-cols-20 border border-neutral-300 rounded-md p-2.5   odd:bg-neutral-200 even:bg-neutral-50 divide-y odd:divide-neutral-400 even:divide-neutral-300"
          }
        >
          {/* Combi weapons headers */}
          <div className={"col-span-20"}>
            <div className={"grid grid-cols-20"}>
              <div className={"ml-2.5 col-span-5  font-semibold"}>
                {wargear[0].name}
              </div>
              <div className={"col-span-15"}>
                {stripHTML(wargear[0]?.description)}
              </div>
            </div>
          </div>
          {/* Combi weapons profiles */}
          {/* Profile 1 */}
          <div
            className={"ml-4 col-span-5 underline decoration-dotted py-0.5 "}
          >
            {wargear[1]?.name}
          </div>
          <div className={"col-span-1"}> {wargear[1]?.Range}</div>
          <div className={"col-span-2"}> {wargear[1]?.type}</div>
          <div className={"col-span-1"}> {wargear[1]?.S}</div>
          <div className={"col-span-1"}> {wargear[1]?.AP}</div>
          <div className={"col-span-1"}> {wargear[1]?.D}</div>
          <div className={"col-span-9"}>{stripHTML(wargear[1]?.abilities)}</div>
          {/* Profile 2 */}
          <div className={"ml-4 col-span-5 underline decoration-dotted py-0.5"}>
            {wargear[2]?.name}
          </div>
          <div className={"col-span-1"}> {wargear[2]?.Range}</div>
          <div className={"col-span-2"}> {wargear[2]?.type}</div>
          <div className={"col-span-1"}> {wargear[2]?.S}</div>
          <div className={"col-span-1"}> {wargear[2]?.AP}</div>
          <div className={"col-span-1"}> {wargear[2]?.D}</div>
          <div className={"col-span-9"}>{stripHTML(wargear[2]?.abilities)}</div>
          {Object.keys(wargear).length == 4 ? (
            <>
              <div
                className={"ml-4 col-span-5 underline decoration-dotted py-0.5"}
              >
                {wargear[3].name}
              </div>
              <div className={"col-span-1"}> {wargear[3]?.Range}</div>
              <div className={"col-span-2"}> {wargear[3]?.type}</div>
              <div className={"col-span-1"}> {wargear[3]?.S}</div>
              <div className={"col-span-1"}> {wargear[3]?.AP}</div>
              <div className={"col-span-1"}> {wargear[3]?.D}</div>
              <div className={"col-span-9"}>
                {stripHTML(wargear[3]?.abilities)}
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
      ))}
    </div>
  );
}
