import stripHTML from "../../parseData/stripHTML";
export default function OtherWargearOptions({
  otherWargear,
  datasheets_options,
}: any) {
  return (
    <div>
      {/* Other wargear */}
      {Object.keys(otherWargear).length >= 1 ? (
        <>
          <div
            className={
              "grid grid-cols-20 bg-neutral-500 border border-neutral-800 rounded-md p-2.5  text-neutral-50 font-semibold"
            }
          >
            <div className={"ml-2.5 col-span-3"}>Other wargear</div>
            <div className={"col-span-17"}>Abilites</div>
          </div>
          {otherWargear.map((wargear: any, index: number) => (
            <div
              className={
                "grid grid-cols-20 border border-neutral-300 rounded-md p-2.5   odd:bg-neutral-200 even:bg-neutral-50 "
              }
            >
              <div className={"ml-2.5 col-span-3 font-semibold"}>
                {wargear.name}
              </div>
              <div className={"col-span-17 mr-2.5"}>
                {stripHTML(wargear.description)}
              </div>
            </div>
          ))}
        </>
      ) : (
        <p></p>
      )}
      {/* Wargear options */}
      {Object.keys(datasheets_options).length >= 1 ? (
        <div
          className={
            "flex flex-row gap-1 bg-neutral-50 border border-neutral-300 rounded-md p-2.5 "
          }
        >
          <div className={"basis-1/5 p-2 font-semibold"}>Wargear options</div>
          <ul className={"basis-4/5 list-disc"}>
            {datasheets_options.map((option: any, index: number) => (
              <li key={index}>{stripHTML(option.description)}</li>
            ))}
          </ul>
        </div>
      ) : (
        <p></p>
      )}
    </div>
  );
}
