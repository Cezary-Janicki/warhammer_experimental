import stripHTML from "../../parseData/stripHTML";
export default function OtherWargearOptions(props: any) {
  const otherWargear = props.otherWargear;
  const datasheet_abilities = props.datasheet_abilities;
  const datasheets_options = props.datasheets_options;
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
            <div className={"ml-2.5 col-span-5"}>Other wargear</div>
            <div className={"col-span-15"}>Abilites</div>
          </div>
          {datasheet_abilities.map((datasheet_ability: any) => {
            return (
              <>
                {otherWargear.map((wargear: any, index: number) => (
                  <>
                    {datasheet_ability.ability_id == wargear.id ? (
                      <div
                        className={
                          "grid grid-cols-20 border border-neutral-300 rounded-md p-2.5   odd:bg-neutral-200 even:bg-neutral-50 "
                        }
                      >
                        <div className={"ml-2.5 col-span-3 font-semibold"}>
                          {wargear.name}
                        </div>
                        <div
                          className={
                            "col-span-2 bg-red-700 text-center text-neutral-50 font-bold rounded-full h-7 w-16"
                          }
                        >
                          {datasheet_ability.cost} pts
                        </div>
                        <div className={"col-span-15 mr-2.5"}>
                          {stripHTML(wargear.description)}
                        </div>
                      </div>
                    ) : (
                      <></>
                    )}
                  </>
                ))}
              </>
            );
          })}
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
          <div className={"basis-1/4 p-2 font-semibold"}>Wargear options</div>
          <ul className={"basis-3/4 list-disc"}>
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
