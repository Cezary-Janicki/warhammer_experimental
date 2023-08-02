"use client";
import * as React from "react";
import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import MountCheck from "../mountCheck";
import Datasheet_models from "../dataFetching/Datasheets_models";

// i need to fetch wargear, there there are profiles for combi weapons that need to be displayed in a diffrent manner, maybe a loop?
export default function UnitWargearTable(props: any) {
  const allWargearList = props.allWargearList;
  const allCombiWeaponsList = props.allCombiWeaponsList;
  const allWargear = props.allWargear;
  const modelAbilites = props.modelAbilites;
  const otherWargear = props.otherWargear;
  const datasheets_options = props.datasheets_options;
  const unit_keywords = props.unit_keywords;
  const faction_keywords = props.faction_keywords;

  function stripHTML(props: string) {
    // const cleanComp = props.replace(/<\/?[^>]+(>|$)/g, "");
    const cleanComp = props.replace(/<\/?("[^"]*"|'[^']*'|[^>])*(>|$)/g, "");
    cleanComp.replace(/<\/?tbody>/g, ""); // remove tbody
    return cleanComp;
  }

  return (
    <>
      <MountCheck>
        <div
          className={
            "grid grid-cols-20 bg-neutral-500 border border-neutral-800 rounded-md p-2.5 drop-shadow-md text-neutral-50 font-semibold"
          }
        >
          <div className={"ml-2.5 col-span-5"}>Weapon</div>
          <div className={"col-span-1"}>Range</div>
          <div className={"col-span-2"}>Type</div>
          <div className={"col-span-1"}>S</div>
          <div className={"col-span-1"}>AP</div>
          <div className={"col-span-1"}>D</div>
          <div className={"col-span-7"}>Abilities</div>
        </div>
        {allWargearList.map((wargear: any, index: number) => (
          <div
            className={
              "grid grid-cols-20 border border-neutral-300 rounded-md p-2.5 drop-shadow-md  odd:bg-neutral-200 even:bg-neutral-50 "
            }
          >
            <div className={"ml-2.5 col-span-5 font-semibold"}>
              {wargear.name}
            </div>
            <div className={"col-span-1"}> {wargear?.Range}</div>
            <div className={"col-span-2"}> {wargear?.type}</div>
            <div className={"col-span-1"}> {wargear?.S}</div>
            <div className={"col-span-1"}> {wargear?.AP}</div>
            <div className={"col-span-1"}> {wargear?.D}</div>
            <div className={"col-span-7"}>{stripHTML(wargear?.abilities)}</div>
          </div>
        ))}
        {/* Combi weapons table section */}
        {allCombiWeaponsList.map(
          (wargear: any, combiIndex: number) => (
            // wargear.map((profile: any, profileIndex: number) => (
            <div
              className={
                "grid grid-cols-20 border border-neutral-300 rounded-md p-2.5 drop-shadow-md  odd:bg-neutral-200 even:bg-neutral-50 divide-y odd:divide-neutral-400 even:divide-neutral-300"
                // i need to add gradient text decoration here
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
                className={
                  "ml-4 col-span-5 underline decoration-dotted py-0.5 "
                }
              >
                {wargear[1].name}
              </div>
              <div className={"col-span-1"}> {wargear[1]?.Range}</div>
              <div className={"col-span-2"}> {wargear[1]?.type}</div>
              <div className={"col-span-1"}> {wargear[1]?.S}</div>
              <div className={"col-span-1"}> {wargear[1]?.AP}</div>
              <div className={"col-span-1"}> {wargear[1]?.D}</div>
              <div className={"col-span-9"}>
                {stripHTML(wargear[1]?.abilities)}
              </div>
              {/* Profile 2 */}
              <div
                className={"ml-4 col-span-5 underline decoration-dotted py-0.5"}
              >
                {wargear[2].name}
              </div>
              <div className={"col-span-1"}> {wargear[2]?.Range}</div>
              <div className={"col-span-2"}> {wargear[2]?.type}</div>
              <div className={"col-span-1"}> {wargear[2]?.S}</div>
              <div className={"col-span-1"}> {wargear[2]?.AP}</div>
              <div className={"col-span-1"}> {wargear[2]?.D}</div>
              <div className={"col-span-9"}>
                {stripHTML(wargear[2]?.abilities)}
              </div>
              {Object.keys(wargear).length == 4 ? (
                <>
                  <div
                    className={
                      "ml-4 col-span-5 underline decoration-dotted py-0.5"
                    }
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
          )
          // ))
        )}
        {/* Other wargear */}
        {Object.keys(otherWargear).length >= 1 ? (
          <>
            <div
              className={
                "grid grid-cols-20 bg-neutral-500 border border-neutral-800 rounded-md p-2.5 drop-shadow-md text-neutral-50 font-semibold"
              }
            >
              <div className={"ml-2.5 col-span-3"}>Other wargear</div>
              <div className={"col-span-17"}>Abilites</div>
            </div>
            {otherWargear.map((wargear: any, index: number) => (
              <div
                className={
                  "grid grid-cols-20 border border-neutral-300 rounded-md p-2.5 drop-shadow-md  odd:bg-neutral-200 even:bg-neutral-50 "
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
              "flex flex-row gap-1 bg-neutral-50 border border-neutral-300 rounded-md p-2.5 drop-shadow-md"
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
        {/* Abilites/traits table */}
        {Object.keys(modelAbilites).length >= 1 ? (
          <div
            className={
              "flex flex-row gap-1 bg-neutral-50 border border-neutral-300 rounded-md p-2.5 drop-shadow-md"
            }
          >
            <p className={"basis-1/5 p-2 font-semibold"}>Abilities</p>
            <div
              className={"columns-3 gap-8 break-inside-avoid-column basis-4/5"}
            >
              {modelAbilites.map((ability: any, index: number) => (
                <p key={ability.name} className="break-inside-avoid-column">
                  <div className="text-red-700 font-semibold">
                    {ability.name}
                  </div>
                  <div>{ability.description}</div>
                </p>
              ))}
            </div>
          </div>
        ) : (
          <p></p>
        )}
        {/* Unit keywords*/}
        {Object.keys(unit_keywords).length >= 1 ? (
          <div
            className={
              "flex flex-row gap-1 bg-neutral-50 border border-neutral-300 rounded-md p-2.5 drop-shadow-md"
            }
          >
            <p className={"basis-1/5 p-2 text-xl font-light "}>Keywords</p>

            {unit_keywords.map((keyword: any, index: number) => (
              <p
                key={keyword.keyword}
                className="font-semibold p-2 underline decoration-dotted"
              >
                {keyword.keyword}
              </p>
            ))}
          </div>
        ) : (
          <p></p>
        )}
        {/* Faction keywords*/}
        {Object.keys(faction_keywords).length >= 1 ? (
          <div
            className={
              "flex flex-row gap-1 bg-neutral-50 border border-neutral-300 rounded-md p-2.5 drop-shadow-md"
            }
          >
            <p className={"basis-1/5 p-2 text-xl font-light "}>
              Faction Keywords
            </p>

            {faction_keywords.map((keyword: any, index: number) => (
              <p
                key={keyword.keyword}
                className="font-semibold p-2 underline decoration-dotted"
              >
                {keyword.keyword}
              </p>
            ))}
          </div>
        ) : (
          <p></p>
        )}
      </MountCheck>
    </>
  );
}

{
  /* Combi weapons table section */
}
{
  /* {allCombiWeaponsList.map((wargear: any, combiIndex: number) => {
        
          // Now i have to loop wargear and make it into a list
          // Each loop is a single div that contains header and a list
          // Those would also need to be looped but loop
          // Would loop over elements of wargear and put those into list elements
          // Starting from index 1 ( index 0 is always the header)
          // <div>

          // <> header</>
          // <> for loop with delayed index</>
          // Combi weapons headers
          {
            <>
              <div className={"ml-2.5 col-span-3 font-semibold"}>
                {wargear[0].name}
              </div>
              <div className={"col-span-17"}>
                {stripHTML(wargear[0]?.description)}
              </div>
            </>;
            for (let step = 1; step < Object.keys(wargear).length; step++) {
              <li
              >
                <div className={"ml-2.5 col-span-3 font-semibold"}>
                  {wargear[step]?.name}
                </div>
                <div className={"col-span-1"}> {wargear[step]?.Range}</div>
                <div className={"col-span-2"}> {wargear[step]?.type}</div>
                <div className={"col-span-1"}> {wargear[step]?.S}</div>
                <div className={"col-span-1"}> {wargear[step]?.AP}</div>
                <div className={"col-span-1"}> {wargear[step]?.D}</div>
                <div className={"col-span-7"}>
                  {stripHTML(wargear[step]?.abilities)}
                </div>
              </li>;
            }
          }
        })} */
}
