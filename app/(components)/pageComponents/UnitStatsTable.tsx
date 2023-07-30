"use client";
import * as React from "react";

export default function UnitStatsTable(props: any) {
  const models = props.models;
  return (
    <>
      <div
        className={
          "grid grid-cols-15 bg-neutral-500 border border-neutral-800 rounded-md p-2.5 drop-shadow-md text-neutral-50 font-semibold"
        }
      >
        <div className={"ml-2.5 col-span-1"}>No</div>
        <div className={"col-span-3"}>Unit Name</div>
        <div className={"col-span-1"}>M</div>
        <div className={"col-span-1"}>WS</div>
        <div className={"col-span-1"}>BS</div>
        <div className={"col-span-1"}>S</div>
        <div className={"col-span-1"}>T</div>
        <div className={"col-span-1"}>W</div>
        <div className={"col-span-1"}>A</div>
        <div className={"col-span-1"}>Ld</div>
        <div className={"col-span-1"}>Sv</div>
        <div className={"col-span-2"}>Base</div>
      </div>

      {models.map((model: any, index: number) => (
        <div
          key={model.name}
          className={
            "grid grid-cols-15 border border-neutral-300 rounded-md p-2.5 drop-shadow-md  odd:bg-neutral-200 even:bg-neutral-50 "
          }
        >
          <div className={"ml-2.5 col-span-1 font-semibold"}> {model.line}</div>
          <div className={"col-span-3 font-semibold"}> {model.name}</div>
          <div className={"col-span-1"}> {model?.M}</div>
          <div className={"col-span-1"}> {model?.WS}</div>
          <div className={"col-span-1"}> {model?.BS}</div>
          <div className={"col-span-1"}> {model?.S}</div>
          <div className={"col-span-1"}> {model?.T}</div>
          <div className={"col-span-1"}> {model?.W}</div>
          <div className={"col-span-1"}> {model?.A}</div>
          <div className={"col-span-1"}> {model?.Sv}</div>
          <div className={"col-span-1"}> {model?.Ld}</div>
          <div className={"col-span-2"}> {model?.base_size}</div>
        </div>
      ))}
    </>
  );
}
