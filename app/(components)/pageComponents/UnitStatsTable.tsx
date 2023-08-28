"use client";
import * as React from "react";

export default function UnitStatsTable(props: any) {
  const models = props.models;
  console.log("model", models);
  return (
    <>
      <div
        className={
          "grid grid-cols-16 bg-neutral-500 border border-neutral-800 rounded-md p-2.5 drop-shadow-md text-neutral-50 font-semibold"
        }
      >
        <div className={"ml-2.5 col-span-1"}>No</div>
        <div className={"col-span-3"}>Unit Name</div>
        <div className={"col-span-1"}>Cost</div>
        <div className={"col-span-1 text-right"}>M</div>
        <div className={"col-span-1 text-right"}>WS</div>
        <div className={"col-span-1 text-right"}>BS</div>
        <div className={"col-span-1 text-right"}>S</div>
        <div className={"col-span-1 text-right"}>T</div>
        <div className={"col-span-1 text-right"}>W</div>
        <div className={"col-span-1 text-right"}>A</div>
        <div className={"col-span-1 text-right"}>Ld</div>
        <div className={"col-span-1 text-right"}>Sv</div>
        <div className={"col-span-2 text-right"}>Base</div>
      </div>

      {models.map((model: any, index: number) => (
        <div
          key={model.name}
          className={
            "grid grid-cols-16 border border-neutral-300 rounded-md p-2.5 drop-shadow-md  odd:bg-neutral-200 even:bg-neutral-50 "
          }
        >
          <div className={"ml-2.5 col-span-1 font-semibold"}> {model.line}</div>
          <div className={"col-span-3 font-semibold"}> {model.name}</div>
          {model.name.length >= 1 ? (
            <div
              className={
                "col-span-1 bg-red-700 text-center text-neutral-50 font-bold rounded-full"
              }
            >
              {model?.Cost} pts
            </div>
          ) : (
            <div className="col-span-1"></div>
          )}

          <div className={"col-span-1 text-right"}> {model?.M}</div>
          <div className={"col-span-1 text-right"}> {model?.WS}</div>
          <div className={"col-span-1 text-right"}> {model?.BS}</div>
          <div className={"col-span-1 text-right"}> {model?.S}</div>
          <div className={"col-span-1 text-right"}> {model?.T}</div>
          <div className={"col-span-1 text-right"}> {model?.W}</div>
          <div className={"col-span-1 text-right"}> {model?.A}</div>
          <div className={"col-span-1 text-right"}> {model?.Sv}</div>
          <div className={"col-span-1 text-right"}> {model?.Ld}</div>
          <div className={"col-span-2 text-right"}> {model?.base_size}</div>
        </div>
      ))}
    </>
  );
}
