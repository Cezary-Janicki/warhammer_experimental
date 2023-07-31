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

  // if wargear id is the same they should be displayed in a single "space"
  // in order to do this everytime there is a combi weapon it should be displayed in a single cell as a list
  // title of the list being combi - 1st weapon name and the subtract hitroll rules text
  return (
    <>
      <MountCheck>
        <div
          className={
            "grid grid-cols-20 bg-neutral-500 border border-neutral-800 rounded-md p-2.5 drop-shadow-md text-neutral-50 font-semibold"
          }
        >
          <div className={"ml-2.5 col-span-3"}>Weapon</div>
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
            <div className={"ml-2.5 col-span-3 font-semibold"}>
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
        {/* <div>{stripHTML(option.name)}</div>
                <div>{stripHTML(option.description)}</div> */}

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
